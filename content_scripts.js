function findIncorrectFont(message) {
    if (message.content === 'find') {
        const ext = ['#text', 'script'];

        const allowFonts = [
            'SFUIDisplay-Regular',
            'SFUIDisplayRegular',
            'SFUIDisplay-Bold',
            'SFUIDisplayBold',
            'SFUIDisplay-Medium',
            'SFUIDisplayMedium',
            'PTSans',
            'HelveticaNeue',
            'HelveticaNeue-Medium',
            'HelveticaNeue-Bold',
        ];
        // let limit = 2000

        const run = function (node) {
            node.childNodes.forEach((n) => {
                if (ext.includes(n.nodeName.toLowerCase())) {
                    return;
                }
                const cs =
                    'computedStyleMap' in node ? node.computedStyleMap() : null;

                if (!cs) {
                    console.warn('no style > ', n.nodeName);
                    return;
                }

                const hasText = Array.from(n.childNodes).some(
                    (c) => c.nodeName === '#text' && c.textContent.trim()
                );

                if (hasText) {
                    const ff = cs.get('font-family')?.toString();
                    if (!allowFonts.includes(ff)) {
                        console.error('err fonts > ', ff, ', node > ', n);
                    }

                    const fw = cs.get('font-weight')?.value || 0;
                    if (fw !== 400) {
                        console.error('err fonts > ', fw, ', node > ', n);
                    }
                }

                run(n);
            });
        };

        run(document.body);
        console.info('======== finish =======');
        // run(document.querySelectorAll('.nav-links li')[11])
    }
}

chrome.runtime.onMessage.addListener(findIncorrectFont);

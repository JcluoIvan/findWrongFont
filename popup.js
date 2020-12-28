var getSelectedTab = (tab) => {
    var tabId = tab.id;
    var sendMessage = (messageObj) =>
        chrome.tabs.sendMessage(tabId, messageObj);
    document.getElementById('find-button').addEventListener('click', () =>
        sendMessage({
            content: 'find',
        })
    );
};
chrome.tabs.getSelected(null, getSelectedTab);

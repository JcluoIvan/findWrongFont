// function checkForValidUrl() {
//     chrome.tabs.getSelected(null, function (tab) {
//         chrome.tabs.query(
//             { active: true, currentWindow: true },
//             function (tabs) {
//                 chrome.tabs.sendMessage(tabs[0].id, {}, function () {});
//             }
//         );
//     });
// }

// chrome.tabs.onUpdated.addListener(checkForValidUrl);

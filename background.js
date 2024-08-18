chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.action === 'startFocusMode') {
    chrome.tabs.query({}, (tabs) => {
      tabs.forEach(tab => {
        chrome.tabs.executeScript(tab.id, { file: 'content.js' });
      });
    });
  }
});

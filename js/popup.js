document.getElementById('translateButton').addEventListener('click', function() {
  chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
    const tab = tabs[0];
    chrome.tabs.sendMessage(tab.id, { action: 'translate' });
  });
});

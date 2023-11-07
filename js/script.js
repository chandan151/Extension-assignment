chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
    if (request.action === 'translate') {
      console.log('working');
    }
  });
  
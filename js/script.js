const xhr = new XMLHttpRequest();

const baseurl = "https://api.funtranslations.com/translate/pirate.json?text=";
var heading = document.getElementById("firstHeading");


chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
    if (request.action === 'translate') {
      console.log('working');
      var query;
      query = heading.textContent;
      const url = baseurl + query;

      xhr.open("GET", url);
      xhr.send(null);

      xhr.onload = function() {
        console.log("api gave response");
        txt = JSON.parse(xhr.responseText);
        console.log(txt);
        console.log(txt.contents.translated);
        heading.textContent = txt.contents.translated;
      }

    }
  });
  
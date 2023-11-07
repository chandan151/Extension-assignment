const xhr = new XMLHttpRequest();

const baseurl = "https://api.funtranslations.com/translate/pirate.json?text=";
var heading = document.getElementById("firstHeading");

chrome.runtime.onMessage.addListener(async function(request, sender, sendResponse) {
    if (request.action === 'translate') {
      console.log('working');
      var query = document.body.innerText;
      var queries = query.match(/.{1,500}/g); // Split the text into chunks of 500 characters each
      console.log(queries);

      for (let i = 0; i < queries.length; i++) {
        const url = baseurl + queries[i];

        xhr.open("GET", url);
        xhr.send(null);

        await new Promise(resolve => {
          xhr.onload = function() {
            txt = JSON.parse(xhr.responseText);
            console.log(txt);
            console.log(txt.contents.translated);
            document.body.innerText.textContent = txt.contents.translated;
            resolve();
          }
        });
      }
    }
});
  
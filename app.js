var btnTranslate = document.querySelector("#btn-translate");
var txtInput = document.querySelector("#txt-input");
var outputDiv = document.querySelector("#output");

console.log(txtInput);

// var serverUrl = "https://lessonfourapi.tanaypratap.repl.co/translate/yoda.json";

var serverUrl="https://api.funtranslations.com/translate/minion.json";



function getTranslationUrl(text){
    return serverUrl + "?" + "text= "+ text;
}


function clickHandler(){


  var inputTxt = txtInput.value ; // taking input

  // calling server for processing
  fetch(getTranslationUrl(inputTxt))
    .then( response => response.json())
    .then(json => {
        var translatedText = json.contents.translated;
        outputDiv.innerText = translatedText;  // output
    })
  
}

btnTranslate.addEventListener("click",clickHandler);
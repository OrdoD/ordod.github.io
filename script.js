/***************************************************************************************************
*                                      Web Speech API
****************************************************************************************************/
// Google Chrome Support for Web Speech API
const SpeechRecognition = window.SpeechRecognition || webkitSpeechRecognition;
//const SpeechGrammarList = window.SpeechGrammarList || webkitSpeechGrammarList;
const SpeechRecognitionEvent = window.SpeechRecognitionEvent || webkitSpeechRecognitionEvent;

// Define Speech Recognition instances
const recognition = new SpeechRecognition();
//const speechRecognitionList = new SpeechGrammarList();

// Set properties of Speech Recognition instance
recognition.continuous = false;
recognition.lang = 'en-US';
recognition.interimResults = false;
recognition.maxAlternatives = 1;

// Constants for page items

//Capture functions
function sendInput(){
    let txt = document.getElementById("txt").value;
    if (txt == ""){
        return;
    }
    //Send here
    console.log(txt);
    
    //Cleanup
    document.getElementById("txt").value = "";
}

function captureMic(){
    recognition.start();
    console.log("recognition.start() called");
}
recognition.onresult = function (event) {
    console.log("recognition.onResult called");
    var capturedText = event.results[0][0].transcript;
    document.getElementById("txt").value = capturedText;
    console.log(capturedText);
}

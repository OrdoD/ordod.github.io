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

recognition.onresult = function (event) {
    console.log("recognition.onResult called");
    var capturedText = event.results[0][0].transcript;
    document.getElementById("txt").value = capturedText;
    console.log(capturedText);
}

//Page item variables
var chatText = "";

//Helpful functions
function strOnlySpaces(str){
	return str.trim().length === 0;
}

//Jquery page functions
$(document).ready(function(){
	
	//Capture functions
	$("#mic").click(function(){
		recognition.start();
		console.log("recognition.start() called");
	});
	
	$("#send").click(function(){
		let txt = $("#txt").val();
		if (txt == "" || strOnlySpaces(txt)){
			$("#txt").val("");
			return;
		}
		//Send here
		console.log(txt);
	
    
		//Cleanup
		$("#txt").val("");
		
		//Chatbox
		chatText += "You: " + txt + "\n";
		$("#chat").text(chatText);
		$("#chat").scrollTop($("#chat").height())
	});
});



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
recognition.grammars = speechRecognitionList;
recognition.continuous = false;
recognition.lang = 'en-US';
recognition.interimResults = false;
recognition.maxAlternatives = 1;

// Constants for page items
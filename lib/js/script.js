/***************************************************************************************************
*                                      Web Speech API
****************************************************************************************************/
/*
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
*/
/***************************************************************************************************
*                                      Chatbot JS
****************************************************************************************************/
// Credits: https://www.htmlgoodies.com/javascript/basic-chatbot-in-javascript/
// input options
const utterances = [
 
    ["how are you", "how is life", "how are things"],
    ["hi", "hey", "hello", "good morning", "good afternoon"],
    ["what are you doing", "what is going on", "what is up"],
    ["how old are you"],
    ["who are you", "are you human", "are you bot", "are you human or bot"],
    ["who created you", "who made you"],
    [
      "your name please",
      "your name",
      "may i know your name",
      "what is your name",
      "what call yourself"
    ],
    ["happy", "good", "fun", "wonderful", "fantastic", "cool"],
    ["bad", "bored", "tired"],
    ["help me", "tell me story", "tell me joke"],
    ["ah", "yes", "ok", "okay", "nice"],
    ["bye", "good bye", "goodbye", "see you later"],
    ["what should i eat today"],
    ["what", "why", "how", "where", "when"],
    ["no", "not sure", "maybe", "no thanks"],
    [""],
    ["haha", "ha", "lol", "hehe", "funny", "joke"]
  ];
  
  // Possible responses corresponding to triggers
  
  const answers = [
     [
      "Fine... how are you?",
      "Pretty well, how are you?",
      "Fantastic, how are you?"
    ],
    [
      "Hello!", "Hi!", "Hey!", "Hi there!", "Howdy"
    ],
    [
      "Nothing much",
      "About to go to sleep",
      "Can you guess?",
      "I don't know actually"
    ],
    ["I am infinite"],
    ["I am just a bot", "I am a bot. What are you?"],
    ["The one true God, JavaScript"],
    ["I am nameless", "I don't have a name"],
    ["Have you ever felt bad?", "Glad to hear it"],
    ["Why?", "Why? You shouldn't!"],
    ["What about?", "Once upon a time..."],
    ["Tell me a story", "Tell me a joke", "Tell me about yourself"],
    ["Bye", "Goodbye", "See you later"],
    ["Pasta", "Burger"],
    ["Great question"],
    ["That's ok", "What do you want to talk about?"],
    ["Please say something :("],
    ["Haha!", "Good one!"]
  ];
  
  // Random for any other user input
  
  const alternatives = [
    "Go on...",
    "Try again",
  ];


  document.addEventListener("DOMContentLoaded", () => {
    const inputField = document.getElementById("input");
    inputField.addEventListener("keydown", (e) => {
        if (e.code === "Enter") {
        let input = inputField.value;
        inputField.value = "";
        output(input);
        console.log();
        }
    });
  });
  

  function output(input) {
    let product;
    let text = input.toLowerCase().replace(/[^\w\s\d]/gi, "");
    text = text
      .replace(/ a /g, " ")
      .replace(/whats/g, "what is")
      .replace(/please /g, "")
      .replace(/ please/g, "")
      .replace(/r u/g, "are you");
  
    if (compare(utterances, answers, text)) {
      // Search for exact match in triggers
      product = compare(utterances, answers, text);
    } 
    else {
      product = alternatives[Math.floor(Math.random() * alternatives.length)];
    }
  
    addChatEntry(input, product);
  }
  
  function compare(utterancesArray, answersArray, string) {
    let reply;
    let replyFound = false;
    for (let x = 0; x < utterancesArray.length; x++) {
      for (let y = 0; y < utterancesArray[x].length; y++) {
        if (utterancesArray[x][y] === string) {
          let replies = answersArray[x];
          reply = replies[Math.floor(Math.random() * replies.length)];
          replyFound = true;
          break;
        }
      }
      if (replyFound) {
        break;
      }
    }

    return reply;
  }
  
  function addChatEntry(input, product) {
    const messagesContainer = document.getElementById("messages");
    let userDiv = document.createElement("div");
    userDiv.id = "user";
    userDiv.className = "user response";
    userDiv.innerHTML = `<span>${input}</span>`;
    messagesContainer.appendChild(userDiv);
  
    let botDiv = document.createElement("div");
    let botText = document.createElement("span");
    botDiv.id = "bot";
    botDiv.className = "bot response";
    botText.innerText = "Typing...";
    botDiv.appendChild(botText);
    messagesContainer.appendChild(botDiv);
  
    messagesContainer.scrollTop =
      messagesContainer.scrollHeight - messagesContainer.clientHeight;
  
    setTimeout(() => {
      botText.innerText = `${product}`;
    }, 2000);
  }
  
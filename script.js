//Create questions as an array
var questions = [
  "Commonly used data types DO NOT include:",
  "The condition in an if / else statement is enclosed within __________ .",
  "Arrays in JavaScript can be used to store ________ .",
  "String values must be enclosed within _________ when being assigned to variables.",
  "A very useful tool used during development and debugging for printing content to the debugger is:",
];
var answers = [
  "alerts",
  "parentheses",
  "all of the above",
  "quotes",
  "console log",
];
// Start button to start the quiz
// Assignment Code
var startBtn = document.getElementById("start");
var answer1Btn = document.getElementById("answer1");
var answer2Btn = document.getElementById("answer2");
var answer3Btn = document.getElementById("answer3");
var answer4Btn = document.getElementById("answer4");

// Add event listener to generate button to open prompts
startBtn.addEventListener("click", startQuiz);
answer1Btn.addEventListener("click", startQuiz);
answer2Btn.addEventListener("click", startQuiz);
answer3Btn.addEventListener("click", startQuiz);
answer4Btn.addEventListener("click", startQuiz);
//Creating the Main page  title and subtext
//Main title
var h1 = document.querySelector("#text");
h1.textContent = "Coding Quiz Challenge";
//Subtext
var h2 = document.querySelector("#subtext");
h2.textContent =
  "Try to answer the folling code-related questons within the time limit. Keep in mind that incorrect answers will penalize your score/time by ten seconds!";
//Hide button
answer1Btn.style.display = "none";
answer2Btn.style.display = "none";
answer3Btn.style.display = "none";
answer4Btn.style.display = "none";

//Variables
var clicked = -1;

// StartQuiz function

function startQuiz() {
  //Creating questions function
  //Set an attribute for the subtext

  if (!startBtn.click) {
    answer1Btn.style.display = "none";
    answer2Btn.style.display = "none";
    answer3Btn.style.display = "none";
    answer4Btn.style.display = "none";
  } else {
    // Setting First question Buttons to show and answer


    // Show the answer buttons
    answer1Btn.style.display = "block";
    answer2Btn.style.display = "block";
    answer3Btn.style.display = "block";
    answer4Btn.style.display = "block";
    // Hide the start button
    startBtn.style.display = "none";
    if ( clicked < questions.length ) {
      h2.textContent = questions[clicked + 1];
      clicked++ ;
      h2.setAttribute("style", "font-size: 25px");
    
    
    //Set the content attribute to the buttons
    if (clicked === 0 ){
    answer1Btn.textContent = "1. strings";
    answer2Btn.textContent = "2. booleans";
    answer3Btn.textContent = "3. alerts";
    answer4Btn.textContent = "4. numbers";
  }
  
  if (answer1Btn.click || answer2Btn.click || answer3Btn.click || answer4Btn.click) {
    // Setting Second question Buttons to show and answer
    //Set an attribute for the subtext
   // h2.textContent = questions[clicked];
   // h2.setAttribute("style", "font-size: 25px");
    //Set the content attribute to the buttons
    if ( clicked === 1){
    answer1Btn.textContent = "1. quotes";
    answer2Btn.textContent = "2. curly brackets";
    answer3Btn.textContent = "3. parentheses";
    answer4Btn.textContent = "4. square brackets";
  };
  }
  //Setting up third question
  if (answer1Btn.click || answer2Btn.click || answer3Btn.click || answer4Btn.click) {
    // Setting third question Buttons to show and answer
    //Set an attribute for the subtext
    h2.textContent = questions[clicked];
    h2.setAttribute("style", "font-size: 25px");
    //Set the content attribute to the buttons
    if (clicked === 2){
    answer1Btn.textContent = "1. numbers and strings";
    answer2Btn.textContent = "2. other arrays";
    answer3Btn.textContent = "3. booleans";
    answer4Btn.textContent = "4. all of the above";
  };
    //Setting up fourth question
  if (answer1Btn.click || answer2Btn.click || answer3Btn.click || answer4Btn.click) {
    // Setting fourth question Buttons to show and answer
    //Set an attribute for the subtext
    h2.textContent = questions[clicked];
    h2.setAttribute("style", "font-size: 25px");
    //Set the content attribute to the buttons
    if(clicked === 3) {
    answer1Btn.textContent = "1. commas";
    answer2Btn.textContent = "2. curly brankets";
    answer3Btn.textContent = "3. quotes";
    answer4Btn.textContent = "4. parentheses";
  }
    //Setting up fifth question
  if (answer1Btn.click || answer2Btn.click || answer3Btn.click || answer4Btn.click) {
    // Setting fifth question Buttons to show and answer
    //Set an attribute for the subtext
    h2.textContent = questions[clicked];
    h2.setAttribute("style", "font-size: 25px");
    //Set the content attribute to the buttons
    if(clicked === 4){
    answer1Btn.textContent = "1. JavaScript";
    answer2Btn.textContent = "2. terminal / bash";
    answer3Btn.textContent = "3. for loops";
    answer4Btn.textContent = "4. console.log";
  };
  }
  }
  }
}
}

// Time function

var timeEl = document.querySelector(".time");
var mainEl = document.getElementById("main");

var secondsLeft = 60;

function setTime() {
  var timerInterval = setInterval(function () {
    secondsLeft--;
    timeEl.textContent = "Time: " + secondsLeft;

    if (secondsLeft === 0) {
      clearInterval(timerInterval);
      sendMessage();
    }
  }, 1000);
}

function sendMessage() {
  timeEl.textContent = " ";

  var imgEl = document.createElement("img");

  imgEl.setAttribute("src", "images/image_1.jpg");
  mainEl.appendChild(imgEl);
}

setTime();
}

//Creating a function to check answer
function checkAnswer() {
  if ((h2.textContent = questions[0])) {
    answer1Btn.click;
    answer2Btn.click;
    answer4Btn.click;
    console.log("true");
  } else {
    answer3Btn.click;

    console.log("False");
  }

  //Question 1 answer
}

//Start quiz
// First question display

// Second question display

// Third question display

// Fourth question display

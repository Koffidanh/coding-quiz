//Variable


// Start button to start the quiz
// Assignment Code
var startBtn = document.getElementById("start");
var answer1Btn = document.getElementById("answer1");
var answer2Btn = document.getElementById("answer2");
var answer3Btn = document.getElementById("answer3");
var answer4Btn = document.getElementById("answer4");
// Add event listener to generate button to open prompts
startBtn.addEventListener("click", startQuiz);
//Creating the Main page  title and subtext
    //Main title
var h1 =document.querySelector("#text")
h1.textContent = "Coding Quiz Challenge"
    //Subtext
var h2 =document.querySelector("#subtext")
h2.textContent = "Try to answer the folling code-related questons within the time limit. Keep in mind that incorrect answers will penalize your score/time by ten seconds!"    
//Hide button
    answer1Btn.style.display = "none";
    answer2Btn.style.display = "none";
    answer3Btn.style.display = "none";
    answer4Btn.style.display = "none";
// StartQuiz function
function startQuiz() {
  if (!startBtn.click) {
    answer1Btn.style.display = "none";
    answer2Btn.style.display = "none";
    answer3Btn.style.display = "none";
    answer4Btn.style.display = "none";
  } else {
    // Button style not show
    
    answer1Btn.style.display = "block";
    answer2Btn.style.display = "block";
    answer3Btn.style.display = "block";
    answer4Btn.style.display = "block";
    startBtn.style.display = "none";
  }
 // Time function
   
var timeEl = document.querySelector(".time");
var mainEl = document.getElementById("main");

var secondsLeft = 99;

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
//Start quiz
// First question display

// Second question display

// Third question display

// Fourth question display



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
  "console.log",
];
// Start button to start the quiz
// Assignment Code
var startBtn = document.getElementById("start");
var answer1Btn = document.getElementById("answer1");
var answer2Btn = document.getElementById("answer2");
var answer3Btn = document.getElementById("answer3");
var answer4Btn = document.getElementById("answer4");
var submitBtn = document.getElementById("submit");
var quizQuestions = document.getElementById('quizQuestions');
var goBackBtn = document.getElementById("goBack");
var clearBtn = document.getElementById("clear");
var highScore = document.getElementById("highScore");
var initial = document.querySelector("#initial");

// Add event listener to generate button to open prompts
startBtn.addEventListener("click", startQuiz);
answer1Btn.addEventListener("click", checkAnswer);
answer2Btn.addEventListener("click", checkAnswer);
answer3Btn.addEventListener("click", checkAnswer);
answer4Btn.addEventListener("click", checkAnswer);
// goBackBtn.addEventListener("click");
// clearBtn.addEventListener("click");


//Creating the Main page  title and subtext
//Main title
var h1 = document.querySelector("#text");
h1.textContent = "Coding Quiz Challenge";
//Subtext
var h2 = document.querySelector("#subtext");
h2.textContent =
  "Try to answer the folling code-related questons within the time limit. Keep in mind that incorrect answers will penalize your score/time by ten seconds!";
var initiallabel = document.querySelector("#initiallabel");
var initial = document.querySelector("#initial");
var answer = document.getElementById("answerCheck");

//Hide button
answer1Btn.style.display = "none";
answer2Btn.style.display = "none";
answer3Btn.style.display = "none";
answer4Btn.style.display = "none";
submitBtn.style.display = "none";
initiallabel.style.display = "none";
initial.style.display = "none";

//Variables
var clicked = 0;


//Answercheck text to appear for a certain millisecond before disapearing
function appear(event) {
  document.getElementById("answerCheck").style.transition = "all 0.2s";
}

//Creating a function to check answer
function checkAnswer(event) {
  //console.log(this)
  //console.log(event.target.value)
  //Change color of the answercheck green for corect and red for incorrect
  if (event.target.value == answers[clicked]) {
    document.getElementById("answerCheck").style.color = "green";
  } else {
    document.getElementById("answerCheck").style.color = "red";
  }

  //Question 1 answer
  if (clicked === 0 && event.target.value !== answers[clicked]) {
    secondsLeft -= 10;
    document.getElementById("answerCheck").textContent = "Incorrect";
    clicked++
    nextQuestion();
    return;
  } else if (clicked === 0 && event.target.value == answers[clicked]) {
    clicked++
    nextQuestion();
    document.getElementById("answerCheck").textContent = "Correct";
    return;
  }

  //Question 2 answer
  if (clicked === 1 && event.target.value !== answers[clicked]) {
    secondsLeft -= 10;
    document.getElementById("answerCheck").textContent = "Incorrect";
    clicked++
    nextQuestion();
    return;
  } else if (clicked === 1 && event.target.value == answers[clicked]) {
    clicked++
    nextQuestion();
    document.getElementById("answerCheck").textContent = "Correct";
    return;
  }

  //Question 3 answer
  if (clicked === 2 && event.target.value !== answers[clicked]) {
    secondsLeft -= 10;
    document.getElementById("answerCheck").textContent = "Incorrect";
    clicked++
    nextQuestion();
    return;
  } else if (clicked === 2 && event.target.value == answers[clicked]) {
    clicked++
    nextQuestion();
    document.getElementById("answerCheck").textContent = "Correct";
    return;
  }

  //Question 4 answer
  if (clicked === 3 && event.target.value !== answers[clicked]) {
    secondsLeft -= 10;
    document.getElementById("answerCheck").textContent = "Incorrect";
    clicked++
    nextQuestion();
    return;
  } else if (clicked === 3 && event.target.value == answers[clicked]) {
    clicked++
    nextQuestion();
    document.getElementById("answerCheck").textContent = "Correct";
    return;
  }
  //Question 5 answer
  if (clicked === 4 && event.target.value !== answers[clicked]) {
    secondsLeft -= 10;
    document.getElementById("answerCheck").textContent = "Incorrect";
    clicked++
    nextQuestion();
    return;
  } else if (clicked === 4 && event.target.value == answers[clicked]) {
    clicked++
    nextQuestion();
    document.getElementById("answerCheck").textContent = "Correct";
    return;

  }

};


// Time function

var timeEl = document.querySelector(".time");
var secondsLeft = 50;

function setTime() {

  var timerInterval = setInterval(function () {
    secondsLeft--;
    timeEl.textContent = "Time: " + secondsLeft;

    if (secondsLeft === 0 || clicked === 5) {
      clearInterval(timerInterval);
      quizOver();

    }
  }, 1000);

}
// nextQuestion function
function nextQuestion() {
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
    if (clicked < questions.length) {
      h2.textContent = questions[clicked];

      h2.setAttribute("style", "font-size: 25px");

      //Set the content attribute to the buttons
      if (clicked === 0) {
        answer1Btn.textContent = "1. strings";
        answer1Btn.value = "strings";
        answer2Btn.textContent = "2. booleans";
        answer2Btn.value = "booleans";
        answer3Btn.textContent = "3. alerts";
        answer3Btn.value = "alerts";
        answer4Btn.textContent = "4. numbers";
        answer4Btn.valu = "numbers";
      }

      if (
        answer1Btn.click ||
        answer2Btn.click ||
        answer3Btn.click ||
        answer4Btn.click
      ) {
        // Setting Second question Buttons to show and answer
        //Set an attribute for the subtext
        h2.textContent = questions[clicked];
        h2.setAttribute("style", "font-size: 25px");
        //Set the content attribute to the buttons
        if (clicked === 1) {
          answer1Btn.textContent = "1. quotes";
          answer1Btn.value = "quotes";
          answer2Btn.textContent = "2. curly brackets";
          answer2Btn.value = "curly brackets";
          answer3Btn.textContent = "3. parentheses";
          answer3Btn.value = "parentheses";
          answer4Btn.textContent = "4. square brackets";
          answer4Btn.value = "square brackets";
        }
      }
      //Setting up third question
      if (
        answer1Btn.click ||
        answer2Btn.click ||
        answer3Btn.click ||
        answer4Btn.click
      ) {
        // Setting third question Buttons to show and answer
        //Set an attribute for the subtext
        h2.textContent = questions[clicked];
        h2.setAttribute("style", "font-size: 25px");
        //Set the content attribute to the buttons
        if (clicked === 2) {
          answer1Btn.textContent = "1. numbers and strings";
          answer1Btn.value = "numbers and strings";
          answer2Btn.textContent = "2. other arrays";
          answer2Btn.value = "other arrays";
          answer3Btn.textContent = "3. booleans";
          answer3Btn.value = "booleans";
          answer4Btn.textContent = "4. all of the above";
          answer4Btn.value = "all of the above";
        }
        //Setting up fourth question
        if (
          answer1Btn.click ||
          answer2Btn.click ||
          answer3Btn.click ||
          answer4Btn.click
        ) {
          // Setting fourth question Buttons to show and answer
          //Set an attribute for the subtext
          h2.textContent = questions[clicked];
          h2.setAttribute("style", "font-size: 25px");
          //Set the content attribute to the buttons
          if (clicked === 3) {
            answer1Btn.textContent = "1. commas";
            answer1Btn.value = "commas";
            answer2Btn.textContent = "2. curly brankets";
            answer2Btn.value = "curly brankets";
            answer3Btn.textContent = "3. quotes";
            answer3Btn.value = "quotes";
            answer4Btn.textContent = "4. parentheses";
            answer4Btn.value = "parentheses";
          }
          //Setting up fifth question
          if (
            answer1Btn.click ||
            answer2Btn.click ||
            answer3Btn.click ||
            answer4Btn.click
          ) {
            // Setting fifth question Buttons to show and answer
            //Set an attribute for the subtext
            h2.textContent = questions[clicked];
            h2.setAttribute("style", "font-size: 25px");
            //Set the content attribute to the buttons
            if (clicked === 4) {
              answer1Btn.textContent = "1. JavaScript";
              answer1Btn.value = "JavaScript";
              answer2Btn.textContent = "2. terminal / bash";
              answer2Btn.value = "terminal / bash";
              answer3Btn.textContent = "3. for loops";
              answer3Btn.value = "for loops";
              answer4Btn.textContent = "4. console.log";
              answer4Btn.value = "console.log";
            }
          }

          if (clicked === 5) {
            h1.textContent = "All Done!";
            h2.textContent = "Your score is " + secondsLeft;

            //Hide button
            answer1Btn.style.display = "none";
            answer2Btn.style.display = "none";
            answer3Btn.style.display = "none";
            answer4Btn.style.display = "none";
          }
        }
      }
    }
  }
};

function startQuiz() {
  setTime();
  //Creating questions function
  //Set an attribute for the subtext
  nextQuestion()
};

//Quiz over
function quizOver() {
  timeEl.textContent = "";
  if (secondsLeft === 0) {
    h1.textContent = "Out of time!";
    h2.textContent = "Yours score is " + secondsLeft;
  }
  if (clicked === 5 && secondsLeft < 0) {
    secondsLeft = 0;
    h1.textContent = "All Done!";
    h2.textContent = "Yours score is " + secondsLeft;

  }
  if (clicked === 5) {
    h1.textContent = "All Done!";
    h2.textContent = "Yours score is " + secondsLeft;

  }
  //Label text and input hided unless time is over or game
  if (clicked === 5 || secondsLeft === 0) {
    answer1Btn.style.display = "none";
    answer2Btn.style.display = "none";
    answer3Btn.style.display = "none";
    answer4Btn.style.display = "none";
    initiallabel.style.display = "block";
    initial.style.display = "block";
    submitBtn.style.display = "block";
    submitBtn.setAttribute("style", "align: center");
  }
}



//highscore function
submitBtn.addEventListener("click", function (event) {
  event.preventDefault();

  localStorage.setItem("initial", initial);
  localStorage.setItem("time", secondsLeft);
  var h1 = document.querySelector("#text");
  var initiallabel = document.querySelector("#initiallabel");
  var initial = document.querySelector("#initial");

  if (initial === "") {
    displayMessage("error", "Initial cannot be blank");
  } else {
    //Hide this attributes
    initiallabel.style.display = "none";
    initial.style.display = "none";
    submitBtn.style.display = "none";
  }
  // console.log(initial);
  // console.log(secondsLeft);
  var initial = document.getElementById('initial').value;
  localStorage.setItem("initial", JSON.stringify(initial));
  JSON.parse(localStorage.getItem("time", secondsLeft)) || [];
  localStorage.setItem('highScore',JSON.stringify(initial))
  h1.textContent = "Highscores";
  h2.textContent = initial + " - " + secondsLeft;

});


// Highscore html

//create an array with multiple questions. each has 4 choices 

var questionBank = [ 
    {
        question: "What does HTML stand for?",
        answer: {
            a: "Hyper Trainer Marking Language",
            b: "Hyper Text Marketing Language",
            c: "Hyper Text Markup Language",
            d: "Hyper Text Markup Leveler"
        },
        correctAnswer: "choiceC"
    },
    {   
        question: "What is the type of loop that continues through a block of code as long as the specified condition remains TRUE?",
        answer: {
            a: "Conditional Loop", 
            b: "For Loop", 
            c: "Else Loop", 
            d: "While Loop",
        },
        correctAnswer: "choiceD"
    },
    {
        question: "What is considered to be the most popular programming language in the world?",
        answer: {
            a: "HTML",
            b: "Ruby", 
            c: "Javascript",
            d: "None of the above",
        },
        correctAnswer: "choiceC" 
    },
    {
        question: "Inside which HTML element do we put the JavaScript?",
        answer: {
            a: "<js>",
            b: "<scripting>",
            c: "<script>",
            d: "<javascript>",
        },
        correctAnswer: "choiceC"
    }
];

var startButton = document.querySelector(".startBtn");
//-----------------------------------------------------------------------
//  Start Screen
//-----------------------------------------------------------------------
var startButton = document.querySelector(".startBtn");
//-----------------------------------------------------------------------
function startStartScreen () {
    document.querySelector("#introScreen").style.display = "block";
    document.querySelector("#highScoreScreen").style.display = "none";
}


//-----------------------------------------------------------------------
// Quiz screen
//-----------------------------------------------------------------------

var currentQuestion = 0;
var currentCorrectAnswer = "";

var choiceAEl = document.getElementById("choiceA");
var choiceBEl = document.getElementById("choiceB");
var choiceCEl = document.getElementById("choiceC");
var choiceDEl = document.getElementById("choiceD");

var timer = document.getElementById("timePara");
var timerId; 
var secondsLeft = 60;

//-----------------------------------------------------------------------
function startQuizScreen() {
    //switch to question screen
    document.querySelector("#introScreen").style.display = "none";
    document.querySelector("#questionsScreen").style.display = "block";
    
    //show first q
    currentQuestion = 0;
    showQuestion();
    document.getElementById("questionResult").textContent = "";

    // set timer
    timerId = setInterval(function() {
        secondsLeft--
        timer.textContent = secondsLeft;
        if (secondsLeft == 0) {
            clearInterval(timerId)
            startScoreScreen()
        }
    }, 1000);
}

//-----------------------------------------------------------------------
function showQuestion() {
    var question = questionBank[currentQuestion];
    document.getElementById("questionText").textContent = question.question;
    choiceAEl.textContent = question.answer.a;
    choiceBEl.textContent = question.answer.b;
    choiceCEl.textContent = question.answer.c;
    choiceDEl.textContent = question.answer.d;

    currentCorrectAnswer = question.correctAnswer;
}

//-----------------------------------------------------------------------
function nextQuestion() {
    if (currentQuestion < questionBank.length - 1){
        currentQuestion++;
        showQuestion();
    }
    else{
        clearInterval(timerId);
        startScoreScreen();
    }
}

//-----------------------------------------------------------------------
function choiceClicked (event) {
    var clickedEl = event.target; 
    if (clickedEl.id == currentCorrectAnswer) {
        document.getElementById("questionResult").textContent = "Correct!"
    } else {
        document.getElementById("questionResult").textContent = "Incorect!"
        secondsLeft -= 5;
        timer.textContent = secondsLeft;
    }
    nextQuestion();
}

//-----------------------------------------------------------------------
//button listeners
startButton.addEventListener("click", startQuizScreen);
choiceAEl.addEventListener("click", choiceClicked);
choiceBEl.addEventListener("click", choiceClicked);
choiceCEl.addEventListener("click", choiceClicked);
choiceDEl.addEventListener("click", choiceClicked);

//-----------------------------------------------------------------------
//  Score Screen
//-----------------------------------------------------------------------
var finalScoreEl = document.getElementById("finalScore");
var scoreScreenUserName = document.getElementById("userNameInput");
var scoreScreenBtn = document.querySelector(".scoreScreenBtn");
var highScoreNameList = [];
var highScoreScoreList = []

//-----------------------------------------------------------------------
function startScoreScreen() {
    document.querySelector("#questionsScreen").style.display = "none";
    document.querySelector("#scoreScreen").style.display = "block";
    finalScoreEl.textContent = secondsLeft;
};

//-----------------------------------------------------------------------
function addNewScore (event) {
    event.preventDefault();

    var userName = scoreScreenUserName.value;
    var userScore = secondsLeft;
    highScoreNameList.push(userName);
    highScoreScoreList.push(userScore);
    startHighscoreScreen();
}

scoreScreenBtn.addEventListener("click", addNewScore);

//-----------------------------------------------------------------------
//  Highscore Screen
//-----------------------------------------------------------------------
var highScoreUlEl = document.getElementById("highScoreUl");
var highScoreResetButtonEl = document.getElementById("resetHighScore");
var highScoreGoBackButtonEl = document.getElementById("goBack");
//-----------------------------------------------------------------------
function startHighscoreScreen () {
    document.querySelector("#scoreScreen").style.display = "none";
    document.querySelector("#highScoreScreen").style.display = "block";
    
    highScoreUlEl.innerHTML = "";
    for (var i = 0; i < highScoreNameList.length; i++){
        var li = document.createElement("li");
        li.textContent = highScoreNameList[i]+ " " + highScoreScoreList[i];
        highScoreUlEl.appendChild(li);
    }
}

//-----------------------------------------------------------------------
function resetHighScores(){
    highScoreNameList = [];
    highScoreScoreList = [];
}

highScoreResetButtonEl.addEventListener("click", resetHighScores);
highScoreGoBackButtonEl.addEventListener("click", startStartScreen);

    //start timer / countdown from 60
//if answer is correct 
    //print correct on screen
    //add to score 
//if answer is incorrect 
    //print incorrect on the screen 
//show final score when all q answered / timer reached 0
//save initials and score 

//-----------------------------------------------------------------------

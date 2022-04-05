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
            d: "None of the above"
        },
        correctAnswer: "choiceC" 
    }
];

var currentQuestion = 0;
var currentCorrectAnswer = "";
var correctAnswerCount = 0
var startButton = document.querySelector(".startBtn")
var scoreScreenBtn = document.querySelector(".scoreScreenBtn")
var questionsScreenBtn = document.querySelector(".questionBtn")

function startQuizScreen() {
    //switch to question screen
    document.querySelector("#introScreen").style.display = "none";
    document.querySelector("#questionsScreen").style.display = "block";
    
    //show first q
    currentQuestion = 0;
    showQuestion();

}

function showQuestion() {
    var question = questionBank[currentQuestion];
    document.getElementById("questionText").textContent = question.question;
    document.getElementById("choiceA").textContent = question.answer.a;
    document.getElementById("choiceB").textContent = question.answer.b;
    document.getElementById("choiceC").textContent = question.answer.c;
    document.getElementById("choiceD").textContent = question.answer.d;

    currentCorrectAnswer = question.correctAnswer;
}

function nextQuestion() {
    if (currentQuestion < questionBank.length - 1){
        currentQuestion++;
        showQuestion();
    }
    else{
        startScoreScreen();
    }
}

function choiceClicked (event) {
    var clickedEl = event.target; 
    if (clickedEl.id == currentCorrectAnswer) {
        document.getElementById("questionResult").textContent = "Correct!"
    } else {
        document.getElementById("questionResult").textContent = "Incorect!"
    }
}


//listen for click on start button
startButton.addEventListener("click", startQuizScreen);

document.getElementById("choiceA").addEventListener("click", choiceClicked);
document.getElementById("choiceB").addEventListener("click", choiceClicked)
document.getElementById("choiceC").addEventListener("click", choiceClicked)
document.getElementById("choiceD").addEventListener("click", choiceClicked)

function startScoreScreen() {
    document.querySelector("#questionsScreen").style.display = "none";
    document.querySelector("#highScoreScreen").style.display = "block";

}

questionsScreenBtn.addEventListener("click",nextQuestion);
    //start timer / countdown from 60
//if answer is correct 
    //print correct on screen
    //add to score 
//if answer is incorrect 
    //print incorrect on the screen 
//show final score when all q answered / timer reached 0
//save initials and score 

const container = document.querySelector('.container');
const questions = [{
    question: " Who invented C++?",
    options: ["Dennis Ritchie", "Ken Thompson", "Brian Kernighan", "Bjarne Stroustrup"],
    answer: "Bjarne Stroustrup"
},
{
    question: " WWhat is C++?",
    options: ["C++ is an object oriented programming language",
        " C++ is a procedural programming language",
        "C++ supports both procedural and object oriented programming language",
        "C++ is a functional programming language",],
    answer: "C++ supports both procedural and object oriented programming language"
},
{
    question: " Which of the following is the correct syntax of including a user defined header files in C++?",
    options: [" #include [userdefined]",
        " #include “userdefined”",
        "#include <userdefined.h>",
        "#include <userdefined>",],
    answer: "#include <userdefined>"
},
];

let index = 0;
let score = 0;

let question = document.querySelector(".question");
let option1Label = document.getElementById("option-1-label");
let option2Label = document.getElementById("option-2-label");
let option3Label = document.getElementById("option-3-label");
let option4Label = document.getElementById("option-4-label");
let scoreP = document.getElementById("score");

function displayQuestion(index) {
    question.innerText = questions[index].question;
    option1Label.innerText = questions[index].options[0];
    option2Label.innerText = questions[index].options[1];
    option3Label.innerText = questions[index].options[2];
    option4Label.innerText = questions[index].options[3];
    scoreP.innerText = score;
}

document.addEventListener("DOMContentLoaded", () => {
    displayQuestion(0);
});

const nextBtn = document.getElementById("next-btn");
nextBtn.addEventListener("click", () => {
    if (index < questions.length) {
        checkAnswer(index);
        index = index + 1;
        displayQuestion(index);
    }else {
        getResult();
    }
})

const restartBtn = document.querySelector(".restart-btn");
restartBtn.addEventListener("click" , () => {
    index = 0;
    score = 0;
    displayQuestion(index);
})  

function checkAnswer(index) {
    const optionInputs = document.querySelectorAll(".option-input");
    let selectedOption = null;

    optionInputs.forEach((optionInput, i) => {
        if (optionInput.checked) {
            selectedOption = i; // Get the index of the selected option
        }
    });

    if (selectedOption !== null) {
        // Corrected line: Use `questions[index].answer` instead of `question[index].answer`
        if (questions[index].options[selectedOption] === questions[index].answer) {
            score++; // Increment the score if the answer is correct
        }
    }

    // Clear the selection for the next question
    optionInputs.forEach((optionInput) => optionInput.checked = false);
}


function getResult() {
    scoreP.innerText = score;
}

nextBtn.addEventListener("click" , () => {
    checkAnswer(index);
    getResult();

})

    

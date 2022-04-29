// sorting our qiuz data object.
const quizData = [
    {
        question: "What is the name of the artist who painted ‘Mona Lisa’?",
        a: "PABLO PICASSO ",
        b: "REMBRANDT VAN RIJN",
        c: "WASSILY KANDINSKY",
        d: "LEONARDO DA VINCI",
        correct: "d",
    },
    {
        question: "Who is the author of Julius Caesar and Romeo Juliet?",
        a: "Sidney Sheldon",
        b: "Shakespeare",
        c: "Ivan Saldano",
        d: "Ernest Hemingway",
        correct: "b",
    },
    {
        question: "Which planet is closest to Sun?",
        a: "Mercury",
        b: "Jupiter",
        c: "Saturn",
        d: "Uranus",
        correct: "a",
    },
    {
        question: "USB stands for?",
        a: "Universal Service Bus",
        b: "Universal Serial Bus",
        c: "Unified Serial Bus",
        d: "none of the above",
        correct: "b",
    },
    {
        question: "Entomology is the science of?",
        a: "Fish",
        b: "Elephants",
        c: "Insects",
        d: "Snakes",
        correct: "c",
    }
];





// HOW: calling HTML element and classes and assining each to a var.
const quiz = document.getElementById("quiz");
const answerEls = document.querySelectorAll(".answer");
const questionEl = document.getElementById("question");
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");
const submitBtn = document.getElementById("submit");





// setting Iniitials
let currentQuestion = 0;
let score = 0;

loadQuiz();





// defining functions
// loading quiz object into HTML
function loadQuiz() {
    deselectAnswers();
    // HOW: assigning each quiz data property to a number and saving it in a obj.
    // WHY: To fill HTML and display quiz on page
    const currentQuizData = quizData[currentQuestion];

    questionEl.innerText = currentQuizData.question;
    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
    d_text.innerText = currentQuizData.d;
}



// WHY: to let the program know the user's answer and store it.
function getSelected() {
    let answer = undefined;

    answerEls.forEach((answerElement) => {
        if (answerElement.checked) {
            answer = answerElement.id;
        }
    });

    return answer;
}



// WHY: to uncheck/deselect the given answer
function deselectAnswers() {
    answerEls.forEach((answerEl) => {
        answerEl.checked = false;
    });
}



// WHAT: define button functionalities.
// WHY: checking the answer, updating the score and loading next question
submitBtn.addEventListener("click", () => {
    const answer = getSelected();

    if (answer) {
        if (answer === quizData[currentQuestion].correct) {
            score++;
        }

        currentQuestion++;
        if (currentQuestion < quizData.length) {
            loadQuiz();
            // showing score after last question
        } else {
            quiz.innerHTML = `
                <h5 style="text-align: center">You answered correctly at ${score}/${quizData.length} questions.</h5>
                
                <button class="btn btn__reload" onclick="location.reload()">Reload</button>`;
        }
    }
});





// this program should work properly for unlimited number of questions.
// also for unlimited number of answers as long as there is only on correct answer/question.
// low css dependancy
// TODO: define a database and optain data from databse instead of hardcoding.

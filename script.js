const quizData = [
  {
    question: "Who is lead at GDSC SRM?",
    answers: ["Sai rohit", "vashist", "utsav"],
    correctAnswer: "vashist"
  },
  {
    question: "Who is technical lead of the club?",
    answers: ["Gautam", "Ananya", "Riti"],
    correctAnswer: "Gautam"
  },
  {
    question: "What is the tallest mammal?",
    answers: ["Giraffe", "Elephant", "Hippo"],
    correctAnswer: "Giraffe"
  },
  {
    question: "What is the largest country in the world?",
    answers: ["Russia", "China", "Canada"],
    correctAnswer: "Russia"
  },
  {
    question: "What is the capital of Australia?",
    answers: ["Sydney", "Melbourne", "Canberra"],
    correctAnswer: "Canberra"
  }
];

const questionElement = document.getElementById("question");
const answerElements = [document.getElementById("answer1"), document.getElementById("answer2"), document.getElementById("answer3")];
const correctElement = document.getElementById("correct");
const wrongElement = document.getElementById("wrong");
const nextButton = document.getElementById("next");

let currentQuestionIndex = 0;
let correctAnswers = 0;
let wrongAnswers = 0;

loadQuestion();

function loadQuestion() {
  const currentQuestion = quizData[currentQuestionIndex];
  questionElement.textContent = currentQuestion.question;
  for (let i = 0; i < currentQuestion.answers.length; i++) {
    answerElements[i].textContent = currentQuestion.answers[i];
    answerElements[i].addEventListener("click", checkAnswer);
  }
}

function checkAnswer(event) {
  const selectedAnswer = event.target.textContent;
  const currentQuestion = quizData[currentQuestionIndex];
  if (selectedAnswer === currentQuestion.correctAnswer) {
    correctAnswers++;
    correctElement.textContent = correctAnswers;
  } else {
    wrongAnswers++;
    wrongElement.textContent = wrongAnswers;
  }
  disableAnswers();
}

function disableAnswers() {
  for (let i = 0; i < answerElements.length; i++) {
    answerElements[i].removeEventListener("click", checkAnswer);
  }
  nextButton.disabled = false;
}

nextButton.addEventListener("click", nextQuestion);

function nextQuestion() {
  currentQuestionIndex++;
  if (currentQuestionIndex === quizData.length) {
    endQuiz();
    return;
  }
  resetQuestion();
}

function resetQuestion() {
  enableAnswers();
  nextButton.disabled = true;
  loadQuestion();
}

function enableAnswers() {
  for (let i = 0; i < answerElements.length; i++) {
    answerElements[i].addEventListener("click", checkAnswer);
  }
}


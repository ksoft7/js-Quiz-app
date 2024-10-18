"use strict";
console.log("Hi");

// Create a question Bank

const questionBank = [
  {
    question: "What is the capital of Nigeria?",
    options: ["Abuja", "london", "lagos", "Benin"],
    answer: "Abuja",
  },

  {
    question: "when did Nigeria gain thier independence?",
    options: ["2006", "1960", "1950", "2000"],
    answer: "1960",
  },

  {
    question: "The aba women riot was in what year?",
    options: ["1929", "1900", "1950", "1920"],
    answer: "1929",
  },

  {
    question: "Salve trade lasted for how many years?",
    options: ["300 years", "400 years", "500 years", "40 years"],
    answer: "400 years",
  },

  {
    question: "First military intervention in nigeria was in what year?",
    options: ["1966", "1960", "2022", "1990"],
    answer: "1966",
  },

  {
    question: "Which country won the first world cup and in what year?",
    options: [
      "Brasil in 1920",
      "Uruguay in 1930",
      "Argentina 2000",
      "England 1990",
    ],
    answer: "Uruguay in 1930",
  },

  {
    question: "bet naija was created in what year?",
    options: ["2012", "2001", "2017", "2013"],
    answer: "2013",
  },

  {
    question: "who invented javascript and in what year?",
    options: [
      "JavaScript was invented by James Gosling in 1990",
      "JavaScript was invented by Guido van Rossum in 1945",
      "JavaScript was invented by Brendan Eich in 1995",
      "JavaScript was invented by Bjarne in 2000",
    ],
    answer: "JavaScript was invented by Brendan Eich in 1995",
  },
  {
    question:
      "What was the first bug discovered in the computer software program in what year?",
    options: ["1945", "1900", "1995", "1940"],
    answer: "1945",
  },
  {
    question: "Cristiano Ronaldo scored his first goal in what year?",
    options: [
      "june 19 2012",
      "October 7 2002",
      "September 12 2008",
      "August 6 2001",
    ],
    answer: "October 7 2002",
  },
];

// Question div

const quizContainer = document.getElementById("quiz");
// results div
const resultContainer = document.getElementById("result");
const questionplace = document.getElementById("ques");
const showingResult = document.getElementById("remove-result");

// All three buttons
const submitButton = document.getElementById("submit");
const retryButton = document.getElementById("retry");
const showAnswerButton = document.getElementById("showAnswer");
const displayCount = document.getElementById("displaying-count");

// We need to define a mechanism to display the function
let currentQuestion = 0;
let score = 0;
let inCorrectAnswer = [];

function displayQuestion() {
  retryButton.style.display = "none";
  showAnswerButton.style.display = "none";
  const questionData = questionBank[currentQuestion];

  const questionElement = document.createElement("div");
  questionElement.className = "question";
  questionplace.innerHTML = questionData.question;
  console.log(questionData.question);

  const optionsElement = document.createElement("div");
  optionsElement.className = "options";

  // Shuffling
  const options = [...questionData.options];
  for (let i = 0; i < options.length; i++) {
    const option = document.createElement("label");
    option.className = "option";

    // Create radio button for each option
    const radioInput = document.createElement("input");
    radioInput.type = "radio";
    radioInput.name = "quiz";
    radioInput.value = options[i];

    const optionText = document.createTextNode(options[i]);
    option.appendChild(radioInput);
    option.appendChild(optionText);
    optionsElement.appendChild(option);
  }
  quizContainer.innerHTML = "";
  questionplace.appendChild(questionElement);
  quizContainer.appendChild(optionsElement);
  displayCount.innerHTML = `${currentQuestion + 1}/${questionBank.length}`;
}
function checkAnswer() {
  let selectedOption = document.querySelector('input[name="quiz"]:checked');
  if (selectedOption) {
    const answer = selectedOption.value;
    console.log("weber", answer);
    if (answer === questionBank[currentQuestion].answer) {
      score++;
    } else {
      inCorrectAnswer.push({
        question: questionBank[currentQuestion].question,
        inCorrectAnswers: answer,
        correctAnswer: questionBank[currentQuestion].answer,
      });
    }
    currentQuestion++;
    selectedOption = false;
    if (currentQuestion < questionBank.length) {
      displayQuestion();
    } else {
      displayResult();
      alert("Text ended sucessfully");
    }
  }
}
function displayResult() {
  quizContainer.style.display = "none";
  submitButton.style.display = "none";
  retryButton.style.display = "inline-block";
  showAnswerButton.style.display = "inline-block";
  showingResult.innerHTML = `Good job You scored ${score} out of ${questionBank.length}`;
  showingResult.id = "width10rem";
  questionplace.style.display = "none";
  displayCount.style.display = "none";
}
function retryQuiz() {
  currentQuestion = 0;
  score = 0;
  inCorrectAnswer = [];
  quizContainer.style.display = "block";
  submitButton.style.display = "inline-block";
  retryButton.style.display = "none";
  showAnswerButton.style.display = "none";
  resultContainer.innerHTML = "";
  questionplace.style.display = "inline-block";
  showingResult.innerHTML = `QUIZ TEST`;
  displayCount.style.display = "inline-block";
  displayQuestion();
}

function showAnswer() {
  quizContainer.style.display = "none";
  submitButton.style.display = "none";
  retryButton.style.display = "inline-block";
  showAnswerButton.style.display = "none";
  let inCorrectAnswersHtml = "";
  for (let i = 0; i < inCorrectAnswer.length; i++) {
    inCorrectAnswersHtml += `<p> <strong class="begin">Question:</strong>${inCorrectAnswer[i].question} <br>
    <strong>Your Answer:</strong> ${inCorrectAnswer[i].inCorrectAnswers} <br>
    <strong>Correct Answer:</strong> ${inCorrectAnswer[i].correctAnswer}
    </p>`;
  }
  resultContainer.innerHTML = `<p>You scored ${score} out of ${questionBank.length}!</p>
  <p>Incorrect Answers:</p>
  ${inCorrectAnswersHtml}
  `;
}

submitButton.addEventListener("click", checkAnswer);
retryButton.addEventListener("click", retryQuiz);
showAnswerButton.addEventListener("click", showAnswer);
displayQuestion();

document.write(`<p style="color: #bdbaba;">Ksoft🤍</p>`);

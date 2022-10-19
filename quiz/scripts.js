const quizData = [
  {
    question: "What is the most used programming language in 2019?",
    a: "Java",
    b: "C",
    c: "Python",
    d: "JavaScript",
    correct: "a",
  },
  {
    question: "What doees HTML stand for?",
    a: "Hypertext Markup Language",
    b: "Cascading Style Sheet",
    c: "Jason Object Notation",
    d: "Aplication Programing Interface",
    correct: "a",
  },
  {
    question: "Who is the President of US in 2022",
    a: "Ivan Saldano",
    b: "Donald Trump",
    c: "Joe Biden",
    d: "Mert Brave",
    correct: "c",
  },
];

const quizEl = document.getElementById("quiz");
const answerEl = document.querySelectorAll(".answer");
const question = document.getElementById("question");
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");
const submitBtn = document.getElementById("submit");

let currentQuiz = 0;
let score = 0;

loadQuiz();

function loadQuiz() {
  deselectAnswer();
  const currentQuizData = quizData[currentQuiz];
  question.innerHTML = currentQuizData.question;
  a_text.innerHTML = currentQuizData.a;
  b_text.innerHTML = currentQuizData.b;
  c_text.innerHTML = currentQuizData.c;
  d_text.innerHTML = currentQuizData.d;
}
function getSelected() {
  let answer = undefined;

  answerEl.forEach((answerEl) => {
    if (answerEl.checked) {
      answer = answerEl.id;
    }
  });

  return answer;
}
submitBtn.addEventListener("click", () => {
  //check answer
  const answer = getSelected();
  if (answer) {
    if (answer === quizData[currentQuiz].correct) {
      score++;
      console.log(score);
    }

    currentQuiz++;
    if (currentQuiz < quizData.length) {
      loadQuiz();
    } else {
      quizEl.innerHTML = `<h2>You answered correctly at ${score}/${quizData.length} questions!</h2> <button onClick="location.reload()">Reload</button>`;
    }
  }
});
function deselectAnswer() {
  answerEl.forEach((answerEl) => {
    answerEl.checked = false;
  });
}

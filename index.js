const questions = [
  {questionText: "Lightning never strikes in the same place twice", answer: false},
  {questionText: "Humans can distinguish between over one trillion different smells", answer: true},
  {questionText: "Goldfish only have a memory of about three seconds", answer: false}
]

let question;

function appendQuestion(question){
  document.querySelector('.question-container').innerHTML = question.questionText;
}

function askQuestionThen(time){
  question = questions[0];
  return new Promise((resolve, reject) => {
    setTimeout(function(){
      appendQuestion(question)
      resolve(null)
    }, time )
  })
}

function removeQuestion(){
  document.querySelector('.question-container').innerHTML = '';
}

function askQuestionThenRemoveQuestion(time){
  appendQuestion(question);
  return new Promise((resolve, reject) => {
    setTimeout(function(){
      removeQuestion();
      toggleTrueAndFalseButtons()
      resolve(null)
    }, time )
  })
}

function trueAndFalseButtons(){
  return document.querySelectorAll('.true-false-list .btn');
}

function toggleTrueAndFalseButtons(){
  trueAndFalseButtons().forEach(el => el.classList.toggle("hide"));
}

function displayQuestionOnClick(){
  askQuestionThenRemoveQuestion(5000);
}

let button = document.querySelector('#ask')
button.addEventListener("click", function(){
  displayQuestionOnClick();
})

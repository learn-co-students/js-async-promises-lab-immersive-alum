const questions = [
  {questionText: "Lightning never strikes in the same place twice", answer: false},
  {questionText: "Humans can distinguish between over one trillion different smells", answer: true},
  {questionText: "Goldfish only have a memory of about three seconds", answer: false}
]

let question;
const questionContainer= document.querySelector('.question-container');

function appendQuestion(question){
  questionContainer.innerHTML= question.questionText
}
function askQuestionThen(time){
  question = questions[0]
  appendQuestion(question)
  return new Promise(function(resolve){
    setTimeout(function(){
      resolve(question)
    },time);
  })
}
function removeQuestion(){
  return new Promise(function(){
    questionContainer.innerHTML = "";
  })
}

function askQuestionThenRemoveQuestion(time){
  return askQuestionThen(time).then(removeQuestion)
}

function trueAndFalseButtons(){
  return buttons = document.querySelectorAll('.lighten-2');
}
function toggleTrueAndFalseButtons(){
  trueAndFalseButtons().forEach(function(button){
    button.classList.toggle("hide")
  })
}
function displayQuestionOnClick(){
  mainButton =  document.querySelector(".waves-light")
  return mainButton.addEventListener('click', () => {
    toggleTrueAndFalseButtons()
    askQuestionThenRemoveQuestion(5000)
  })
}

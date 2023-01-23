var quizdata = [{
    question: "Por que há caçadores em Yharnan?",
    a: 'Estão procurando a crinça de sangue', 
    b: 'Estão procurando a cura para o vicio de sangue', 
    c: 'Estão procurando por sangue palído',
    d: 'nenhuma das alternativas',
    correct: "c",
},

{
    question: "Qual a fonte do sangue curativo de Yhanan?",
    a: 'Yharnan', 
    b: 'as criptas Pthumerianas', 
    c: 'Bygenwerth',
    d: 'A Igreja da Cura',
    correct: "b",
},

{
    question: "Quem fundou a Igreja da Cura?",
    a: 'Gehrman', 
    b: 'Ludwig', 
    c: 'Willem',
    d: 'Laurence',
    correct: "d",
},

{
    question: "No que foi inspirado o nome da cidade Yharnam?",
    a: 'Em um caçador famoso', 
    b: 'Em uma rainha de Cainhurst', 
    c: 'Em um eminente',
    d: 'Em um rainha Pthumeriana',
    correct: "d",
},
];

var quiz = document.getElementById('quiz')
var answerEls = document.querySelectorAll('.answer')
var questionEl = document.getElementById('question')
var a_text = document.getElementById('a_text')
var b_text = document.getElementById('b_text')
var c_text = document.getElementById('c_text')
var d_text = document.getElementById('d_text')

let currentQuiz = 0
let score = 0

loadQuiz()

function loadQuiz(){

    deselectAnwers()

    var currentQuizData = quizdata[currentQuiz]

    questionEl.innerText = currentQuizData.question
    a_text.innerText = currentQuizData.a
    b_text.innerText = currentQuizData.b
    c_text.innerText = currentQuizData.c
    d_text.innerText = currentQuizData.d
}

function deselectAnwers(){
    answerEls.forEach(answerEl => answerEl.checked = false)
}

function getSelected(){
    let answer
    answerEls.forEach(answerEl => {
        if(answerEl.checked){
            answer = answerEl.id
        }
    })

    return answer
}

function sair_quiz(){
    setTimeout(() => {
        window.location = "quizes.html";
    }, "500")
}

submitBtn.addEventListener('click', () => {
    const answer = getSelected()
    if(answer){
        if(answer === quizdata[currentQuiz].correct) {
            score++
        }

        currentQuiz++

        if(currentQuiz < quizdata.length){
            loadQuiz()
        } 
        else {
            quiz.innerHTML = `
            <h2>Você respondeu ${score}/${quizdata.length} questões corretamente

            <button onclick="location.reload()">Recarregar</button> <br>
            <button onclick="sair_quiz()">Sair do Quiz</button>
            `
        }
    }
});
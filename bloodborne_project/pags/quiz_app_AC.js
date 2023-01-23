var quizdata = [{
    question: "Qual das armas abaixo é uma arma inicial?",
    a: 'Braço da Amígdala', 
    b: 'Chikage', 
    c: 'Roda de Logarius',
    d: 'Cutelo de serra',
    correct: "d",
},

{
    question: "Qual das armas a baixo dá dano de choque?",
    a: 'Serra Giratória', 
    b: 'Lança de serra', 
    c: 'Reiterpallasch',
    d: 'Tonitrus',
    correct: "d",
},

{
    question: "Qual arma pertence à um boss?",
    a: 'Lamina da Misericordia', 
    b: 'Lamina do Luar', 
    c: 'Espada sagrada de Ludwig',
    d: 'Cortador de Bestas',
    correct: "c",
},

{
    question: "Qual arma, para ser usada, precisa de uma runa?",
    a: 'Braço de Amígdala', 
    b: 'Garra da Besta', 
    c: 'Bloodletter',
    d: 'Boom hammer',
    correct: "b",
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
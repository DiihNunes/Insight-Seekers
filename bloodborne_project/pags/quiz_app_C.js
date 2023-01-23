var quizdata = [{
    question: "Qual desses chefes é opcional?",
    a: 'ama de leite de Mergo', 
    b: 'O Renascido', 
    c: 'Vicar Amelia',
    d: 'Bruxa de Hemwick',
    correct: "d",
},

{
    question: "Quem era o responsavél por proteger a Rainha sangue vil?",
    a: 'Paarl', 
    b: 'Martyr Logarius', 
    c: 'Gehrman, O Primeiro Caçador',
    d: 'Lady Maria',
    correct: "b",
},

{
    question: "Quais são as fraquesas da Amígdala?",
    a: 'Arcano, fogo', 
    b: 'choque e vêneno', 
    c: 'Arcano e choque ',
    d: 'Fogo e Vêneno',
    correct: "a",
},

{
    question: "Qual boss é de Dlc?",
    a: 'Padre Gascoigne', 
    b: 'Ebrietas, filha do Cosmos', 
    c: 'Lady Maria',
    d: 'nenhuma das alternativas acima',
    correct: "c",
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
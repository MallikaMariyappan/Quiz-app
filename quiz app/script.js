const questions = [
    {
        question:"Who is the Father of our Nation?",
        answers:[
            {text:"Mahatma Gandhi" ,correct:"true"},
            {text:"Dr. Rajendra Prasad" ,correct:"false"},
            {text:"Dr. B. R. Ambedkar" ,correct:"false"},
            {text:"Jawaharlal Nehru " ,correct:"false"},
        ]
    },
    {
        question:"Who was the first President of India?",
        answers:[
            {text:"Mahatma Gandhi" , correct:"false"},
            {text:"Dr. Rajendra Prasad" ,correct:"true"},
            {text:"Dr. B. R. Ambedkar" ,correct:"false"},
            {text:"Jawaharlal Nehru " ,correct:"false"},
        ]
    },
    {
        question:"Who is known as Father of Indian Constitution?",
        answers:[
            {text:"Mahatma Gandhi" , correct:"false"},
            {text:"Dr. Rajendra Prasad" ,correct:"false"},
            {text:"Dr. B. R. Ambedkar" ,correct:"true"},
            {text:"Jawaharlal Nehru " ,correct:"false"},
        ]
    },
    {
        question:"Which is the most sensitive organ in our body?",
        answers:[
            {text:"ears" , correct:"false"},
            {text:"skin" ,correct:"true"},
            {text:"eyes" ,correct:"false"},
            {text:"nose" ,correct:"false"},
        ]
    },
    {
        question:"Gir National Park in Gujarat is famous for?",
        answers:[
            {text:"tiger" , correct:"false"},
            {text:"elephant" ,correct:"false"},
            {text:"Lion" ,correct:"true"},
            {text:"snake" ,correct:"false"},
        ]
    }
];

const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");
 
let currentQuestionIndex = 0;
let score = 0;

function startQuiz(){
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML="Next";
    showQuestion();
}

function showQuestion(){
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML=questionNo + "."+currentQuestion.question;

    currentQuestion.answers.forEach(answer=>{
        const button=document.createElement("button");
        button.innerHTML=answer.text;
        button.classList.add("btn");
        answerButtons.appendChild(button);
        if(answer.correct){
            button.dataset.correct=answer.correct;
        }
        button.addEventListener("click",selectAnswer);
    });
}

function resetState(){
    nextButton.style.display="none";
    while(answerButtons.firstChild){
        answerButtons.removeChild(answerButtons.firstChild);
    }
}
function selectAnswer(e){
    const selectedBtn =e.target;
    const isCorrect =selectedBtn.dataset.correct === "true";
    if(isCorrect){
        selectedBtn.classList.add("correct");
        score++;
    }
    else{
        selectedBtn.classList.add("incorrect");
    }
    Array.from(answerButtons.children).forEach(button =>{
        if(button.dataset.correct === "true"){
            button.classList.add("correct");
        }
        button.disabled = true;
    });
    nextButton.style.display="block";

}
function showScore(){
    resetState();
    questionElement.innerHTML=`you scored ${score} out of ${questions.length}!`;
    nextButton.innerHTML=`play again`;
    nextButton.style.display="block";
}

function handleNextButton(){
    currentQuestionIndex++;
    if(currentQuestionIndex < questions.length)
    {
        showQuestion();
    }
    else{
        showScore();
    }
}
nextButton.addEventListener("click",()=>{
    if(currentQuestionIndex <questions.length){
        handleNextButton();
    }else{
        startQuiz();
    }
});



startQuiz();
















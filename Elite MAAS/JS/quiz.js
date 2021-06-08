// select all elements
const start = document.getElementById("quizstart");
const quiz = document.getElementById("quiz");
const question = document.getElementById("question");
const counter = document.getElementById("counter");
const timeGauge = document.getElementById("timeGauge");
const progress = document.getElementById("progress");
const scoreDiv = document.getElementById("scoreContainer");
const choiceA = document.getElementById("A");
const choiceB = document.getElementById("B");
const choiceC = document.getElementById("C");
const choiceD = document.getElementById("D");


// create our questions
let questions = [
    {	
		//Q1
        question : "1.Who won the Australian Open final in 2021?",
        choiceA : "Roger Federer",
        choiceB : "Rafael Nadal",
        choiceC : "Novak Djokovic",
        choiceD : "Andy Murray",
        correct : "C"
    },{
        //Q2
		question : "2.Which Club has won the most Champions League Titles ?",
        choiceA : "Liverpool",
        choiceB : "FC Barcelona",
        choiceC : "Bayern Munich",
        choiceD : "Real Madrid",
        correct : "D"
    },{
        //Q3
		question : "3.Which player scored the fastest hat-rick in the premier league?",
        choiceA : "Wayne Rooney",
        choiceB : "Sadio Mane",
        choiceC : "Harry Kane",
        choiceD : "Sergio Aguero",
        correct : "B"
    },{
        //Q4
		question : "4. Who has the most number of centuries in international cricket in all formats?",
        choiceA : "Senura Nimsara",
        choiceB : "Sachin Tendulkar",
        choiceC : "Steve Smith",
        choiceD : "Virat Kholi",
        correct : "B"
    },{
        //Q5
		question : "5. Who is the all time top scorer in Football?",
        choiceA : "Lionel Messi",
        choiceB : "Cristiano Ronaldo",
        choiceC : "Josef Bican",
        choiceD : "Pele",
        correct : "C"
    },{
        //Q6
		question : "6. Who has the most no of Grand Slam titles in Women's Tennis?",
        choiceA : "Serena Williams",
        choiceB : "Asini Thalawatta",
        choiceC : "Venus Williams",
        choiceD : "Margaret Court",
        correct : "A"
    },{
        //Q7
		question : "7. Who is the top Goal Scorer and also the Top assist provider in UEFA Champions League History?",
        choiceA : "Alfred Di Stefano",
        choiceB : "Neymar Jr",
        choiceC : "Cristiano Ronaldo",
        choiceD : "Lionel Messi",
        correct : "C"
    },{
        //Q8
		question : "8. Who won the man of the match award 2019 Cricket World Cup Final?",
        choiceA : "Kane willams",
        choiceB : "Ben Stokes",
        choiceC : "Eoin Morgan",
        choiceD : "Trent Boult",
        correct : "B"
    },{
        //Q9
		question : "9. Which Club lifted the champions League trophy in year 2020  ?",
        choiceA : "Bayern Munich",
        choiceB : "Real Madrid",
        choiceC : "Liverpool",
        choiceD : "Juventus",
        correct : "A"
    },{
        //Q10
		question : "10. which year did Messi famously retired from international duty and eventually came back ?",
        choiceA : "2015",
        choiceB : "2018",
        choiceC : "2016",
        choiceD : "2020",
        correct : "C"
    }
];

// create some variables
const lastQuestion = questions.length - 1;
let runningQuestion = 0;
let count = 0;
const questionTime = 10; // 10s
const gaugeWidth = 150; // 150px
const gaugeUnit = gaugeWidth / questionTime;
let TIMER;
let score = 0;

// render a question
function renderQuestion(){
    let q = questions[runningQuestion];
    
    question.innerHTML = "<p>"+ q.question +"</p>"; 
    choiceA.innerHTML = q.choiceA;
    choiceB.innerHTML = q.choiceB;
    choiceC.innerHTML = q.choiceC;
    choiceD.innerHTML = q.choiceD;

}

start.addEventListener("click",startQuiz);



// start quiz
function startQuiz(){
    start.style.display = "none";
    renderQuestion();
    quiz.style.display = "block";
    renderProgress();
    renderCounter();
    TIMER = setInterval(renderCounter,1000); // 1000ms = 1s
}

// render progress
function renderProgress(){
    for(let qIndex = 0; qIndex <= lastQuestion; qIndex++){
        progress.innerHTML += "<div class='prog' id="+ qIndex +"></div>";
    }
}

// counter render
function renderCounter(){
    if(count <= questionTime){
        counter.innerHTML = count;
        timeGauge.style.width = count * gaugeUnit + "px";
        count++
    }else{
        count = 0;
        // change progress color to red
        answerIsWrong();
        if(runningQuestion < lastQuestion){
            runningQuestion++;
            renderQuestion();
        }else{
            // end the quiz and show the score
            clearInterval(TIMER);
            scoreRender();
        }
    }
}

// checkAnwer

function checkAnswer(answer){
    if( answer == questions[runningQuestion].correct){
        // answer is correct
        score+=2;
        // change progress color to green
        answerIsCorrect();
    }else{
        // answer is wrong
		score-=1;
        // change progress color to red
        answerIsWrong();
    }
    count = 0;
    if(runningQuestion < lastQuestion){
        runningQuestion++;
        renderQuestion();
    }else{
        // end the quiz and show the score
        clearInterval(TIMER);
        scoreRender();
    }
}

// answer is correct
function answerIsCorrect(){
    document.getElementById(runningQuestion).style.backgroundColor = "#0f0";
}

// answer is Wrong
function answerIsWrong(){
    document.getElementById(runningQuestion).style.backgroundColor = "#f00";
}

// score render
function scoreRender(){
    scoreDiv.style.display = "block";
    
    // calculate the amount of marks as a percentage of the number of total marks that is possible to be obtained
    //const scorePerCent = Math.round(100 * score/20); //20 is the maximum mark obtainable
	// backgroundColor  change
	
    
    // choose the bgColor based on the scorePerCent
    let bgColor = 
              (score >= 10) ?  "#1bde09"  :
              (score >= 0) ?  "#fafc74"  :  "#fc8874"  ;
    
    //scoreDiv.innerHTML = "<img src="+ img +">";
    scoreDiv.innerHTML = "<p>" + score + "/20</p>" ;
	scoreDiv.style.backgroundColor = bgColor
}





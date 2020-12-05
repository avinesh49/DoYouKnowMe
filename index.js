var readLineSync = require("readline-sync");
var userName = readLineSync.question("What's your name?\n");
var score = 0;

console.log("Welcome "+userName+" let us see how well do you know Avinesh\n");
console.log("Rules:\n1) There are 10 questions in total\n2) You get 1 point for each right answer\n3) There is no deduction of points for wrong answer\n");

function play(question, answer){
  var userAnswer = readLineSync.question(question+"\n");

  if(userAnswer.toLowerCase() === answer.toLowerCase()){
    console.log("right!");
    score += 1;
  }
  else{
    console.log("wrong");
  }

  console.log("current score: "+score);
  console.log("----------------");
}

var questions = [
  {
    question: `Where does he live?
    a) Bangalore
    b) Ooty
    c) Trichy
    d) Chennai`,
    answer: 'b'
  },
  {
    question: `Where does he work?
    a) Unizen
    b) Infoview`,
    answer: 'a'
  },
  {
    question: `What is his branch of study in college?
    a) Computer Science
    b) Mechanical
    c) Instrumentation
    d) Electronics & Communication`,
    answer: 'd'
  },
  {
    question: `What is his D.O.B?
    a) 15th July
    b) 20th February
    c) 10th March
    d) 7th November`,
    answer: 'c'
  },
  {
    question: `What is his favourite color?
    a) Blue
    b) Green
    c) White
    d) Black`,
    answer: 'd'
  },
  {
    question: `What is his favourite hobby?
    a) Reading
    b) Gaming
    c) Dancing
    d) Trekking`,
    answer: 'a'
  },
  {
    question: `What is his favourite sport?
    a) Cricket
    b) Basketball
    c) Volleyball
    d) Badminton`,
    answer: 'b'
  },
  {
    question: `What is his biggest strength?
    a) Friends
    b) Mentors
    c) Family
    d) Knowledge`,
    answer: 'c'
  },
  {
    question: `What is his biggest fear?
    a) Water
    b) Height
    c) Dogs
    d) Thunderstorm`,
    answer: 'd'
  },
  {
    question: `Who is his favourite female singer?
    a) Cardi B
    b) Nicki Minaj
    c) Rihanna
    d) Selena Gomez`,
    answer: 'a'
  },
];

for(var i=0; i<questions.length; i++){
  play(questions[i].question, questions[i].answer);
}

console.log("Your final score is: "+score);
if(score>=7){
  console.log("YAY! You know him well");
}else{
  console.log("OOPS You don't know him well");
}

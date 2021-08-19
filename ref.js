'use strict';

//Selecting the class just like you would in CSS

//DOM Manipulation
//Document Object Model

//The document is the entry point into the DOM
//HTML usually has two child elements; <head> and <body>
//The DOM is a complete representation of an HTML documentation

//DOM !==Javascript
//DOM is part of the web APIS (browser libraries that are written in javascript and available to use)
//Timers and Fetch are also part of the Web API standard

//Sum the elements of an array

//Determine if the sum is odd or even
/*
document.querySelector('.message');
console.log(document.querySelector('.message').textContent);

document.querySelector(`.message`).textContent = `Correct Number!🎉`;

document.querySelector(`.number`).textContent = 13;
document.querySelector(`.score`).textContent = 21;

document.querySelector(`.guess`).value = 23;

console.log(document.querySelector(`.guess`).value);

console.log(document.querySelector(`.score`).textContent);



console.log(document.querySelector(`.message`).textContent);

document.querySelector(`.message`).textContent = `Correct Number 🎉`
console.log(document.querySelector(`.message`).textContent = `Correct Number 🎉`);

document.querySelector(`.number`).textContent = 13;
document.querySelector(`.score`).textContent = 25;



document.querySelector(`.guess`).value = 23;

console.log(document.querySelector(`.guess`).value);
*/

//This function is only caused when the event happens
//select button
//Trunc gets rid of the decimals, random choose the secret number between 0-1, * 20 gets the larger numbe
//+1 makes it so instead of being between 0-19 its 1-20
let secretNumber = Math.trunc(Math.random() * 20)+1
//console.log(secretNumber);

//State variable, score is part of the application state
let score =20;
let highScore = 0;

console.log(score);
console.log(secretNumber);

document.querySelector(`.check`).addEventListener(`click`, function() {
    //function expression that executes when the .addEventListener is activated
    //The 'guess' is the class of the input, and the 'value' is what the user put in
    const guess = Number(document.querySelector(`.guess`).value);
   //console.log(guess, typeof guess);

//No guess is entered
   if (!guess) {
    document.querySelector(`.message`).textContent = `No Number :(`;
//Guess is correct
   } else if (guess === secretNumber){
    document.querySelector(`.message`).textContent = `You guessed it!`;
    document.querySelector(`body`).style.backgroundColor = `#60b347`;
    document.querySelector(`.number`).style.width = `30rem`;
    document.querySelector(`.number`).textContent = secretNumber;
    if (score > highScore){
        document.querySelector(`.highscore`).textContent = score;
    }
//Guess is too low
   } else if (guess > secretNumber){
       if (score > 1){
    document.querySelector(`.message`).textContent = `The secret number is lower than your guess`;
    score--;
    document.querySelector(`.score`).textContent = score;} else {
        document.querySelector(`.message`).textContent = `You lost the game!`;
    }
//Guess is too high
    } else {
   
        if (score > 1){
            document.querySelector(`.message`).textContent = `The secret number is higher than your guess`;
            score--;
            document.querySelector(`.score`).textContent = score;} else {
                document.querySelector(`.message`).textContent = `You lost the game!`;
     } 
} 
}
);




document.querySelector(`.again`).addEventListener(`click`, function(){
    score = 20;
    document.querySelector(`.message`).textContent = `Start guessing...`;
    document.querySelector(`body`).style.backgroundColor = `#222`;
    document.querySelector(`.number`).style.width = `15rem`;
    document.querySelector(`.number`).textContent = `?`;
    document.querySelector(`.guess`).value= ``;
    document.querySelector(`.score`).textContent= `20`;
    secretNumber = Math.trunc(Math.random() * 20)+1
    console.log(secretNumber);
}
)




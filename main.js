"use strict";

//This is my primary JS site

// request.get("https://username.carto.com/endpoint/", {
//   auth: {
//     user: "username",
//     pass: 1234567890123456789012345678901234567890,
//   },
// });

//Use Postman to authenticate


console.log(document.querySelector(`.news-letter`).textContent = `Replaced newsletter`);

document.querySelector(`.email-address`).textContent = 'Please enter your email address';

document.querySelector(`.button`).addEventListener(`click`, function(){
    console.log(document.querySelector(`.guess`).value);
}) ;

//Select the button using querey selector
//addEventListener to determine 
//write a function as the second argument
//First argument is name of event looking for

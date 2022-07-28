"use strict";
console.log("Hello from external JavaScript");

//Exercise 1
alert("Welcome to my Website!");

//Exercise 2
var userInput = prompt("What is your favorite color?");
alert("Great, "+userInput+" is my favorite color too!");

// Exercise 3

// Movie Exercise
const movieRentalPrice = 3;

var mermaidRentalDays = Number(prompt("The Little Mermaid Rental Days(Enter): "));
var bearRentalDays = Number(prompt("Brother Bear Rental Days(Enter): "));
var herculesRentalDays = Number(prompt("Hercules Rental Days(Enter): "));
var rentalTotal = movieRentalPrice*(mermaidRentalDays+bearRentalDays+herculesRentalDays);
alert("Your rental total is: "+ "$"+rentalTotal);

// Pay Exercise
const googlePay = 400;
const amazonPay = 380;
const facebookPay = 350;

var googleHours = Number(prompt("How many hours did you work at Google this week?:"));
var amazonHours = Number(prompt("How many hours did you work at Amazon this week?:"));
var facebookHours = Number(prompt("How many hours did you work at Facebook this week?:"));

alert(
  "Google weekly pay: $"+(googlePay*googleHours)+"\n"+
  "Amazon weekly pay: $"+(amazonPay*amazonHours)+"\n"+
  "Facebook weekly pay: $"+(facebookPay*facebookHours)+"\n"
);

//Class status Exercise
var availability =  confirm("Are spots available for this class?");
var capable = confirm("Are you able to attend this class?");
var confirmedVar = availability && capable;

alert("Attendance availability: "+ confirmedVar);

//Offer available Exercise
var regularPurchaser = confirm("Do you have more than 2 items");
var offerExpiration = confirm("Has offer expired");

var offerUsable = regularPurchaser&&!offerExpiration;
alert("Offer availability: "+offerUsable);

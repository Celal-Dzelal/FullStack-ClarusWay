//! Get user input using prompt(“Enter your age:”). If user is 18 or older , give feedback:'You are old enough to drive' but if not 18 give another feedback stating to wait for the number of years he needs to turn 18.,
/*
let age = +prompt("Enter Your Age: ");

if (age > 18) {
  console.log("You are old enough to drive");
} else {
  console.log(`18 yaşına girmenize ${18 - age} yıl var`);
}
*/
//! Compare the values of myAge and yourAge using if … else. Based on the comparison and log the result to console stating who is older (me or you). Use prompt(“Enter your age:”) to get the age as input.
/*
let myAge = 36;
let yourAge = +prompt("Enter your age:");

if (myAge > yourAge) {
  console.log(`I'm ${myAge - yourAge} years older than you`);
} else if (myAge === yourAge) {
  console.log("We are in the same age");
} else {
  console.log(`You're ${yourAge - myAge} years older than me`);
}
*/
//! If a is greater than b return 'a is greater than b' else 'a is less than b'. Try to implement it in to ways using if else or ternary operator.
/*
let a = +prompt("Enter a Number:");
let b = +prompt("Enter Another Number:");

let result =
  a > b
    ? "a is greater than b"
    : a === b
    ? "a is equal to b"
    : "a is less than b";
console.log(result);
*/
//! Even numbers are divisible by 2 and the remainder is zero. How do you check, if a number is even or not using JavaScript?
/*
let number = +prompt("Enter a Number:");

console.log(number % 2 === 0 ? `${number} is even` : `${number} is odd`);
*/
//! Write a code which can give grades to students according to theirs scores: 90-100, A | 70-89, B | 60-69, C | 50-59, D | 0-49, F
/*
let score = +prompt("Enter Your Score");

let grades =
  score >= 90 && score <= 100
    ? "Your Grade: A"
    : score >= 70 && score <= 89
    ? "Your Grade: B"
    : score >= 60 && score <= 69
    ? "Your Grade: C"
    : score >= 50 && score <= 59
    ? "Your Grade: D"
    : score >= 0 && score <= 49
    ? "Your Grade: F"
    : "Hatalı Giriş";
console.log(grades);
*/
//! Check if the season is Autumn, Winter, Spring or Summer. If the user input is : September, October or November, the season is Autumn. December, January or February, the season is Winter. March, April or May, the season is Spring June, July or August, the season is Summer
/*
let month = +prompt("Please enter the month numerically (1-12):");

let season =
  month >= 9 && month <= 11
    ? "The season is Autumn"
    : month === 12 || month <= 2
    ? "The season is Winter"
    : month >= 3 && month <= 5
    ? "The season is Spring"
    : month >= 6 && month <= 8
    ? "The season is Summer"
    : "Unvalid Entry";

console.log(season);
*/
//! Check if a day is weekend day or a working day. Your script will take day as an input.
/*
let workingDay = ["monday", "tuesday", "wednesday", "thursday", "friday"];
let weekendDay = ["saturday", "sunday"];

let day = prompt("What is the day today?").toLowerCase().trim();

if (workingDay.includes(day)) {
  console.log("Today is working day");
} else if (weekendDay.includes(day)) {
  console.log("Today is a weekend");
} else {
  console.log("Unvalid Entry");
}
*/

//! Write a program which tells the number of days in a month, now consider leap year.


let year = +prompt("Enter the Year:");

if (year % 4 === 0 && year % 100 !== 0) {
  console.log("Leap Year and February has 29 days");
} else if (year % 100 === 0) {
  if (year % 400 === 0) {
    console.log("Leap Year and February has 29 days");
  } else {
    console.log("Not a Leap Year and February has 28 days");
  }
} else {
  console.log("Not a Leap Year and February has 28 days");
}



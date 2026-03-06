// console.log("Conditional Statements in JS");

// // if statement
// // 1.age example
// let age = 18;
// if (age >= 18) {
//     console.log("you can vote");
// }

// // 2.a random number is greater than or not

// let num = Math.floor(Math.random() * 10) + 1;
// if (num >= 5) {
//     console.log(num + " is greater than or equal to 5");
// }

// // if else statement
// // 1.age example
// let age1 = 18;
// if (age1 >= 18) {
//     console.log("you can vote");
// }
// else {
//     console.log("you cannot vote");
// }
// // // 2.rating a actor

// let rating = 3;
// if (rating >= 3) {
//     console.log("You are a superstar");
// }
// else {
//     console.log("You are a good actor");
// }

// nested conditions
// const password = prompt("Enter your password");
// // password should be at least 6 characters
// if (password.length >= 6) {
//     // password should not contain spaces
//     if (password.indexOf(' ') === -1) {
//         console.log("Password is valid");
//     }
//     else {
//         console.log("Password does not contain spaces");
//     }
// }
// else {
//     console.log("Password is too short");
// }

// truthy and falsy values

// const userInput = prompt("Enter something");
// if (userInput) {
//     console.log("truthy value");
// }
// else {
//     console.log("falsy value");
// }

// conditional operators
let age = 20;
let userID = true;
if (age >= 18 && userID) {
    console.log("you can enter")
}
else {
    console.log("you cannot enter")
}
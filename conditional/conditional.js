console.log("Conditional Statements in JS");

// if statement
// 1.age example
let age = 18;
if (age >= 18) {
    console.log("you can vote");
}

// 2.a random number is greater than or not

let num = Math.floor(Math.random() * 10) + 1;
if (num >= 5) {
    console.log(num + " is greater than or equal to 5");
}

// if else statement
// 1.age example
let age1 = 18;
if (age1 >= 18) {
    console.log("you can vote");
}
else {
    console.log("you cannot vote");
}
// // 2.rating a actor

let rating = 3;
if (rating >= 3) {
    console.log("You are a superstar");
}
else {
    console.log("You are a good actor");
}
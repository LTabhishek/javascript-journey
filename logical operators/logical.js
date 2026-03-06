
// conditional operators
//and operator (&&) - both conditions must be true
let age = 20;
let userID = true;
if (age >= 18 && userID) {
    console.log("you can enter")
}
else {
    console.log("you cannot enter")
}

// password should be at least 6 characters and should not contain spaces
const password = prompt("Enter your password");
if (password.length >= 6 && password.indexOf(' ') === -1) {
    console.log("Password is valid");
}
else {
    console.log("Password is invalid");
}
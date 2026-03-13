//for loops in java script

// for (let i = 0; i < 10; i++) {
//     console.log(i);
// }

// //to print even numbers from 0 to 20
// for (let i = 0; i <= 20; i += 2) {
//     console.log(i);
// }

// count down form 20 to 0
// for (let i = 20; i >= 0; i--) {
//     console.log(i);
// }

// //nested loops
// for (let i = 0; i <= 10; i++) {
//     console.log(`i is : ${i}`)
//     for (let j = 1; j < 4; j++) {
//         console.log(`   j is : ${j}`)
//     }
// }
let num = 7;
for (let i = 1; i <= 1; i++) {
    for (j = 1; j <= 10; j++)
        console.log(`${num * j}`)
}

for (let i = 1; i <= 10; i++) {
    console.log(i)

    for (let i = 2; i <= 20; i += 2) {
        console.log(i)
    }
}
for (let i = 10; i >= 1; i--) {
    console.log(i)
}

let fruits = ["apple", "banana", "mango", "orange"]
for (let i = 0; i < fruits.length; i++) {
    console.log(fruits[i])
}

let people = ['scooby', 'velma', 'daphane', 'shaggy', 'fred']
for (let i = 0; i < people.length; i++) {
    console.log(people[i].toUpperCase());
}
let num = 7;
for (let j = 1; j <= 10; j++) {
    console.log(`${num}*${j} :${num * j}`)
}
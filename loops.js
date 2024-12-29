// //Q1
let userName = prompt("Enter your Name please :");
let Gender;

while (true) {
    Gender = prompt("Enter Your Gender please:");
    if (Gender === "male" || Gender === "female") {
        break;
    } else {
        alert("Invalid input. Please enter 'male' or 'female'.");
    }
}

if (Gender === "male") {
    alert(`Welcome, Mr. ${userName}!`);
} else if (Gender === "female") {
    alert(`Welcome, Ms. ${userName}!`);
}
let orderChoice = prompt("Would you like to order shawarma, zinger, or burger");
alert(`Your ${orderChoice} is being prepared.`);
console.log(`${userName} ordered ${orderChoice}`)
//Q1
// for (let i = 0; i <= 5; i++) {
//     alert(i);
// }

// //Q2
// let number;

// while (true) {
//     number = prompt("Please enter a number between 0 and 100:");

//     if (number >= 0 && number <= 100) {
//         break;
//     } else {
//         alert("Invalid input. Please enter a number between 0 and 100.");
//     }
// }


// alert(`Thank you! You entered a valid number: ${number}`);

// //Q3

// let number2 = parseInt(prompt("Please enter an integer:"));

// let sum = 0;


// for (let i = 0; i <= number2; i++) {
//   sum += i;
// }

// alert(`The sum of integers from 0 to ${number2} is: ${sum}`);
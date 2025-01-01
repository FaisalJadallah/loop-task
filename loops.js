//Q1
let userName = "";
let userGender = "";
let userOrder = "";
let userAnswers = [];

function askGender() {
  let gender = prompt("Enter your gender (male/female):").toLowerCase();
  while (gender !== "male" && gender !== "female") {
    gender = prompt(
      "Invalid input. Please enter your gender (male/female):"
    ).toLowerCase();
  }
  return gender;
}

// Collect user information
userName = prompt("Enter your name:") || "Guest";
userGender = askGender();
let title = userGender === "male" ? "Mr." : "Ms.";
userAnswers.push(userName, userGender);
alert(`Welcome ${title} ${userName}`);

userOrder =
  prompt("What would you like to order? (shawarma, zenger, burger)") ||
  "nothing";
alert(`Your ${userOrder} is being prepared!`);
console.log(`${userName} ordered ${userOrder}`);
userAnswers.push(userOrder);

console.log("User details:");
for (let i = 0; i < userAnswers.length; i++) {
  console.log(userAnswers[i]);
}

const userInfoDiv = document.getElementById("user-info");
const paragraph = document.createElement("p");

const orderedList = document.createElement("ol");

const userItem = document.createElement("li");
userItem.textContent = `User Name: ${userName}`;
orderedList.appendChild(userItem);

const genderItem = document.createElement("li");
genderItem.textContent = `Gender: ${userGender}`;
orderedList.appendChild(genderItem);

const orderItem = document.createElement("li");
orderItem.textContent = `Order: ${userOrder}`;
orderedList.appendChild(orderItem);

userInfoDiv.appendChild(paragraph);
userInfoDiv.appendChild(orderedList);

//ex3
//q1
let y=function (x){
    let num;
    for(i=x.length;i>=0;i--){
    num+=x[i];
    }
    return num;
    }
    let x="532443";
    console.log(y(x));
    
    
    //q2
    for(i=0;i<=15;i++){
         if(i%2==0){
            console.log(i+" is even");
        }
        else if(i%2!=0){
            console.log(i+" is odd");
        }
    }


//Q1
for (let i = 0; i <= 5; i++) {
    alert(i);
}


//Q2
let number;

while (true) {
    number = prompt("Please enter a number between 0 and 100:");

    if (number >= 0 && number <= 100) {
        break;
    } else {
        alert("Invalid input. Please enter a number between 0 and 100.");
    }
}


alert(`Thank you! You entered a valid number: ${number}`);

//Q3

let number2 = parseInt(prompt("Please enter an integer:"));

let sum = 0;


for (let i = 0; i <= number2; i++) {
  sum += i;
}

alert(`The sum of integers from 0 to ${number2} is: ${sum}`);




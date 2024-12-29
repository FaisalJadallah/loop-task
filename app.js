

let userName =prompt("please enter your name");
let userGender=prompt("enter your gender : male or female");
   if (userGender === "male") {
   alert("welcome mr" +userName);
   } else if (userGender === "female") {
   alert("welcome ms" + userName);
   }    
   else {
    alert("welcome" + userName);
}

const yourorder = prompt("enter your order shawarma or zinger or burger");

if (yourorder==="shawarma"){
    alert("thank you for oredering shawarma");
}
else if (yourorder==="zinger"){
    alert("thank you for oredering zinger");
}
else if (yourorder==="burger"){
    alert("thank you for oredering burger");
}
else {
    alert("please order");
}

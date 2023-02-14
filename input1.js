//1

const readline = require('readline-sync');

let answer = readline.question("Would you like to hear a joke?\nYour answer: ");
console.log(answer);
if (answer == "yes"){
console.log("How do you fixed a cracked pumpkin?\nWith a pumpkin patch.");

} else {
    console.log("end of program")
}
let number = readline.question("give me a number");
if (number%2 == 0){
    console.log("divisible by 6");
} else {
    console.log("not divisible by 6");
}
if (number%3 == 0){
    console.log("divisible by 3");
} else {
    console.log("not divisible by 3");
}
  if (number%4 == 0){
      console.log("divisible by 4");
  } else {
      console.log("not divisible by 4");
  }
  if (number%5 == 0){
      console.log("divisible by 5");
  } else {
      console.log("not divisible by 5");
  }
if (number%6 == 0){
    console.log("divisible by 6");
} else {
    console.log("not divisible by 6");
}

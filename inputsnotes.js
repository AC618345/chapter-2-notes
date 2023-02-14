const readline = require('readline-sync');

let answer = readline.question("what day is it?\nYour answer: ");+-
console.log(answer);

let username = readline.question("Enter username: ");
let password = readline.question("Enter password: ");
if (password == "abc"){
    console.log(`Welcome ${username}`);
} else {
    console.log("invalid");
}

let currentPrice = readline.question("Enter current price: ");
let originalPrice = readline.question("Enter original price: ");
let diff = originalPrice-currentPrice;
let discount = (diff/originalPrice).toFixed(2);
console.log(`discount: ${discount}`);

//Exponents
let base = Number(readLine.question("Enter the base: "));
let exp = Number(readLine.question("Enter the exponent: "));
let answer2 = base ** exp
console.log(`${base} to the power of ${exp} = ${answer2}`);
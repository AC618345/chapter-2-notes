const readLine = require('readline-sync');

let quit = readLine.question("Quit? y ot n: ")
while (quit != "y" && quit != "n"){
    console.log("Invalid choice");
    quit = readLine.question("Quit? y or n");
}
let quit2 = readLine.question("Quit? y ot n: ")
while (quit2 != "y" && quit2 !="Y" && quit2 != "n" && quit2 !="N") {
    console.log("Invalid choice");
    quit2 = readLine.question("Quit? y or n");
}
let choose = readLine.question("Choose A, B, or C: ")
while (choose !="A" && choose !="B" && choose !="C"){
    console.log("Invalid choice");
    choose = readLine.question("Choose A, B, or C: ");
}
console.log(`You Typed ${choose}`);

let choose2 = readLine.question("Choose 1, 2, or 3: ")
while (choose2 !="1" && choose2 !="2" && choose2 !="3"){
    console.log("Invalid choice");
    choose2 = readLine.question("Choose 1, 2, or 3: ");
}
console.log(`You Typed ${choose2}`);

let choose3 = readLine.question("Choose a number between 0 and 10: ")
while (choose3 !="1" && choose3 !="2" && choose3 !="3" && choose3 !="4" && choose3 !="5" && choose3 !="6" && choose3 !="7" && choose3 !="8" && choose3 !="9" && choose3 !="10"){
    console.log("Invalid choice");
    choose3 = readLine.question("Choose a number between 0 and 10: ");
}
console.log(`You Typed ${choose3}`);

let positive = Number(readLine.question("Enter a positiver number: "))
while (positive != "number<+" ){
    console.log("Invalid choice");
    positive = readLine.question("Enter a positive number: ");
}
console.log(`You Typed ${positive}`);


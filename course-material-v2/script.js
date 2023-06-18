//FIRST LECTURE "VARIABLE"
/* let js = "Amazing";

console.log(40 + 28 + 23 -10)

console.log ('Jonas');
console.log (23);

let firstName = 'Matilda';

console.log(firstName);
console.log(firstName);
console.log(firstName);

// Variable name conventions
let jonas_matilda = 'JM';
let $function = 27;
let PI = 3.1415;


//SECOND LECTURE 'DATA TYPE'

let JavaScriptIsFun = true;
console.log(JavaScriptIsFun);

console.log (typeof JavaScriptIsFun);
console.log (typeof true);
console.log (typeof 'Jonas');
console.log (typeof jonas);
console.log (typeof 23);

JavaScriptIsFun = 'FUN!';
console.log (typeof JavaScriptIsFun);

console.log (typeof null);

// THIRD LECTURE "LET, CONST, VAR"

let age = 31;
age = 33;

console.log(age);

const birthYear = 1989;
// birthYear = 1991;
// const job;
console.log(birthYear);

lastName = 'Schedtmanz';
console.log(lastName);

// FOURTH LECTURE "OPERATORS"
// Math operators
const now = 2037
const ageJonas = now - 1991;
const ageSarah = now - 2018;
console.log(ageJonas, ageSarah);
console.log(ageJonas * 2, ageJonas / 10, 2**3);

const firstName = "Jonas";
const lastName = "Schedtmann";
console.log (firstName + " " + lastName);

// Asignment operators
let x = 10 + 5; // x = 15
x += 10; // x = x + 10 = 25
x *= 4; // x = x * 4 = 100
x ++; // x = x + 1
x --;
x --;
console.log(x);

// Comparison operators
console.log(ageJonas > ageSarah); // >, <, >=, <= 
console.log(ageSarah >= 18);

const isFullAge = ageSarah >= 18;
console.log(now - 1991 > now - 2018);

// FIFTH LECTURE "OPERATOR PRECEDENCE"

const now = 2037
const ageJonas = now - 1991;
const ageSarah = now - 2018;

console.log(now - 1991 > now - 2018);

console.log(25 - 10 - 5);

let x, y;
x = y = 25 - 10 - 5; // x = y = 10, x = 10
console.log (x, y);

const average = (ageJonas + ageSarah)/2;
console.log(ageJonas, ageSarah, average);

// STRINGS & TEMPLATE LITERALS

const firstName = 'Jonas';
const job = 'teacher';
const birthDate = 1991;
const year = 2037

const jonas = "I'm " + firstName + ", a " + (year - birthDate) + " years old " + job + "!";
console.log(jonas);
const jonasNew = `I'm ${firstName}, a ${year - birthDate} years old ${job} !`;
console.log(jonasNew);

console.log(`Just a regular string...`);
console.log(`String with \n multiple \n lines`);
console.log(`String
with
multiple
lines`);
*/
// TAKING DECISIONS: IF/ELSE STATEMENTS
/*
const age = 15;
const isOldEnough = age >= 18;

if (isOldEnough) {
    console.log(`Sarah can start driving license`);
} else {
    const yearsLeft = 18 - age;
    console.log(`Sarah is too young. She needs to wait another ${yearsLeft} years.`);
}

const birthYear = 2002;

let century
if (birthYear <= 2000){
    century = 20;
} else (birthYear > 2000){
    century = 21;
}
console.log(century);
*/
// TYPE CONVERSION AND COERCION 
/*
// Type Conversion
const inputYear = `1991`;
console.log(Number(inputYear), inputYear);
console.log(Number(inputYear) + 18);

console.log(Number(`Jonas`));
console.log(typeof NaN);

console.log(String(23), 23);

// Type coercion
console.log( 'I am ' + 23 + ' years old');
console.log('23' - '10' - 3);
console.log('23' + '10' + 3);

console.log('23' * '2');
console.log('23' / '2');

let n = '1' + 1; //  The number is converted to string so the result is 11
n = n - 1; // 11 - 1   because the operator minus cannot act any other way
console.log ( n );

console.log (2+3+4+'5');  // This is adding from 2 to 4 and then will change to string and the result is 95
console.log ('10'-'4'-'3'-2+'5');  // Same example, 10 - 4 = 6 - 3 = 3 - 2 = 1 + '5' = 15
*/
// TRUTHY AND FALSY VALUES 
/*
// 5 falsy values: 0, '', undefined, null, NaN
console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean('Jonas'));
console.log(Boolean({}));
console.log(Boolean(''));

const money = 100;
if (money) {
    console.log("Don't spend it all ;)");
} else {
    console.log('You should get a job!');
}

let height = 0;
if (height){
    console.log(`YAY! Height is defined`);
} else {
    console.log(`Height is UNDEFINED`);
}
*/

// EQUALITY OPERATORS: == vs ===
/*
const age = `18`;

if (age === 18) {
    console.log(`Congrats you have just became an adult :) (strict)`);
}
if (age == 18) {
    console.log(`Congrats you have just became an adult :) (loose)`);
}

const favourite = Number(prompt(`What's your favourite number?`));
console.log (favourite);
console.log (typeof favourite);

if (favourite === 23) {
    console.log(`Cool 23 is an amazing number!`);
} else if (favourite === 7) {
    console.log(`Cool, 7 is also a great number!`);
} else if (favourite === 9) {
    console.log(`9 is also a cool number!`);
}else {
    console.log (`Number is not 23 or 7`);
}

if (favourite !== 23) {
    console.log(`Why not 23?`);
}
*/
// LOGICAL OPERATORS
/*
const hasDriverLicense = true;
const hasGoodVision = true;

console.log(hasDriverLicense && hasGoodVision);
console.log(hasDriverLicense || hasGoodVision);
console.log(!hasDriverLicense);

const shouldDrive = hasDriverLicense && hasGoodVision;

// if(hasDriverLicense && hasGoodVision) {
//     console.log(`Sarah is able to drive!`);
// } else {
//     console.log(`Someone else shoul drive...`);
// }

const isTired = false;
console.log(hasDriverLicense && hasGoodVision && isTired);

if (hasDriverLicense && hasGoodVision && !isTired) {
    console.log (`Sarah is able to drive!`)
} else {
    console.log(`Someone else shoul drive...`);
}
*/
// THE SWITCH STATEMENT
/* 
const day = "monday";

switch(day) {
    case "monday": // day === "monday"
        console.log("Plan my course structure");
        console.log("Go to coding meet up");
        break;
    case "tuesday":
        console.log("Prepare theory videos");
        break;
    case "wednesday":
    case "thursday":
        console.log("Write code examples");
        break;
    case "friday":
        console.log("Record videos");
        break;
    case "saturday":
    case "sunday":
        console.log("Write code examples");
        break;
    default:
        console.log("Not a valid day!");
}

if (day === "monday") {
    console.log("Plan my course structure");
    console.log("Go to coding meet up");
} else if (day === "tuesday") {
    console.log("Prepare theory videos");
} else if (day === "wednesday" || day === "thursday") {
    console.log("Write code examples");
} else if (day === "friday") {
    console.log("Record videos");
} else if (day === "saturday" || day === "sunday") {
    console.log("Enjoy the weekend :D");
} else {
    console.log("Not a valid day");
}

// STATEMENTS AND EXPRESSIONS
3 + 4 
1991
true && false && !false

if (23>10) {
    const str = '23 is bigger';
}

const me = 'Jonas';
console.log(`I'm ${2037 - 1991} years old, ${me}`);

// THE CONDITIONAL (TERNARY) OPERATOR

const age = 23;
age >= 18 ? console.log(`I'd like to drink wine`):
console.log(`I'd like to drink water`);

const drink = age >= 18 ? `wine` : `water`;
console.log(drink);


let drink2;  // This is the same expression with conditionals
if(age >=18) {
    drink2 = `wine` ;
} else {
    drink2 = `water`;
}
console.log(drink2);

console.log( `I like to drink ${age >= 18 ? `wine` : `water`}`);

CODE CHALLENGE 4 

(My solution)
bill = prompt(`Introduce the bill's value`);
let tip ;
let total ;
50 >= bill <= 300 ? console.log(`The bill was ${bill}, the tip was ${ tip = bill*0.15 } and the total value ${ parseInt(bill)+parseFloat(tip) }`) : console.log(`The bill was ${bill}, The tip was ${ tip = bill*0.20 } and the total value ${ parseInt(bill)+parseFloat(tip) }`) ;
 
 (Cleaner solution)
const bill = 275;
const tip = bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
console.log(`The bill was ${bill}, the tip was ${tip}, and the total value ${bill + tip}`);

 */
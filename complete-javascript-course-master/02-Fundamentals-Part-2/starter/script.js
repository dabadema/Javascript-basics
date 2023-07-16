'use strict';

/*
///////////////////////////////////////
// Activating Strict Mode

let hasDriversLicense = false;
const passTest = true;

if (passTest) hasDriversLicense = true;
if (hasDriversLicense) console.log('I can drive :D');

// const interface = 'Audio';
// const private = 534;


///////////////////////////////////////
// Functions

function logger() {
  console.log('My name is Jonas');
}

// calling / running / invoking function
logger();
logger();
logger();

function fruitProcessor(apples, oranges) {
  const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
  return juice;
}

const appleJuice = fruitProcessor(5, 0);
console.log(appleJuice);

const appleOrangeJuice = fruitProcessor(2, 4);
console.log(appleOrangeJuice);

const num = Number('23');


///////////////////////////////////////
// Function Declarations vs. Expressions

// Function declaration
function calcAge1(birthYeah) {
  return 2037 - birthYeah;
}
const age1 = calcAge1(1991);

// Function expression
const calcAge2 = function (birthYeah) {
  return 2037 - birthYeah;
}
const age2 = calcAge2(1991);

console.log(age1, age2);


///////////////////////////////////////
// Arrow functions

const calcAge3 = birthYeah => 2037 - birthYeah;
const age3 = calcAge3(1991);
console.log(age3);

const yearsUntilRetirement = (birthYeah, firstName) => {
  const age = 2037 - birthYeah;
  const retirement = 65 - age;
  // return retirement;
  return `${firstName} retires in ${retirement} years`;
}

console.log(yearsUntilRetirement(1991, 'Jonas')); console.log(yearsUntilRetirement(1980, 'Bob'));


///////////////////////////////////////
// Functions Calling Other Functions
function cutFruitPieces(fruit) {
  return fruit * 4;
}

function fruitProcessor(apples, oranges) {
  const applePieces = cutFruitPieces(apples);
  const orangePieces = cutFruitPieces(oranges);

  const juice = `Juice with ${applePieces} piece of apple and ${orangePieces} pieces of orange.`;
  return juice;
}
console.log(fruitProcessor(2, 3));


///////////////////////////////////////
// Reviewing Functions
const calcAge = function (birthYeah) {
  return 2037 - birthYeah;
}

const yearsUntilRetirement = function (birthYeah, firstName) {
  const age = calcAge(birthYeah);
  const retirement = 65 - age;

  if (retirement > 0) {
    console.log(`${firstName} retires in ${retirement} years`);
    return retirement;
  } else {
    console.log(`${firstName} has already retired 🎉`);
    return -1;
  }
}

console.log(yearsUntilRetirement(1991, 'Jonas'));
console.log(yearsUntilRetirement(1950, 'Mike'));
*/

///////////////////////////////////////
// Coding Challenge #1

/*
Back to the two gymnastics teams, the Dolphins and the Koalas! There is a new gymnastics discipline, which works differently.
Each team competes 3 times, and then the average of the 3 scores is calculated (so one average score per team).
A team ONLY wins if it has at least DOUBLE the average score of the other team. Otherwise, no team wins!

1. Create an arrow function 'calcAverage' to calculate the average of 3 scores
2. Use the function to calculate the average for both teams
3. Create a function 'checkWinner' that takes the average score of each team as parameters ('avgDolhins' and 'avgKoalas'), and then logs the winner to the console, together with the victory points, according to the rule above. Example: "Koalas win (30 vs. 13)".
4. Use the 'checkWinner' function to determine the winner for both DATA 1 and DATA 2.
5. Ignore draws this time.

TEST DATA 1: Dolphins score 44, 23 and 71. Koalas score 65, 54 and 49
TEST DATA 2: Dolphins score 85, 54 and 41. Koalas score 23, 34 and 27

HINT: To calculate average of 3 values, add them all together and divide by 3
HINT: To check if number A is at least double number B, check for A >= 2 * B. Apply this to the team's average scores 😉

GOOD LUCK 😀


const calcAverage = (score1, score2, score3) => (score1+score2+score3)/3;

let scoreDolphins = calcAverage(44,23,71);
let scoreKoalas = calcAverage(65,54,49);

const checkWinner = function (avgDolphins, avgKoalas) {
    if (avgDolphins > 2*avgKoalas) {
        console.log(`Dolphins win (${avgDolphins} vs. ${avgKoalas})`);
    } else if (avgKoalas > 2*avgDolphins) {
        console.log(`Koalas win (${avgKoalas} vs. ${avgDolphins})`);
    } else {
        console.log(`No team wins...`)
    }
}

checkWinner(scoreDolphins, scoreKoalas);

///////////////////////////////////////
// Introduction to Arrays

const friend1 = `Michael`;
const friend2 = `Steven`;
const friend3 = `Peter`;

const friends = [`Michael`, `Steven`, `Peter`]; // This is called literal sentence
console.log(friends);

const y = new Array(1991, 1984, 2008, 2020);

console.log(friends[0]);
console.log(friends[2]);

console.log(friends.length);
console.log(friends[friends.length -1]);

friends[2] = `Jay`;
console.log(friends);

const firstName = `Jonas`;
const jonas = [firstName, `Schmedtmann`, 2037-1991, `teacher`, friends];
console.log(jonas);
console.log(jonas.length);

const calcAge = function (birthYeah) {
  return 2037 - birthYeah;
}
const years = [1990, 1967, 2002, 2010, 2018];

const age1 = calcAge(years[0]);
const age2 = calcAge(years[1]);
const age3 = calcAge(years[years.length - 1]);
console.log(age1, age2, age3);

const ages = [calcAge(years[0]), calcAge(years[1]), calcAge(years[years.length -1])];
console.log(ages);
*/
///////////////////////////////////////
// Basic Array Operations
/*
const friends = [`Michael`, `Steven`, `Peter`];
const newLength = friends.push(`Jay`);

//Add elements
console.log(friends);
console.log(newLength);

friends.unshift(`John`);
console.log(friends);

//Remove elements
friends.pop(); //Remove the last item of the array
const popped = friends.pop();
console.log(popped);
console.log(friends);

friends.shift(); //First item
console.log(friends);

console.log(friends.indexOf(`Steven`));
console.log(friends.indexOf(`Bob`));

friends.push(23);
console.log(friends.includes(`Steven`));
console.log(friends.includes(23));

if (friends.includes(`Steven`)) {
  console.log(`You have a friend called Steven`);
}
*/
///////////////////////////////////////
// Coding Challenge #2
/*
Steven wants you to improve his tip calculator, using the same rules as before — tip 15% of the bill if the bill value is
between 50 and 300, and if the value is different, the tip is 20%.

Your tasks:

1) Write a function calcTip that takes any bill value as an input and returns the corresponding tip, calculated based on the
rules above (you can check out the code from the first tip calculator challenge if you need to). 
Use the function type you like the most. Test the function using a bill value of 100.

2)And now let's use arrays! So, create an array called bills containing the test data below.

3)Create an array called tips containing the tip value for each bill, calculated from the function you created before.

4)BONUS: Create an array totals containing the total values, so the bill + tip.

TEST DATA: 125, 555, and 44.
*/
/*
const calcTip = function(billValue){
  if (50 < billValue && billValue< 300){
    return billValue*0.15;
  } else {
    return billValue*0.20;
  }
}

const functionTest = calcTip(100);
console.log(functionTest);

const bills = [125, 555, 44];
console.log(bills);

const tipBill1 = calcTip(bills[0]);
const tipBill2 = calcTip(bills[1]);
const tipBill3 = calcTip(bills[2]);

const tips = [tipBill1, tipBill2, tipBill3];
console.log(tips);

// Solution from the professor is simpler and having less variables

const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2]);
console.log(tips); 

const totals = [bills[0]+tips[0], bills[1]+tips[1], bills[2]+tips[2]];
console.log(totals);
*/
///////////////////////////////////////
// Introduction to objects
/*
const jonasArray = [
  'Jonas',
  'Schmedtmann',
  2037 - 1991.,
  'teacher',
  ['Michael', 'Peter', 'Steven']
];

const jonas = {
  firstName: 'Jonas',
  lastName: 'Schmedtmann',
  age: 2037 - 1991,
  job: 'teacher',
  friends: [`Michael`, `Peter`, `Steven`]
};
console.log(jonas);
*/
///////////////////////////////////////
// Dot vs. Bracket Notation
/*
const jonas = {
  firstName: 'Jonas',
  lastName: 'Schmedtmann',
  age: 2037 - 1991,
  job: 'teacher',
  friends: [`Michael`, `Peter`, `Steven`]
};
console.log(jonas);

console.log(jonas.lastName);
console.log(jonas[`lastName`]);

const nameKey = `Name`;
console.log(jonas[`first` + nameKey]);
console.log(jonas[`last` + nameKey]);
//console.log(jonas.`last` + nameKey);

const interestedIn = prompt(`What do you want to know about Jonas? Choose between firstName, lastName, age, job and friends`);

if (jonas[interestedIn]) {
  console.log(jonas[interestedIn]);
} else {
  console.log(`Wrong or misspell request! Choose between firstName, lastName, age, job and friends`);
}

jonas.location = `Portugal`;
jonas[`twitter`] = `@jonasschmedtmann`;
console.log(jonas);

//Challenge!   "Jonas has 3 friends, and hist best friend is called Michael"
jonas[`friendsNumber`] = 3; // No need to declare this, we have the length of the array!
jonas.bestFriend = `Michael`; //No need to declare this property neither, we could get it from the array!!
console.log(jonas[`firstName`] + ` has ` + jonas.friends.length + ` friends, and his best friends is called ` + jonas.friends[0]);
// console.log(`${jonas.firstName} has ${jonas.friends.lenght}, and this best friend is called ${jonas.friends[0]});
*/
///////////////////////////////////////
// Object Methods
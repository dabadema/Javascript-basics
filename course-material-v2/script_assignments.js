//FIRST LECTURE "VARIABLE"
/*   
let country = 'Spain';
let continent = 'Europe';
let population = 55000000;

console.log(country);
console.log(continent);
console.log(population);


//SECOND LECTURE "DATA TYPE"

let isIsland = 'False';
let language;
console.log(isIsland);
console.log (population);
console.log (country);
console.log (language);

//THIRD LECTURE "LET, CONST, VAR"

language = "spanish";
const country = "Spain";
const continent = "Europe";
const isIsland = false;
// isIsland = true;

//FOURTH LECTURE "OPERATORS"

let population = 55000000;
console.log (population/2);

population ++;
console.log (population);

let finlandPopulation = 6000000;

console.log(population > finlandPopulation);
console.log(population > 33000000);

let description = (country + " is in " + continent + " and its " + population + " people speaks " + language);
console.log (description); 
*/

///////////////////////////////////
/*Coding Challenge #1

Mark and John are trying to compare their BMI (Body Mass Index), which is
calculated using the formula:
BMI = mass / height ** 2 = mass / (height * height) (mass in kg
and height in meter).

Your tasks:
1. Store Mark's and John's mass and height in variables
2. Calculate both their BMIs using the formula (you can even implement both
versions)
3. Create a Boolean variable 'markHigherBMI' containing information about
whether Mark has a higher BMI than John.

Test data:
§ Data 1: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95
m tall.
§ Data 2: Marks weights 95 kg and is 1.88 m tall. John weights 85 kg and is 1.76
m tall.

GOOD LUCK

let markMass1 = 78;
let markMass2 = 95;
const markHeight1 = 1.69;
const markHeight2 = 1.88;
let johnMass1 = 92;
let johnMass2 = 85;
const johnHeight1 = 1.95;
const johnHeight2 = 1.76;

let markBMI1 = markMass1 / ( markHeight1 ** 2 );
let markBMI2 = markMass2 / ( markHeight2 ** 2 );
let johnBMI1 = johnMass1 / ( johnHeight1 ** 2 );
let johnBMI2 = johnMass2 / ( johnHeight2 ** 2 );

console.log(markBMI1, markBMI2);
console.log(johnBMI1, johnBMI2);

let markHigherBMI1 = markBMI1 > johnBMI1;
let markHigherBMI2 = markBMI2 > johnBMI2;

console.log(markHigherBMI1, markHigherBMI2);  

// STRINGS AND TEMPLATE LITERALS 

let population = 55000000;
const language = "spanish";
const country = "Spain";
const continent = "Europe";

// let description = (country + " is in " + continent + " and its " + population + " people speaks " + language);
let description = `${country} is in ${continent} and its ${population} people speak ${language}! Come and visit us!!`;
console.log (description); 
*/
///////////////////////////////////
/*Coding Challenge #2

Use the BMI example from Challenge #1, and the code you already wrote, and
improve it.

Your tasks:

1. Print a nice output to the console, saying who has the higher BMI. The message
is either "Mark's BMI is higher than John's!" or "John's BMI is higher than Mark's!"
2. Use a template literal to include the BMI values in the outputs. Example: "Mark's
BMI (28.3) is higher than John's (23.9)!"

Hint: Use an if/else statement 😉


let markMass1 = 78;
let markMass2 = 95;
const markHeight1 = 1.69;
const markHeight2 = 1.88;
let johnMass1 = 92;
let johnMass2 = 85;
const johnHeight1 = 1.95;
const johnHeight2 = 1.76;

let markBMI1 = markMass1 / ( markHeight1 ** 2 );
let markBMI2 = markMass2 / ( markHeight2 ** 2 );
let johnBMI1 = johnMass1 / ( johnHeight1 ** 2 );
let johnBMI2 = johnMass2 / ( johnHeight2 ** 2 );

if (markBMI1 > johnBMI1) {
    console.log (`Mark's BMI (${markBMI1.toFixed(1)}) is higher than John's (${johnBMI1.toFixed(1)})!`)
} else {
    console.log (`John's BMI (${johnBMI1.toFixed(1)}) is higher than Mark's (${markBMI1.toFixed(1)})!`)
}
*/
// TYPE CONVERSION AND COERSION
/*
console.log('9' - '5'); // 4
console.log('19' - '13' + '17'); // 617
console.log('19' - '13' + 17); // 23
console.log('123' < 57); // False
console.log(5 + 6 + '4' + 9 - 4 - 2); // 1143
*/
// EQUALITY OPERATORS: == VS ===
/*
const numNeighbours = Number(prompt(`How many neighbour countries does your country have?`));

if (numNeighbours === 1) {
    console.log(`Only 1 border!`);
} else if (numNeighbours > 1 ) {
    console.log(`More than 1 border`);
} else {console.log(`No borders!`)}
*/
// LOGICAL OPERATORS 
/*
const country = prompt(`What country would you like to check?`);
const languageSpoken = prompt(`What language is spoken there?`);
const population = Number(prompt(`What's the population in there?`));
const isAnIsland = prompt(`Is that country an island? 'Yes' or 'No'`);

if ( languageSpoken === `english` && population < 50 && isAnIsland === `No`) {
    console.log(`You should live in ${country}!`);
} else {
    console.log(`${country} does not meet your criteria :(`);
}
*/

///////////////////////////
/*Coding Challenge 3

There are two gymnastics teams, Dolphins and Koalas. They compete against each
other 3 times. The winner with the highest average score wins a trophy!

Your tasks:
1. Calculate the average score for each team, using the test data below
2. Compare the team's average scores to determine the winner of the competition,
and print it to the console. Don't forget that there can be a draw, so test for that
as well (draw means they have the same average score)
3. Bonus 1: Include a requirement for a minimum score of 100. With this rule, a
team only wins if it has a higher score than the other team, and the same time a
score of at least 100 points. Hint: Use a logical operator to test for minimum
score, as well as multiple else-if blocks 😉
4. Bonus 2: Minimum score also applies to a draw! So a draw only happens when
both teams have the same score and both have a score greater or equal 100
points. Otherwise, no team wins the trophy

Test data:
§ Data 1: Dolphins score 96, 108 and 89. Koalas score 88, 91 and 110
§ Data Bonus 1: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 123
§ Data Bonus 2: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 106
GOOD LUCK 😀

const dolphAvgScore = (96+108+89)/3;
const koalasAvgScore = (88+91+110)/3;

console.log(dolphAvgScore, koalasAvgScore);

if(dolphAvgScore > koalasAvgScore) {
    console.log("Dolphins' score is higher than Koalas'" );
} else if(koalasAvgScore > dolphAvgScore) {
    console.log("Koalas' score is higher than Dolphins'");
} else if(dolphAvgScore === koalasAvgScore) {
    console.log("There is a draw!");
}
// Bonus 1

const dolphAvgScoreB1 = (97+112+101)/3;
const koalasAvgScoreB1 = (109+95+123)/3;

console.log(dolphAvgScoreB1, koalasAvgScoreB1);

if(dolphAvgScoreB1 > koalasAvgScoreB1 && dolphAvgScoreB1 >= 100) {
    console.log("Dolphins' score is higher than Koalas'" );
} else if(koalasAvgScoreB1 > dolphAvgScoreB1 && koalasAvgScoreB1 >= 100) {
    console.log("Koalas' score is higher than Dolphins'");
} else if(dolphAvgScoreB1 === koalasAvgScoreB1) {
    console.log("There is a draw!");
}

// Bonus 2

const dolphAvgScoreB2 = (97+112+50)/3;
const koalasAvgScoreB2 = (109+95+50)/3;

console.log(dolphAvgScoreB2, koalasAvgScoreB2);

if(dolphAvgScoreB2 === koalasAvgScoreB2 && koalasAvgScoreB2 >= 100 && dolphAvgScoreB2 >= 100) {
    console.log("There is a draw!");
} else if(koalasAvgScoreB2 > dolphAvgScoreB2 && koalasAvgScoreB2 >= 100) {
    console.log("Koalas' score is higher than Dolphins'");
} else if(dolphAvgScoreB2 > koalasAvgScoreB2 && dolphAvgScoreB2 >= 100) {
    console.log("Dolphins' score is higher than Koalas'" );
} else { 
    console.log("No one wins the trophy!!")
}

// THE SWITCH STATEMENT 

const language = prompt('Introduce yout language!');

switch(language){
    case 'chinese':
    case 'mandarin':
        console.log('MOST number of native speakers!');
        break;
    case 'spanish':
        console.log('2nd place in number of native speakers');
        break;
    case 'english':
        console.log('3rd place');
        break;
    case 'hindi':
        console.log('Number 4');
        break;
    case 'arabic':
        console.log('5th most spoken language');
        break;
    default:
        console.log('Great language too :D');
}

// THE CONDITIONAL (TERNARY) OPERATOR

countryPopulation = prompt ("What is the population in millions of your country?");

countryPopulation >= 33 ? console.log("Portugal's population is above average") : console.log("Portugal's population is below average");
*/
    






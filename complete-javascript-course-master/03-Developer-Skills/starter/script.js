// Remember, we're gonna use strict mode in all scripts now!
'use strict';

////////////////////////////////////////////
// SETTING UP PRETTIER, VSCODE AND NODE.JS
/*
const x = '23';

if (x === 23) console.log(23);

const calcAge = birthYear => 2037 - birthYear;

// BUG OK FIXME TO_DO

console.log(calcAge(1966));
*/

////////////////////////////////////////
// Using Google, StackOverflow and MDN

/*
// PROBLEM 1:
// We work for a company building a smart home thermometer. Our most recent task is this: "Given an array of temperatures of one day, calculate the temperature amplitude. Keep in mind that sometimes there might be a sensor error."

const temperatures = [3, -2, -6, -1, 'error', 9, 13, 17, 15, 14, 9, 5];

// 1) Understanding the problem
// - What is the temp amplitude? Is the difference between the min and the max temperature registered
// - How to compute max and min temperature
// / What's a sensor error? And what to do?

// 2) Breaking up into sub-problems
// - How to ignore errors?
// - Find max value in temp array
// - Find min value in temp array
// - Subtract min from max (amplitude) and return it

const calcTempAmplitude = function (temps) {
    let max = temps[0];
    let min = temps[0];
  
    for (let i = 0; i < temps.length; i++) {
      const curTemp = temps[i];
      if (typeof curTemp !== 'number') continue;
  
      if (curTemp > max) max = curTemp;
      if (curTemp < min) min = curTemp;
    }
    console.log(max, min);
    return max - min;
  };
  const amplitude = calcTempAmplitude(temperatures);
  console.log(amplitude);
  
  // PROBLEM 2:
  // Function should now receive 2 arrays of temps
  
  // 1) Understanding the problem
  // - With 2 arrays, should we implement functionality twice? NO! Just merge two arrays
  
  // 2) Breaking up into sub-problems
  // - Merge 2 arrays
  
  const calcTempAmplitudeNew = function (t1, t2) {
    const temps = t1.concat(t2);
    console.log(temps);
  
    let max = temps[0];
    let min = temps[0];
  
    for (let i = 0; i < temps.length; i++) {
      const curTemp = temps[i];
      if (typeof curTemp !== 'number') continue;
  
      if (curTemp > max) max = curTemp;
      if (curTemp < min) min = curTemp;
    }
    console.log(max, min);
    return max - min;
  };
  const amplitudeNew = calcTempAmplitudeNew([3, 5, 1], [9, 0, 5]);
  console.log(amplitudeNew);
  */

///////////////////////////////////////
// Debugging with the Console and Breakpoints
/*
const measureKelvin = function () {
  const measurement = {
    type: 'temp',
    unit: 'celsius',

    // C) FIX
    // value: Number(prompt('Degrees celsius:')),
    value: 10,
  };

  // B) FIND
  console.table(measurement);

  // console.log(measurement.value);
  // console.warn(measurement.value);
  // console.error(measurement.value);

  const kelvin = measurement.value + 273;
  return kelvin;
};
// A) IDENTIFY THE BUG
console.log(measureKelvin());


// Using a debugger from Chrome browser
const calcTempAmplitudeBug = function (t1, t2) {
  const temps = t1.concat(t2);
  console.log(temps);

  let max = 0;
  let min = 0;

  for (let i = 0; i < temps.length; i++) {
    const curTemp = temps[i];
    if (typeof curTemp !== 'number') continue;

    if (curTemp > max) max = curTemp;
    if (curTemp < min) min = curTemp;
  }
  console.log(max, min);
  return max - min;
};
const amplitudeBug = calcTempAmplitudeBug([3, 5, 1], [9, 4, 5]);
// IDENTIFY THE BUG
console.log(amplitudeBug);
*/

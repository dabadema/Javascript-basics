// Remember, we're gonna use strict mode in all scripts now!
'use strict';

const x = '23';

if (x === 23) console.log(23);

const calcAge = birthYear => 2037 - birthYear;

// BUG OK FIXME TO_DO

console.log(calcAge(1966));

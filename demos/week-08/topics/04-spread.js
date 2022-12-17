// ... (rest / spread)
// copying object / arrays
// merging objects / arrays
const john = {
    name: 'John',
    age: 32
};

const johnOfficial = {
    name: 'Jonathan Doe',
    company: 'Example Consulting',
    role: 'Accountant'
};

// merge the 2 objects into one and add a few more properties
const johnMasterDetails = {
    ...john,
    spouse: 'Jane',
    ...johnOfficial,
    children: [ 'Jack', 'Jill' ]
};

console.log( johnMasterDetails );

// array spread
console.log( Math.max( 10, 20, 30, 25, 15, 5 ) );

const arr1 = [ 1, 2, 3 ], arr2 = [ 4, 5, 6 ];
const arr3 = [ ...arr1, ...arr2 ];
console.log( arr3 );

const nums = [ 10, 20, 30, 25, 15, 5 ];
// console.log( Math.max( nums ) ); // does not work!
console.log( Math.max( ...nums ) ); // works
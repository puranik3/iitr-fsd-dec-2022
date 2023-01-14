// const has block scope
// const -> cannot reassign the variable

const x = 1;
// x++; // error

// const y; // error

// const DOES NOT make an object immutable
const john = {
    name: 'John',
    age: 32
};

john.age++;

console.log( john );

// error (no reassignment!)
// john = {
//     name: 'John',
//     age: 34
// };
const x = 10;
// x = 20; // error

const john = {
    name: 'John',
    age: 32
};

john.age = 33; // totally fine!

console.log( john );

john = { // error
    name: 'John',
    age: 33
}; 
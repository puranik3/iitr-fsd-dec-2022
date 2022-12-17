type Person = {
    name: string,
    age?: number, // optional property
    spouse?: Person
};

let john : Person;

john = {
    name: 'John',
};

let jane : Person;

jane = {
    name: 'Jane',
    age: 28,
    spouse: john
};

john.spouse = jane;
// john.children = [ 'Jack', 'Jill' ]; // error

export {}
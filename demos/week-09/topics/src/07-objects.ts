type Person = {
    gender: 'male' | 'female', // type literals (values used as types)
    name: string,
    readonly age: number,
    spouse?: Person // optional property
};

let john : Person;

john = {
    gender: 'male',
    name: 'John',
    age: 32,
};

let jane : Person;

jane = {
    gender: 'female',
    name: 'Jane',
    age: 28,
    spouse: john
};

john.spouse = jane;
// john.children = [ 'Jack', 'Jill' ];
// john.age++;

export {
    Person,
    john,
    jane
};
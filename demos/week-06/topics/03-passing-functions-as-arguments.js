// functions are "first-class citizens"
// getTitle is customizable helper function for printPerson
function printPerson( person, getTitle ) {
    const title = getTitle( person );
    console.log( title + ' ' + person.name + ' is ' + person.age + ' years old' );
}

function getEnglishTitle( person ) {
    return person.gender === 'male' ? 'Mr.' : 'Ms.';
}

function getRespectedTitle( person ) {
    return person.gender === 'male' ? 'Sir' : 'Madam';
}

// console.log( getEnglishTitle( john ) );

const john = {
    name: 'John',
    age: 32,
    gender: 'male'
};

// person = john
// getTitle = getEnglishTitle // both getTitle and getEnglisgTitle refer to the SAME function in memory
printPerson( john, getEnglishTitle );
printPerson( { name: 'Jane', age: 28, gender: 'female' }, getRespectedTitle );

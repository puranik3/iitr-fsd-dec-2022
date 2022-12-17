/**
 * Functions are "first-class citizens"
 * Functions can be used ANYWHERE objects are used in JavaScript
 */
function printPerson( person, getTitle ) {
    var title = getTitle( person );
    console.log( `${title}. ${person.name} is ${person.age} years old` );
}

function getEnglishTitle( person ) {
    return person.gender === 'male' ? 'Mr' : 'Ms';
}

function getHindiTitle( person ) {
    return person.gender === 'male' ? 'Kumar' : 'Kumari';
}

var john = {
    gender: 'male',
    name: 'John',
    age: 32
};

// person = john, getTitle = getEnglishTitle
printPerson( john, getEnglishTitle );

// person = john, getTitle = getHindiTitle
printPerson({
    gender: 'female',
    name: 'Jane',
    age: 28
}, getHindiTitle );
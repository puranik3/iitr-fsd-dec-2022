// back-tick - the key below the ESC key
const strPersons = `
[
    {
        "name": "John",
        "age": 32, 
        "city": "Bangalore"
    },
    {
        "name": "Jane",
        "age": 28,
        "city": "Bangalore"
    },
    {
        "name": "Mark",
        "age": 40,
        "city": "Hyderabad"
    },
    {
        "name": "Mary",
        "age": 44,
        "city": "Hyderabad"
    },
    {
        "name": "David",
        "age": 60,
        "city": "Delhi"
    }
]
`;

const persons = JSON.parse( strPersons );

console.log( strPersons instanceof Array ); // false
console.log( persons instanceof Array ); // true

persons[3].city = 'Mumbai';
console.log( persons );

const strPersonsUpdated = JSON.stringify( persons, null, 4 );
console.log( strPersonsUpdated );
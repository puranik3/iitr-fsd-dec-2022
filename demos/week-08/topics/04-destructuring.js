const days = [
    'Mon',
    'Tue',
    'Wed',
    'Thu',
    'Fri'
];

// const first = days[0], second = days[1], fifth = days[4], sixth = days[5];
const [ first, second, , , fifth, sixth ] = days;
console.log( first, second, fifth, sixth );

console.clear();

const john = {
    name: 'John',
    age: 32,
    address: {
        city: 'Bengaluru',
        state: 'Karnataka'
    },
    emails: [
        'john@gmail.com',
        'john@example.com'
    ]
};

// const age = john.age, city = john.address.city, state = john.address.state, secondaryEmail = john.emails[1];
const { age, address : { city, state }, emails : [ primaryEmail, secondaryEmail ] } = john;
console.log( age, city, state, primaryEmail, secondaryEmail );
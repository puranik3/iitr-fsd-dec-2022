const days = [
    'Mon',
    'Tue',
    'Wed',
    'Thu',
    'Fri'
];

// "rest" operator
const [ first, second, ...otherDays ] = days;
console.log( first, second, otherDays );

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

const {
    name,
    emails,
    ...restOfDetails
} = john;

console.log( restOfDetails );
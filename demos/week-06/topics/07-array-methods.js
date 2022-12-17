/**
 * Array iterator methods
 * 1. filter array based on a condition - filter()
 * 2. find AN object based on a condition - find()
 * 3. You want to process the items in an array - forEach()
 * 4. You want to generate another array, where every item has a corresponding item - map()
 */

const persons = [
    { name: 'John', age: 32, city: 'Bengaluru' },
    { name: 'Jane', age: 28, city: 'Hyderabad' },
    { name: 'Mark', age: 40, city: 'Noida' },
    { name: 'Mary', age: 44, city: 'Hyderabad' },
    { name: 'David', age: 60, city: 'Bengaluru' }
];

var hyderabadCitizens = persons.filter(
    function( person ) {
        return person.city === 'Hyderabad';
    }
);
console.log( hyderabadCitizens );

// We want the list of names of the persons
// [ 'John', 'Jane', 'Mark', 'Mary', 'David' ]
var personNames = persons.map(
    function( person ) {
        return person.name;
    }
);

console.log( personNames );

// names of people from Hyderabad
const hyderabadCitizensNames = persons
    .filter(
        function( person ) {
            return person.city === 'Hyderabad';
        }
    )
    .map(
        function( person ) {
            return person.name + ' Hyderabadi';
        }
    );
console.log( hyderabadCitizensNames );
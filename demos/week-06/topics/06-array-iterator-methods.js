// iterator methods
// they iterate through the items of the array
// they have similar set of arguments
// forEach, filter, find, map

const persons = [
    { name: 'John', age: 32, city: 'Bangalore' },
    { name: 'Jane', age: 28, city: 'Bangalore' },
    { name: 'Mark', age: 40, city: 'Hyderabad' },
    { name: 'Mary', age: 44, city: 'Hyderabad' },
    { name: 'David', age: 60, city: 'Delhi' }
];

// we want an array of names of persons
// [ 'John', 'Jane', 'Mark', 'Mary', 'David' ]
// map()
const personNames = persons.map(
    function( item ) {
        return item.name;
    }
);

console.log( personNames );

// get an array of all persons living in 'Hyderabad'
/**
[
    { name: 'Mark', age: 40, city: 'Hyderabad' },
    { name: 'Mary', age: 44, city: 'Hyderabad' },
] ->
[ 'Mark', 'Mary' ]
*/
const personsFromHyderabad = persons
                                .filter(
                                    function( item ) {
                                        return item.city === 'Hyderabad';
                                    }
                                ).map(
                                    function( item ) {
                                        return item.name;
                                    }
                                );

console.log( personsFromHyderabad );


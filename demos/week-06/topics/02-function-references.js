var john = {
    name: 'John',
    age: 32
};

console.log( john );

var jonathan = john; // john and jonathan refer to the SAME object in memory
console.log( jonathan );
console.log( jonathan.name );

var sum = function( x, y ) {
    return x + y;
};

console.log( sum( 12, 13 ) );

var add = sum; // sum and add refer to the SAME function in memory
console.log( add( 12, 13 ) ); // works!
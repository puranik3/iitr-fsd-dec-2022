function sum( x, y ) {
    return x + y;
}

// Both add and sum refer to the SAME function in memory
var add = sum;
var summation = add;

console.log( add( 12, 13 ) );
console.log( summation( 12, 13 ) );
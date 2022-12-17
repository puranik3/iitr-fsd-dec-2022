var res1 = sum1( 12, 13 ); // does not throw an error
console.log( res1 );

// function declaration syntax
// this function is created before any line of code executes
function sum1( x, y ) {
    var result = x + y;
    return result;
}

// var res2 = sum2( 12, 13 ); // throws as error
// console.log( res2 );

// The RHS is a "function expression" - when this line executes it creates a function
// A function expression is created "just-in-time"
var sum2 = function ( x, y ) {
    var result = x + y;
    return x + y;
};

var res2 = sum2( 12, 13 ); // throws as error
console.log( res2 );
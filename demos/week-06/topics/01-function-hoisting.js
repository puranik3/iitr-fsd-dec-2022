console.log( sum1( 12, 13 ) ); // no error

// "hoisted"
function sum1( x, y ) {
    return x + y;
}

// uncomment to get the error
// console.log( sum2( 12, 13 ) ); // error

// not "hoisted" - created Just-in-time
var sum2 = function( x, y ) {
    return x + y;
};
for( var i = 1; i < 5; i++ ) { // i DOES NOT have block scope
    ;
}

console.log( i ); // can be used outside block of declaration

for( let j = 1; j < 5; j++ ) { // j has block scope
    ;
}

// console.log( j ); // error
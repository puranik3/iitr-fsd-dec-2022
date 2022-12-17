// setTimeout requests the environment (Node/browser) to execute f. Node/browser executes the function after 3 seconds.
// setTimeout(
//     () => { // f
//         console.log( 'It is me! f! Node JS called me!' );
//     },
//     3000
// );

// console.log( 'end of script' );

function sum( x, y, callback ) {
    setTimeout(
        () => { // f
            // return x + y;
            callback( x + y );
        },
        3000
    );

    // return undefined;
}

sum( 12, 13, ( result ) => {
    console.log( 'result = ', result );
});

// document.addEventListener( 'click', function() {

// })
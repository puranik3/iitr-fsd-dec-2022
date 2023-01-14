const sum = ( x, y, callback ) => {
    setTimeout(
        () => { // this function is called by the browser, and the browser gets the return value
            // return x + y; // returning is useless
            const result = x + y;
            callback( result ); // pass on the result to the callback function
        },
        2000
    );
    
    // return undefined;
}

sum( 12, 13, ( result ) => {
    console.log( 'result = ', result );
});
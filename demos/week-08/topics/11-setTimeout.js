// NOT ES2015. This is old JS.
// You start an asynchronous task. The result is available at a later point in time. How do we process the result?
// In JS, most functions are non-blocking. So how do we get the result?!

// setTimeout request the environment (browser etc.) to execute f after given time
// setTimeout is non-blocking
setTimeout(
    () => { // f
        console.log( 'hello' );
    },
    2000
);

console.log( 'last line of script' );
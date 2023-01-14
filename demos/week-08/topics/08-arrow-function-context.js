// run this code in the browser console
const outer = function() {
    console.log( "outer this = ", this ); // window object when run in the browser (by default)

    // a function defined using old syntax has its OWN context
    const inner1 = function() {
        console.log( "inner1 this = ", this );
    };

    inner1();

    // Motivation: we would like to access the context of outer (outer this)
    // arrow function don't have their own "this". Their "this" refers to the enclosing scope's "this" (outer "this")
    const inner2 = () => {
        console.log( "inner2 this = ", this );
    };

    inner2();
};

// outer this -> { name: 'John' }, inner1 this -> window
outer.call( { name: 'John' } );
const outer = function() {
    console.log( 'outer: this =', this );

    const innerOld = function() {
        console.log( 'innerOld: this =', this );
    };

    innerOld();

    // arrow functions do not have their own context
    const innerNew = () => {
        console.log( 'innerNew: this =', this );
    };

    innerNew();
};

outer();
outer.call({
    name: 'John',
    age: 32
});
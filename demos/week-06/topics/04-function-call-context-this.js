// "this" -> function (call) context
console.log( this );

function foo() {
    console.log( 'within foo, this = ', this );
}

const john = {
    name: 'John',
    age: 32,
    celebrateBirthday( years ) {
        years = years || 1;
        console.log( 'within john.celebrateBirthday, this = ', this );
        this.age += years;
    }
};

john.celebrateBirthday(); // years = 1
console.log( john );

// calls john.celebrateBirthday
// you can set what the "this" should be
john.celebrateBirthday.call( john, 2 );
console.log( john );

const jane = {
    name: 'Jane',
    age: 28
};

john.celebrateBirthday.call( jane, 10 );
console.log( jane );
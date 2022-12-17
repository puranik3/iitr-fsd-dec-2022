/**
 * A special method that exists on functions - call
 * call() helps us borrow methods defined on some other object (jane is able celebrateBirthday using john object's help)
 */
var john = {
    name: 'John',
    age: 32,
    celebrateBirthday: function() {
        this.age++;    
    }
};

// this -> john
john.celebrateBirthday(); // age: 33
console.log( john );

// The point of using .call() is you can change what is the "this" within the function
john.celebrateBirthday.call( john ); // age: 34
console.log( john );

// jane does not have celebrateBirthday() method
const jane = {
    name: 'Jane',
    age: 28
};

// this -> jane
john.celebrateBirthday.call( jane );
console.log( jane );
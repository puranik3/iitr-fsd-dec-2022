/**
 * Every object has a prototype
 */
var personPrototype = {
    celebrateBirthday: function() {
        this.age++;
    }
};

var john = {
    name: 'John',
    age: 32,
    print: function() { // "own" method
        console.log( `${this.name} is ${this.age} years old` );
    },
    __proto__: personPrototype // john "inherits" the properties on the personPrototype
};

john.print();
john.celebrateBirthday();
console.log( john );

var jane = {
    name: 'Jane',
    age: 28,
    __proto__: personPrototype
};

jane.celebrateBirthday();
console.log( jane );
console.log( personPrototype.__proto__ ); // Object.prototype (this one does NOT have a prototype in turn)
console.log( personPrototype.__proto__.__proto__ ); // null
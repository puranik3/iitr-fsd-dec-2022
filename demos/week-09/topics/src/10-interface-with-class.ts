interface IPerson {
    firstName: string,
    lastName: string,
    age: number,
    celebrateBirthday: () => void
    getFullName: () => string
}

class Person implements IPerson {
    firstName: string;
    lastName: string;
    age: number;

    constructor( firstName : string, lastName: string, age : number, ) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }

    celebrateBirthday() {
        this.age++;
    }

    getFullName() {
        return `${this.firstName} ${this.lastName}`;
    }
}

const john = new Person( 'John', 'Doe', 32 );
john.celebrateBirthday();
console.log( john );
console.log( john.getFullName() );

const jane : IPerson = {
    firstName: 'Jane',
    lastName: 'Doe',
    age: 28,
    celebrateBirthday() {
        this.age++
    },
    getFullName() {
        return this.firstName + ' ' + this.lastName;
    }
}

export {}
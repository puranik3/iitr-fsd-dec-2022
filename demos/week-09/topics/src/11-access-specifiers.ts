interface IPerson {
    firstName: string,
    lastName: string,
    celebrateBirthday: () => void
    getFullName: () => string
}

class Person implements IPerson {
    firstName: string;
    lastName: string;
    private age: number;

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

    getAge() {
        return this.age;
    }
}

const john = new Person( 'John', 'Doe', 32 );
john.celebrateBirthday();
console.log( john );
console.log( john.getFullName() );

// john.age++; // private data member
// console.log( john.age );

export {}
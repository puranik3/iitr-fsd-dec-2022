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

    constructor( firstName : string, lastName: string, age : number ) {
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

class Employee extends Person {
    role : string;
    dept : string;

    constructor( firstName : string, lastName: string, age : number, role : string, dept : string ) {
        super( firstName, lastName, age );

        this.role = role;
        this.dept = dept;
    }

    promote() {
        this.role = `Senior ${this.role}`;
    }
}

const john = new Employee( 'John', 'Doe', 32, 'Web Developer', 'IT' );
john.celebrateBirthday();
john.promote();
console.log( john );
console.log( john.getFullName() );

// export {}
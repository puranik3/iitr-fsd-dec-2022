import { jane } from "./07-objects";

// 2 uses - declare type for an object, have a class implement a public facing API
interface IPerson {
    name: string,
    age: number,
    spouse?: IPerson,
    celebrateBirthday: () => number
};

let john : IPerson = {
    name: 'John',
    age: 32,
    celebrateBirthday() {
        ++this.age;
        return this.age;
    }
}

class Person implements IPerson {
    public name : string;
    public age : number;
    public spouse? : IPerson;

    // function / methods can have optional arguments towards the end
    constructor( name : string, age : number, spouse? : IPerson ) {
        this.name = name;
        this.age = age;
    }

    celebrateBirthday() {
        ++this.age;
        return this.age;
    }
}

const mark = new Person( 'Mark', 44 );
const mary = new Person( 'Mary', 40, mark );

mark.celebrateBirthday();
mary.celebrateBirthday();
console.log( mark, mary );

interface IEmployee extends IPerson {

}
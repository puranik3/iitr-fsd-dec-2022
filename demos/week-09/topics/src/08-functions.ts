import { Person, john, jane } from './07-objects';

// the return type is inferred
function sum1( x : number, y : number ) {
    return x + y;
}

function sum2( x : number, y : number ) : number {
    return x + y;
}

// sum1( 'Hello', 'world' );

type GetTitle = ( p : Person ) => string;

function greet( person : Person, getTitle : GetTitle ) {
    console.log( `Good morning ${getTitle( person )} ${person.name}` );
}

greet( john, ( person : Person ) => {
    return person.gender === 'female' ? 'Ms.' : 'Mr.';
});

const getFrenchTitle = ( person : Person ) => {
    return person.gender === 'female' ? 'Madame' : 'Monsieur';
}

greet( jane, getFrenchTitle );

export {}
import { NS } from './05-type-alias';

// let chequeAmounts : number[] = [ 10000, 20000 ];
let chequeAmounts : Array<number> = [ 10000, 20000 ];
// chequeAmounts.push( 'Thirty thousand' );

// let chequeAmounts2 : (number | string)[] = [ 10000, 20000 ];
let chequeAmounts2 : NS[] = [ 10000, 20000 ];
chequeAmounts2.push( 'Thirty thousand' );
// chequeAmounts2.push( true );

export {};
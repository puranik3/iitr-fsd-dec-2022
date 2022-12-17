type BinaryFunction = ( a : number, b : number ) => number;

// For functions, TS infers the return type
function sum( x : number, y : number ) /*: number*/ {
    return x + y;
}

// const multiply = ( x : number, y : number ) => x * y;

const multiply : BinaryFunction = ( x, y ) => x * y;
const distance : BinaryFunction = ( x, y ) => Math.sqrt( x * x + y * y );
const generateSerialNumbers = ( min : number, max : number ) => {
    const arr = [];

    for( let i = min; i <= max; i++ ) {
        arr.push( i );
    }

    return arr;
};

export {
    generateSerialNumbers
};
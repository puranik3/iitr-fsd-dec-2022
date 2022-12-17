// range( 2022, 2030 ) -> [ 2022, 2023, ..., 2030 ]
const range = ( min : number, max : number ) => {
    const result = [];

    for( let i = min; i <= max; i++ ) {
        result.push( i );
    }

    return result;
}

export {
    range
}
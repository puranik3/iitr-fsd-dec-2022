enum State {
    STARTED = 'STARTED',
    STOPPED = 'STOPPED'
}

interface Scores {
    player1: number,
    player2: number,
};

interface Velocity {
    dx: number,
    dy: number
};

const random = ( min : number, max : number ) => {
    // generate a random number in 0 - 900 (0 - max - min) and add 100 (min) to it
    return min + Math.floor( Math.random() * ( max - min + 1 ) )
};

export {
    State,
    Scores,
    Velocity,
    random
};
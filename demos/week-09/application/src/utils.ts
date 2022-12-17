interface IScores {
    player1: number,
    player2: number
};

interface IVelocity {
    dx: number,
    dy: number
};

enum State {
    STARTED,
    STOPPED 
}

const random = ( min : number, max : number ) => min + Math.floor( Math.random() * ( max - min + 1 ) );

export {
    IScores,
    IVelocity,
    State,
    random
};
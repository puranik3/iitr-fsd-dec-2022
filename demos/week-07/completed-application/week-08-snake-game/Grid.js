import { SCALE, APPLES } from './constants.js';

class Grid {
    constructor( game ) {
        this.game = game;
        this.apples = [];
        this.seed();
    }

    seed() {
        const { nbCellsX, nbCellsY, level } = this.game.getConfiguration();

        const nbApples = APPLES * ( level + 1 );

        for( let count = 0; count < nbApples; count++ ) {
            let x = Math.floor( Math.random() * nbCellsX );
            let y = Math.floor( Math.random() * nbCellsY );

            this.apples.push({
                x,
                y
            });
        }

        console.log( this.apples );
    }

    draw( context ) {
        const { width, height, cellSideLength } = this.game.getConfiguration();

        context.fillStyle = 'black';
        context.lineWidth = SCALE;

        // vertical lines
        for( let x = 0; x <= width; x += cellSideLength ) {
            context.beginPath();
            context.moveTo( x, 0 );
            context.lineTo( x, height );
            context.stroke();
        }
        
        // horizontal lines
        for( let y = 0; y <= height; y += cellSideLength ) {
            context.beginPath();
            context.moveTo( 0, y );
            context.lineTo( width, y );
            context.stroke();
        }

        // apples
        context.fillStyle = 'red';
        this.apples.forEach(cell => {
            context.fillRect( cellSideLength * cell.x, cellSideLength * cell.y, cellSideLength, cellSideLength );
        });
    }

    isApple( cell ) {
        return this.apples.find( el => el.x === cell.x && el.y === cell.y );
    }

    eat( cell ) {
        this.apples = this.apples.filter( el => el.x !== cell.x || el.y !== cell.y );
    }

    isDone() {
        return this.apples.length === 0;
    }
}

export default Grid;
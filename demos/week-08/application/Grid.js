import { APPLES } from './constants.js';

export default class Grid {
    constructor( game ) {
        this.game = game;
        this.apples = [];
        this.seed();
        console.log( this.apples );
    }

    seed() {
        const {
            nbCellsX,
            nbCellsY,
            level
        } = this.game.configuration;

        // generate required number of apples
        const nbApples = ( level + 1 ) * APPLES;
        for( let count = 0; count < nbApples; count++ ) {
            let x = Math.floor( Math.random() * nbCellsX );
            let y = Math.floor( Math.random() * nbCellsY );
            this.apples.push({
                // x: x
                x,
                y
            });
        }
    }

    paint( ctx ) {
        const {
            width,
            height,
            cellSize
        } = this.game.configuration;

        console.log( width, height, cellSize );

        ctx.fillStyle = 'black';
        ctx.lineWidth = 1;

        // vertical lines of the grid
        for( let x = 0; x <= width; x += cellSize ) {
            ctx.beginPath();
            ctx.moveTo( x, 0 );
            ctx.lineTo( x, height );
            ctx.stroke();
        }
        
        // horizontal lines of the grid
        for( let y = 0; y <= width; y += cellSize ) {
            ctx.beginPath();
            ctx.moveTo( 0, y );
            ctx.lineTo( width, y );
            ctx.stroke();
        }

        // draw the apples
        ctx.fillStyle = 'red';
        this.apples.forEach(
            apple => {
                ctx.fillRect(
                    cellSize * apple.x,
                    cellSize * apple.y,
                    cellSize,
                    cellSize
                )
            }
        )
    }

    isApple( c ) {
        return this.apples.find(
            cell => cell.x === c.x && cell.y === c.y
        );
    }

    eat( c ) {
        this.apples = this.apples.filter(
            cell => !( cell.x === c.x && cell.y === c.y )
        )
    }

    isDone() {
        return this.apples.length === 0;
    }
}
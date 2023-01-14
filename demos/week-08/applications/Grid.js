import { Cell } from './utils.js';

// boxes and apples!
export default class Grid {
    constructor( game ) {
        this.game = game;
        this.apples = [];
        this.seed();
    }

    seed() {
        const {
            level,
            nbCellsX,
            nbCellsY,
            applesMultiple
        } = this.game.configuration;

        const numApples = ( level + 1 ) * applesMultiple;

        for( let i = 0; i < numApples; i++ ) {
            const x = Math.floor( Math.random() * nbCellsX );
            const y = Math.floor( Math.random() * nbCellsY );
            this.apples.push( new Cell( x, y ) );
        }
    }

    isOutside( cell ) {
        const {
            nbCellsX,
            nbCellsY
        } = this.game.configuration;

        return ( cell.x < 0 || cell.x >= nbCellsX ) || ( cell.y < 0 || cell.y >= nbCellsY );
    }

    isApple( cell ) {
        return this.apples.some( a => a.x === cell.x && a.y === cell.y );
    }

    draw( ctx ) {
        const {
            width,
            height,
            cellSideLength
        } = this.game.configuration;

        ctx.fillStyle = 'black';
        ctx.lineWidth = 1;

        for( let x = 0; x <= width; x += cellSideLength ) {
            ctx.beginPath();
            ctx.moveTo( x, 0 );
            ctx.lineTo( x, height );
            ctx.stroke();
        }
        
        for( let y = 0; y <= height; y += cellSideLength ) {
            ctx.beginPath();
            ctx.moveTo( 0, y );
            ctx.lineTo( width, y );
            ctx.stroke();
        }

        ctx.fillStyle = 'red';
        this.apples.forEach(
            apple => {
                ctx.fillRect(
                    apple.x * cellSideLength,
                    apple.y * cellSideLength,
                    cellSideLength,
                    cellSideLength
                );
            }
        )
    }

    eat( cell ) {
        this.apples = this.apples.filter(
            apple => apple.x !== cell.x || apple.y !== cell.y
        );
    }

    noMoreApples() {
        return this.apples.length === 0;
    }
}
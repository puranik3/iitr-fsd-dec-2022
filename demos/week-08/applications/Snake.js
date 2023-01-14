import { Cell, DIRECTIONS } from "./utils.js";

export default class Snake {
    constructor( game ) {
        this.game = game;

        this.size = 3;
        this.direction = DIRECTIONS.RIGHT;

        this.head = new Cell( 1, 1 );
        this.tail = [];
    }

    move() {
        this.tail.push( this.head );
        this.head = this.getNext();

        if( this.tail.length <= this.size ) {
            return;
        }

        this.tail.shift();
    }

    getNext() {
        switch( this.direction ) {
            case DIRECTIONS.UP:
                return new Cell( this.head.x, this.head.y - 1 );
            case DIRECTIONS.DOWN:
                return new Cell( this.head.x, this.head.y + 1 );
            case DIRECTIONS.RIGHT:
                return new Cell( this.head.x + 1, this.head.y );
            case DIRECTIONS.LEFT:
                return new Cell( this.head.x - 1, this.head.y );
        }
    }

    getHead() {
        return this.head;
    }

    isTail( cell ) {
        return this.tail.some( t => t.x === cell.x && t.y === cell.y );
    }

    draw( ctx ) {
        const {
            cellSideLength
        } = this.game.configuration;

        const x = this.head.x * cellSideLength;
        const y = this.head.y * cellSideLength;
        
        ctx.fillStyle = '#111111';
        ctx.fillRect( x, y, cellSideLength, cellSideLength );

        ctx.fillStyle = '#333333';
        this.tail.forEach(
            tail => {
                ctx.fillRect( tail.x * cellSideLength, tail.y * cellSideLength, cellSideLength, cellSideLength );
            }
        );

        const size = cellSideLength / 10;
        const offset = cellSideLength / 3;
        
        // eyes
        switch (this.direction) {
            case DIRECTIONS.UP:
                ctx.beginPath();
                ctx.arc( x + offset, y + offset, size, 0, 2 * Math.PI );
                ctx.arc( x + 2 * offset, y + offset, size, 0, 2 * Math.PI );
                ctx.fillStyle = "white";
                ctx.fill();
                break;
            case DIRECTIONS.DOWN:
                ctx.beginPath();
                ctx.arc( x + offset, y + 2 * offset, size, 0, 2 * Math.PI );
                ctx.arc( x + 2 * offset, y + 2 * offset, size, 0, 2 * Math.PI );
                ctx.fillStyle = "white";
                ctx.fill();
                break;
            case DIRECTIONS.RIGHT:
                ctx.beginPath();
                ctx.arc( x + 2 * offset, y + offset, size, 0, 2 * Math.PI );
                ctx.arc( x + 2 * offset, y + 2 * offset, size, 0, 2 * Math.PI );
                ctx.fillStyle = "white";
                ctx.fill();
                break;
            case DIRECTIONS.LEFT:
                ctx.beginPath();
                ctx.arc( x + offset, y + offset, size, 0, 2 * Math.PI );
                ctx.arc( x + offset, y + 2 * offset, size, 0, 2 * Math.PI );
                ctx.fillStyle = "white";
                ctx.fill();
                break;
        }
    }

    setDirection( direction ) {
        const curDirection = this.direction;

        // no change in direction
        if( direction === curDirection ) {
            return;
        }

        // cannot do u-turn
        if(
            direction === DIRECTIONS.UP && curDirection === DIRECTIONS.DOWN
            ||
            direction === DIRECTIONS.DOWN && curDirection === DIRECTIONS.UP
            ||
            direction === DIRECTIONS.RIGHT && curDirection === DIRECTIONS.LEFT
            ||
            direction === DIRECTIONS.LEFT && curDirection === DIRECTIONS.RIGHT
        ) {
            return;
        }

        this.direction = direction;
    }

    grow() {
        this.size += 3;
    }
}
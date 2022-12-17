import {
    WIDTH,
    HEIGHT,
    CELLSIZE,
    SCALE,
    SPEED,
    MAX_LEVEL,
    APPLES,
    COLORS
} from './constants.js';

import Grid from './Grid.js';
import Worm from './Worm.js';

class Game {
    constructor() {
        this.canvas = document.createElement( 'canvas' );
        document.body.appendChild( this.canvas );

        // physical size
        this.canvas.style.width = `${WIDTH * CELLSIZE} px`;
        this.canvas.style.height = `${HEIGHT * CELLSIZE} px`;

        // logical size
        this.canvas.width = WIDTH * CELLSIZE * SCALE;
        this.canvas.height = HEIGHT * CELLSIZE * SCALE;

        this.configuration = {
            level: 0,
            speed: SPEED,
            width: this.canvas.width,
            height: this.canvas.height,
            nbCellsX: WIDTH,
            nbCellsY: HEIGHT,
            cellSideLength: CELLSIZE * SCALE,
            color: COLORS[0]
        };

        this.score = 0;

        this.grid = new Grid( this );
        this.worm = new Worm( this );

        window.addEventListener( 'keydown', this.onKeyDown );
    }

    getConfiguration() {
        return this.configuration;
    }

    start() {
        this.running = true;
        this.nextMove = 0;
        requestAnimationFrame( this.loop )
    }

    stop() {
        this.running = false;
    }

    loop = ( time ) => {
        console.log( 'time = ', time );

        if( this.running ) {
            requestAnimationFrame( this.loop );

            if( time >= this.nextMove ) {
                console.log( 'refresh the game' );
                this.nextMove = time + this.configuration.speed;


                this.worm.move();

                switch( this.checkState() ) {
                    case -1:
                        this.gameOver();
                        break;
                    case 1:
                        this.worm.grow();
                        this.score += 100;
                        this.grid.eat( this.worm.getHead() );

                        if( this.grid.isDone() ) {
                            this.levelUp();
                        }
                        break;
                    default:
                        this.paint();
                }
            }
        }
    }

    levelUp() {
        this.score += 1000;
        this.configuration.level++;
        if (this.configuration.level < MAX_LEVEL) {
            this.configuration.speed -= 7;
            this.configuration.color = COLORS[this.configuration.level];
            this.grid.seed();
        } else {
            this.win();
        }
    }

    win() {
        alert( 'Great job!' );
        this.stop();
    }

    gameOver() {
        alert( 'Game over. Your score is ' + this.score );
        this.stop();
    }

    checkState() {
        const cell = this.worm.getHead();

        if( this.isOutside( cell ) || this.worm.isWorm( cell ) ) {
            return -1; // game over 
        }

        if( this.grid.isApple( cell ) ) { // snake head is over an apple (worm ate an apple)
            return 1;
        }

        return 0;
    }

    isOutside( cell ) {
        const { nbCellsX, nbCellsY } = this.configuration;

        return cell.x < 0 || cell.x >= nbCellsX || cell.y < 0 || cell.y >= nbCellsY;
    }

    paint() {
        const { width, height, color } = this.configuration;
        const context = this.canvas.getContext( '2d' );

        // background
        context.fillStyle = color;
        context.fillRect( 0, 0, width, height );

        this.grid.draw( context );
        this.worm.draw( context );
    }

    onKeyDown = ( event ) => {
        console.log( this ); // change to normal function syntax -> this will be undefined

        switch( event.key ) {
            case 'ArrowUp':
                event.preventDefault();
                this.worm.setDirection( 'Up' );
                break;
            case 'ArrowDown':
                event.preventDefault();
                this.worm.setDirection( 'Down' );
                break;
            case 'ArrowLeft':
                event.preventDefault();
                this.worm.setDirection( 'Left' );
                break;
            case 'ArrowRight':
                event.preventDefault();
                this.worm.setDirection( 'Right' );
                break;
        }
    }
}

export default Game;
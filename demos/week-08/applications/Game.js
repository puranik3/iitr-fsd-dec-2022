import * as Config from './constants.js';
import Grid from './Grid.js';
import Snake from './Snake.js';
import { DIRECTIONS } from './utils.js';

export default class Game {
    constructor() {
        this.canvas = document.createElement( 'canvas' );
        document.body.appendChild( this.canvas );

        this.canvas.width = Config.WIDTH * Config.CELLSIZE;
        this.canvas.height = Config.HEIGHT * Config.CELLSIZE;

        this.canvas.style.width = Config.WIDTH * Config.CELLSIZE + 'px';
        this.canvas.style.height = Config.HEIGHT * Config.CELLSIZE + 'px';

        this.configuration = {
            level: 0,
            applesMultiple: Config.APPLES,
            speed: Config.SPEED,
            width: this.canvas.width,
            height: this.canvas.height,
            nbCellsX: Config.WIDTH,
            nbCellsY: Config.HEIGHT,
            cellSideLength: Config.CELLSIZE,
            color: Config.COLORS[0]
        };

        this.requestAnimationFrameId = 0;
        this.nextMove = 0;
        this.score = 0;

        // event handling
        window.addEventListener( 'keydown', this.onKeyDown );

        this.grid = new Grid( this ); // pass on the game object to the Grid object
        this.snake = new Snake( this ); // .. and to the Snake object

        this.addToScore( 0 );
    }

    start() {
        this.running = true;
        this.requestAnimationFrameId = requestAnimationFrame( this.loop );
    }

    stop() {
        this.running = false;
    }

    loop = ( time ) => { // we need arrow function syntax here to bind the "this" to the game object
        if( this.running ) {
            // console.log( 'loop' );
            // console.log( this ); // "this" is NOT the Game object
            this.requestAnimationFrameId = requestAnimationFrame( this.loop );
            
            if( time >= this.nextMove ) {
                console.log( 'refresh the game' );
                this.nextMove = time + this.configuration.speed;

                // MOVE the Snake
                this.snake.move();

                switch( this.checkState() ) {
                    case -1: // game over
                        this.gameOver();
                        break;
                    case 1: // went over apple and wins points
                        this.snake.grow();
                        this.addToScore( 100 );
                        document.getElementById( 'score' ).textContent = this.score;
                        this.grid.eat( this.snake.getHead() );

                        // is level completed?
                        if( this.isLevelCompleted() ) {
                            this.levelUp();
                        }
                    default:
                        this.paint();
                }
            }
        }
    }

    // returns...
    // -1 if game is over
    // 1 if an apple is consumed
    // 0 if nothing special happened
    checkState() {
        const head = this.snake.getHead();

        if( this.grid.isOutside( head ) || this.snake.isTail( head ) ) {
            return -1;
        }

        if( this.grid.isApple( head ) ) {
            return 1;
        }

        return 0;
    }

    gameOver() {
        alert( 'Game over' );
        this.stop();
        cancelAnimationFrame( this.requestAnimationFrameId );
    }

    paint() {
        const {
            color,
            width,
            height
        } = this.configuration;

        const ctx = this.canvas.getContext( '2d' );

        // base rectangle for the game
        ctx.fillStyle = color;
        ctx.fillRect( 0, 0, width, height );

        this.grid.draw( ctx );
        this.snake.draw( ctx );
    }

    onKeyDown = ( event ) => {
        switch( event.key ) {
            case 'ArrowUp':
                event.preventDefault();
                this.snake.setDirection( DIRECTIONS.UP );
                break;
            case 'ArrowDown':
                event.preventDefault();
                this.snake.setDirection( DIRECTIONS.DOWN );
                break;
            case 'ArrowRight':
                event.preventDefault();
                this.snake.setDirection( DIRECTIONS.RIGHT );
                break;
            case 'ArrowLeft':
                event.preventDefault();
                this.snake.setDirection( DIRECTIONS.LEFT );
                break;
        }
    }

    isLevelCompleted() {
        return this.grid.noMoreApples();
    }

    addToScore( score ) {
        this.score += score;
        document.getElementById( 'score' ).innerText = this.score;
        console.log( this.score );
    }

    levelUp() {
        this.addToScore( 1000 );
        
        this.configuration.level++;

        // if level 9 was completed
        if( this.configuration.level >= Config.MAX_LEVEL ) {
            this.gameWon();
            this.stop();
            return;
        }

        this.configuration.speed -= 7;
        this.configuration.color = Config.COLORS[this.configuration.level];
        this.grid.seed();
    }

    gameWon() {
        alert( 'You are the boss! No more levels to conquer' );
    }
}
import Grid from './Grid.js';
import Snake from './Snake.js';
import * as Constants from './constants.js';

export default class Game {
    constructor() {
        this.canvas = document.createElement( 'canvas' );
        document.body.appendChild( this.canvas );

        // setting the "CSS" width and height
        this.canvas.style.width = Constants.WIDTH * Constants.CELLSIZE + 'px';
        this.canvas.style.height = Constants.HEIGHT * Constants.CELLSIZE + 'px';

        // setting the "attributes" width and height
        this.canvas.width = Constants.WIDTH * Constants.CELLSIZE;
        this.canvas.height = Constants.HEIGHT * Constants.CELLSIZE;

        this.configuration = {
            level: 0,
            speed: Constants.SPEED,
            width: Constants.WIDTH * Constants.CELLSIZE,
            height: Constants.HEIGHT * Constants.CELLSIZE,
            nbCellsX: Constants.WIDTH,
            nbCellsY: Constants.HEIGHT,
            cellSize: Constants.CELLSIZE,
            color: Constants.COLORS[0]
        };

        this.snake = new Snake( this );
        this.grid = new Grid( this );

        this.running = false;
        this.nextMove = 0;
        this.score = 0;

        window.addEventListener( 'keydown', this.onKeyDown );
    }

    start() {
        this.running = true;
        requestAnimationFrame( this.loop );
    }

    stop() {
        this.running = false;
    }

    // loop gets executed every 16.66 ms (assuming display refreshes 60 times/seconds)
    loop = ( time ) => {
        if( this.running ) {
            requestAnimationFrame( this.loop );
            
            // we make sure to execute this block only at the game speed (once every 200 ms to start with)
            if( time >= this.nextMove ) {
                this.nextMove = time + this.configuration.speed;
                
                this.snake.move();

                switch( this.checkState() ) {
                    case -1:
                        this.stop();
                        alert( 'Game over' );
                        break;
                    case 1:
                        this.score += 100;
                        this.grid.eat( this.snake.head );
                        this.snake.grow();
                        
                        // all apples eaten?
                        if( this.grid.isDone() ) {
                            this.levelUp();
                        }
                        
                        this.showScore();
                    default:
                        this.paint();
                }

            }
        }
    }

    levelUp() {
        this.configuration.level++;
        this.score += 1000;

        if( this.configuration.level > Constants.MAX_LEVEL ) {
            this.stop();
            alert( 'Game won! You are the boss!!' );
        }

        this.configuration.speed -= 7;
        this.configuration.color = Constants.COLORS[this.configuration.level];
        this.grid.seed();
    }

    showScore() {
        document.querySelector( '#score' ).innerHTML = this.score;
    }

    checkState() {
        const cell = this.snake.head;

        if( this.isOutside( cell ) || this.snake.ateItself() ) {
            return -1;
        }

        if( this.grid.isApple( this.snake.head ) ) {
            return 1;
        }

        return 0;
    }

    isOutside( cell ) {
        const {
            nbCellsX,
            nbCellsY
        } = this.configuration;

        return cell.x < 0 || cell.x >= nbCellsX || cell.y < 0 || cell.y >= nbCellsY;
    }

    paint() {
        const {
            width,
            height,
            color
        } = this.configuration;

        const ctx = this.canvas.getContext( '2d' );

        ctx.fillStyle = color;
        ctx.fillRect( 0, 0, width, height );

        this.grid.paint( ctx );
        this.snake.paint( ctx );
    }

    onKeyDown = ( event ) => {
        console.log( event );
        event.preventDefault();

        switch( event.key ) {
            case 'ArrowUp':
                this.snake.setDirection( 'Up' );
                break;
            case 'ArrowDown':
                this.snake.setDirection( 'Down' );
                break;
            case 'ArrowRight':
                this.snake.setDirection( 'Right' );
                break;
            case 'ArrowLeft':
                this.snake.setDirection( 'Left' );
                break;
        }
    }
}
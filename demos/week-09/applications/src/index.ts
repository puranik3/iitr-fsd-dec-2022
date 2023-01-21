import {
    State,
    Scores,
    Velocity,
    random
} from './utils.js';

// DOM nodes
const board = document.querySelector( '.board' ) as HTMLElement;
const ball = document.querySelector( '.ball' ) as HTMLElement;
const paddle1 = document.querySelector( '.paddle_1' ) as HTMLElement;
const paddle2 = document.querySelector( '.paddle_2' ) as HTMLElement;
const score1 = document.querySelector( '.player_1_score' ) as HTMLElement;
const score2 = document.querySelector( '.player_2_score' ) as HTMLElement;
const message = document.querySelector( '.message' ) as HTMLElement;

// where the board is
const boardCoord = board.getBoundingClientRect();

// where ball is currently
let ballCoord = ball.getBoundingClientRect();

// where ball is initially
const initialBallCoord = ballCoord;

// where paddles are
let paddle1Coord = paddle1.getBoundingClientRect();
let paddle2Coord = paddle2.getBoundingClientRect();

let paddleHeight = paddle1Coord.height;

// ball's top-left in inline CSS
let ballTop = ball.style.top;
let ballLeft = ball.style.left;

class Game {
    // fraction of the screen height that the paddle moves in one user action
    private readonly SPEED = 0.085;

    private state = State.STOPPED;
    private scores = {
        player1: 0,
        player2: 0
    } as Scores; // type-assertion (type casting)

    start() {
        console.log( 'Game started!', this.state );
        this.bindListeners();
    }

    reset() {
        this.state = State.STOPPED;

        ball.style.top = ballTop;
        ball.style.left = ballLeft;

        ballCoord = initialBallCoord;
        message.textContent = 'Press Enter to start';
    }

    bindListeners() {
        document.addEventListener( 'keydown', event => {
            if( event.key === 'Enter' ) {
                if( this.state === State.STARTED ) {
                    return;
                }

                this.state = State.STARTED;

                message.textContent = 'Game on!';

                requestAnimationFrame(() => {
                    let velocity = this.getVelocity();
                    this.moveBall( velocity );
                });
            }

            // paddle actions
            if( this.state === State.STARTED ) {
                if( event.key === 'w' ) {
                    paddle1.style.top = Math.max( ( paddle1Coord.top - window.innerHeight * this.SPEED ), boardCoord.top ) + 'px';
                    paddle1Coord = paddle1.getBoundingClientRect();
                }

                if( event.key === 's' ) {
                    paddle1.style.top = Math.min( ( paddle1Coord.top + window.innerHeight * this.SPEED ), boardCoord.bottom - paddleHeight ) + 'px';
                    paddle1Coord = paddle1.getBoundingClientRect();
                }
                
                if( event.key === 'ArrowUp' ) {
                    paddle2.style.top = Math.max( ( paddle2Coord.top - window.innerHeight * this.SPEED ), boardCoord.top ) + 'px';
                    paddle2Coord = paddle2.getBoundingClientRect();
                }
                
                if( event.key === 'ArrowDown' ) {
                    paddle2.style.top = Math.min( ( paddle2Coord.top + window.innerHeight * this.SPEED ), boardCoord.bottom - paddleHeight ) + 'px';
                    paddle2Coord = paddle2.getBoundingClientRect();
                }
            }
        });
    }

    getVelocity() {
        return {
            dx: random( 3, 8 ) * ( random( 0, 1 ) ? 1 : -1 ),
            dy: random( 3, 8 ) * ( random( 0, 1 ) ? 1 : -1 ),
        } as Velocity;
    }

    moveBall( velocity : Velocity ) {
        // if the ball hits the board top/bottom boundaries, we bounce it off...
        if(
            ballCoord.top <= boardCoord.top
            ||
            ballCoord.bottom >= boardCoord.bottom
        ) {
            velocity.dy = -velocity.dy;
        }

        // if the ball hits the paddle, we need tp bounce it off
        if(
            ballCoord.left <= paddle1Coord.right
            &&
            ballCoord.top >= paddle1Coord.top
            &&
            ballCoord.bottom <= paddle1Coord.bottom
            ||
            ballCoord.right >= paddle2Coord.left
            &&
            ballCoord.top >= paddle2Coord.top
            &&
            ballCoord.bottom <= paddle2Coord.bottom
        ) {
            velocity.dx = -velocity.dx;
        }

        // has player1 won?
        if( ballCoord.right > boardCoord.right ) {
            ++this.scores.player1;
            score1.textContent = '' + this.scores.player1;
            this.reset();
            return;
        }
        
        // has player2 won?
        if( ballCoord.left < boardCoord.left ) {
            ++this.scores.player2;
            score2.textContent = '' + this.scores.player2;
            this.reset();
            return;
        }

        ball.style.left = ballCoord.left + velocity.dx + 'px';
        ball.style.top = ballCoord.top + velocity.dy + 'px';

        ballCoord = ball.getBoundingClientRect();

        requestAnimationFrame(() => {
            this.moveBall( velocity );
        });
    }
}

export default Game;
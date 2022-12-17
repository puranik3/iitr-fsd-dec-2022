import { random, State } from './utils.js';
const board = document.querySelector('.board');
const ball = document.querySelector('.ball');
const paddle_1 = document.querySelector('.paddle_1');
const paddle_2 = document.querySelector('.paddle_2');
const score_1 = document.querySelector('.player_1_score');
const score_2 = document.querySelector('.player_2_score');
const message = document.querySelector('.message');
let board_coord = board.getBoundingClientRect();
// center position (to reset ball position at the end of a rally)
const initial_ball_coord = ball.getBoundingClientRect();
// we shall keep updating this variable (current position of the ball)
let ball_coord = initial_ball_coord;
let ball_top = ball.style.top;
let ball_left = ball.style.left;
// we shall keep updating these variable (current position of the paddles)
let paddle_1_coord = paddle_1.getBoundingClientRect();
let paddle_2_coord = paddle_2.getBoundingClientRect();
const paddle_height = paddle_1_coord.height;
class Game {
    constructor() {
        // the board is 85% of the height of the page
        // we will move the paddle by a fraction of 0.085 in every step. That is, in 10 steps, the paddle can be moved from one end to the other
        this.SPEED = 0.085;
        this.scores = {
            player1: 0,
            player2: 0
        };
        this.state = State.STOPPED;
    }
    start() {
        this.bindListeners();
    }
    reset() {
        this.state = State.STOPPED;
        ball_coord = initial_ball_coord;
        ball.style.left = ball_left;
        ball.style.top = ball_top;
        message.textContent = 'Press Enter to play Ping Pong';
    }
    getVelocity() {
        const xDir = random(0, 1) === 0 ? 1 : -1;
        const yDir = random(0, 1) === 0 ? 1 : -1;
        const velocity = {
            dx: random(3, 8) * xDir,
            dy: random(3, 8) * yDir
        };
        return velocity;
    }
    bindListeners() {
        document.addEventListener('keydown', (event) => {
            if (event.key === 'Enter') {
                this.state = State.STARTED;
                message.textContent = 'Game on';
                requestAnimationFrame(() => {
                    let velocity = this.getVelocity();
                    console.log(velocity);
                    this.moveBall(velocity);
                });
            }
            if (this.state === State.STARTED) {
                if (event.key === 'w') {
                    paddle_1.style.top = Math.max(paddle_1_coord.top - window.innerHeight * this.SPEED, board_coord.top) + 'px';
                    paddle_1_coord = paddle_1.getBoundingClientRect();
                }
                if (event.key === 's') {
                    paddle_1.style.top = Math.min(paddle_1_coord.top + window.innerHeight * this.SPEED, board_coord.bottom - paddle_height) + 'px';
                    paddle_1_coord = paddle_1.getBoundingClientRect();
                }
                if (event.key === 'ArrowUp') {
                    paddle_2.style.top = Math.max(paddle_2_coord.top - window.innerHeight * this.SPEED, board_coord.top) + 'px';
                    paddle_2_coord = paddle_2.getBoundingClientRect();
                }
                if (event.key === 'ArrowDown') {
                    paddle_2.style.top = Math.min(paddle_2_coord.top + window.innerHeight * this.SPEED, board_coord.bottom - paddle_height) + 'px';
                    paddle_2_coord = paddle_2.getBoundingClientRect();
                }
            }
        });
    }
    moveBall(velocity) {
        if (this.state === State.STARTED) {
            // the ball has hit the top / bottom edge of the board
            if (ball_coord.top <= board_coord.top
                ||
                    ball_coord.bottom >= board_coord.bottom) {
                velocity.dy = -velocity.dy;
            }
            // when the ball hits the paddle we need to bounce the ball in the x direction
            if (ball_coord.left <= paddle_1_coord.right &&
                ball_coord.top >= paddle_1_coord.top &&
                ball_coord.bottom <= paddle_1_coord.bottom
                ||
                    ball_coord.right >= paddle_2_coord.left &&
                        ball_coord.top >= paddle_2_coord.top &&
                        ball_coord.bottom <= paddle_2_coord.bottom) {
                // EXERCISE: Again generate a random velocity instead of simply changing the direction of velocity x
                velocity.dx = -velocity.dx;
            }
            // the ball crosses the left edge (then player_2 wins)
            if (ball_coord.left <= board_coord.left) {
                this.scores.player2++;
                score_2.textContent = '' + this.scores.player2;
                this.reset();
            }
            // the ball crosses the right edge (then player_1 wins)
            if (ball_coord.right >= board_coord.right) {
                this.scores.player1++;
                score_1.textContent = '' + this.scores.player1;
                this.reset();
            }
            ball.style.left = ball_coord.left + velocity.dx + 'px';
            ball.style.top = ball_coord.top + velocity.dy + 'px';
            ball_coord = ball.getBoundingClientRect();
            requestAnimationFrame(() => {
                this.moveBall(velocity);
            });
        }
    }
}
const game = new Game();
game.start();

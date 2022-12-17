const cells = document.querySelectorAll( '.game__cell' );
const statusEl = document.querySelector( '.game__status' );
const restartBtn = document.querySelector( '.game__restart' );

let gameState = [
    '', '', '',
    '', '', '',
    '', '', ''
];
let currentPlayer;

const winningStates = [
    [ 0, 1, 2 ],
    [ 3, 4, 5 ],
    [ 6, 7, 8 ],
    [ 0, 3, 6 ],
    [ 1, 4, 7 ],
    [ 2, 5, 8 ],
    [ 0, 4, 8 ],
    [ 2, 4, 6 ]
];

let gameOn = false;

function changePlayer() {
    currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
}

function checkGameOver() {
    for( let i = 0; i < winningStates.length; i++ ) {
        const winningState = winningStates[i]; // [ 3, 4, 5 ]

        const x = winningState[0]; // 3
        const y = winningState[1]; // 4
        const z = winningState[2]; // 5

        if( ( gameState[x] !== '' ) && ( gameState[x] === gameState[y] && gameState[y] === gameState[z] ) ) {
            statusEl.textContent = 'Player ' + currentPlayer + ' has won';
            gameOn = false;
            return;
        }
    }

    if( gameState.includes( '' ) === false ) {
        statusEl.textContent = 'Game ended in a draw';
        gameOn = false;
    }
}

function onCellClick() {
    if( gameOn === true ) {
        console.log( this ); // element on which the event ('click') occured
        const cell = this;
        
        const idx = cell.getAttribute( 'data-cell-index' );

        if( gameState[idx] !== '' ) {
            alert( 'Invalid move' );
            return;
        }

        gameState[idx] = currentPlayer;
        cell.textContent = currentPlayer;

        checkGameOver();

        changePlayer();
    }
}

function restartGame() {
    gameOn = true;
    currentPlayer = 'X';

    gameState = [
        '', '', '',
        '', '', '',
        '', '', ''
    ];
 
    cells.forEach(
        function( cell ) {
            cell.textContent = '';
        }
    );
}

cells.forEach(
    function( cell ) {
        cell.addEventListener( 'click', onCellClick )
    }
);

restartBtn.addEventListener( 'click', restartGame );
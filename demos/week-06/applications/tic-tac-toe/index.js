// We need to do something when the grid cells are clicked
var gridCells = document.querySelectorAll( '.grid > *' );
var nextPlayerEl = document.getElementById( 'next-player' );
var resetGameBtn = document.getElementById( 'reset-game' );

// "state" of the app
var gameOver = false;
var nextPlayer = 'X';
var cellStates = [
    '', '', '',
    '', '', '',
    '', '', ''
];
var winningStates = [
    [ 0, 1, 2 ],
    [ 3, 4, 5 ],
    [ 6, 7, 8 ],
    [ 0, 3, 6 ],
    [ 1, 4, 7 ],
    [ 2, 5, 8 ],
    [ 0, 4, 8 ],
    [ 2, 4, 6 ],
];

function resetGame() {
    gameOver = false;
    nextPlayer = 'X';
    cellStates = [
        '', '', '',
        '', '', '',
        '', '', ''
    ];

    gridCells.forEach(
        function( gridCell ) {
            gridCell.textContent = '';
        }
    );

    nextPlayerEl.textContent = nextPlayer;
}

resetGameBtn.addEventListener( 'click', resetGame );

// set next player
function setNextPlayer() {
    if( nextPlayer === 'X' ) {
        nextPlayer = 'O';
    } else {
        nextPlayer = 'X';
    }

    nextPlayerEl.textContent = nextPlayer;
}

function isGameOver() {
    for( var i = 0; i < winningStates.length; i++ ) {
        var winningState = winningStates[i];
        
        if(
            cellStates[winningState[0]] !== '' &&
            cellStates[winningState[0]] === cellStates[winningState[1]] &&
            cellStates[winningState[1]] === cellStates[winningState[2]] 
        ) {
            alert( 'Game over' );
            gameOver = true;
            return true;
        }
    }

    return false;
}

gridCells.forEach(
    function( gridCell ) {
        gridCell.addEventListener( 'click', function() {
            var index = gridCell.getAttribute( 'data-index' );
            
            // game is already over
            if( gameOver ) {
                alert( 'This game is over Start it again.' );
                return;
            }

            // check for invalid move
            if( cellStates[index] !== '' ) {
                alert( 'This cell has already been filled. Select some other cell.' );
                return;
            }
            
            gridCell.textContent = nextPlayer;

            cellStates[index] = nextPlayer;
            
            setNextPlayer( index );

            isGameOver();
        });
    }
)
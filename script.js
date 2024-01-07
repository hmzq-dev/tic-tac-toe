function createCell(position, char="-") {
    const getPosition = () => position;
    const getChar = () => char;

    return { getPosition, getChar };
}


function createGameBoard() {
    const boardArray = [
        [createCell([0, 0]), createCell([0, 1]), createCell([0, 2])],
        [createCell([1, 0]), createCell([1, 1]), createCell([1, 2])],
        [createCell([2, 0]), createCell([2, 1]), createCell([2, 2])]
    ];

    const getBoardArray = () => boardArray;

    const updateCell = (position, character) => {

    }

    return { getBoardArray, updateCell };
}


const displayController = (function() {
    const display = (boardArray) => {
        for (let row of boardArray) {
            let rowCharacters = "";

            for (let cell of row) {
                rowCharacters += cell.getChar();
            }
            console.log(rowCharacters);
        }
    }

    return { display };
})();


const logicController = (function() {
    let currentTurn = "";
    let playAgain = false;
    let gameBoard;

    const playRound = () => {
        displayController.display(gameBoard.getBoardArray());
    }

    const getWinner = () => {

    }

    const playGame = () => {
        gameBoard = createGameBoard();
        playRound();
    }

    return { playGame };
})();


logicController.playGame();

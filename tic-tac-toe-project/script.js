/**
 * Contains the array representation of the game board, creates a new game board, and clears the game board.
 */
const gameBoard = (function () {
  // DOM elements
  const board = document.querySelector(".board");

  // Function that creates square div elements for board
  function createBoard() {
    for (let i = 0; i < 9; i++) {
      const square = document.createElement("div");
      square.classList.add("square");
      square.setAttribute("id", `${i}`);
      board.appendChild(square);
    }
  }

  // Function that clears the board
  function clearBoard() {
    for (let i = 0; i < 9; i++) {
      const square = document.getElementById(`${i}`);
      square.remove();
    }
  }

  return {
    createBoard,
    clearBoard,
  };
})();

/**
 * Player logic for the game, where the game board and board will reflect each player's turn.
 */
const playerLogic = (function () {
  // Function that marks the players choice on the game board and board
  function humanTurn(squareId, board) {
    let square = document.getElementById(squareId);
    square.textContent = "X";
    board[squareId] = "X";
  }

  // Function that randomly chooses an undefined square on the game board board
  // If there are no more undefined squares, break from loop and not take turn
  function computerTurn(board) {
    let squareId = Math.floor(Math.random() * 9);
    let count = 0;

    // If squareId is defined, search until square is undefined, and break if count > 9
    while (board[squareId] !== undefined) {
      if (count > 9) {
        break;
      }
      squareId = Math.floor(Math.random() * 9);
      count++;
    }

    let square = document.getElementById(squareId);
    square.textContent = "O";
    board[squareId] = "O";
  }

  return {
    humanTurn,
    computerTurn,
  };
})();

/**
 * TODO: implement gameLogic
 */
const gameLogic = (function () {
  let win = false;

  // TODO: implement checkHorizontal
  function checkHorizontal(board) {

  }

  // TODO: implement checkVertical
  function checkVertical(board) {

  }

  // TODO: implement checkDiagonal
  function checkDiagonal(board) {

  }

  // TODO: implement checkTie
  function checkTie(count) {

  }

  // Function that checks for a win
  function checkWin(board) {
    checkHorizontal(board);
    checkVertical(board);
    checkDiagonal(board);

    if (win) {
      alert("WIN");
    }
  }

  return {
    checkTie,
    checkWin,
  };
})();

/**
 * Implement gameBoard, playerLogic, and gameLogic.
 */
const game = (function () {
  // Function that starts a new game by creating a new board array, and for each square, add an event listener that 
  // on click, takes a players turn, then the computer's turn. For each click, check if there is a win or a tie
  function start() {
    let board = [];
    gameBoard.createBoard();

    for (let i = 0; i < 9; i++) {
      let square = document.getElementById(i);

      square.addEventListener("click", () => {
        playerLogic.humanTurn(i, board);
        playerLogic.computerTurn(board);

        console.log(board);
      });
    }
  }

  // Function that restarts the game
  function restart() {
    gameBoard.clearBoard();
  }

  return {
    start,
    restart,
  };
})();

// Implement functionality to start and restart buttons
let startButton = document.getElementById("start-button");
startButton.addEventListener("click", () => game.start());

let restartButton = document.getElementById("restart-button");
restartButton.addEventListener("click", () => game.restart());

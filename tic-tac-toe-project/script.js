/**
 * Contains the array representation of the game board, creates a new game board, and clears the game board.
 */
const gameBoard = (function () {
  const boardArray = []; // Array that will hold the state of the game

  // DOM elements
  const board = document.querySelector(".board");

  // Function that creates square div elements for board and attaches an event listenter to each square
  function createBoard() {
    for (let i = 0; i < 9; i++) {
      const square = document.createElement("div");

      square.classList.add("square");
      square.setAttribute("id", `${i}`);

      // TODO: add functionality per click
      square.addEventListener("click", () => {
        square.textContent = "X";
        console.log(`Clicked square ${i}`);
      });

      board.appendChild(square);
    }
  }

  // Function that clears the board and boardArray
  function clearBoard() {
    for (let i = 0; i < 9; i++) {
      const square = document.getElementById(`${i}`);
      square.remove();
    }

    boardArray = [];
  }

  return {
    boardArray,
    createBoard,
    clearBoard,
  };
})();

/**
 * TODO: implement game logic
 */
const gameLogic = (function(boardArray) {

  return {};
})(gameBoard.boardArray);

/**
 * TODO: implement the game
 */
const game = (function() {
  // DOM elements
  const startButton = document.getElementById("start-button");
  const restartButton = document.getElementById("restart-button");

  // Add functionality to start and stop buttons
  startButton.addEventListener("click", () => gameBoard.createBoard());
  restartButton.addEventListener("click", () => gameBoard.clearBoard());
})();
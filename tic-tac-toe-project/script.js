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
 * Checks for a win or tie
 */
const gameLogic = (function () {
  let win = false;
  let turnCount = 0;

  // Function that checks for row wins
  function checkRows(board) {
    // Check first row
    if(board[0] !== undefined && board[1] !== undefined && board[2] !== undefined) {
      if(board[0] === board[1] && board[1] === board[2]) {
        win = true;
      }
    }

    // Check second row
    if(board[3] !== undefined && board[4] !== undefined && board[5] !== undefined) {
      if(board[3] === board[4] && board[4] === board[5]) {
        win = true;
      }
    }

    // Check third row
    if(board[6] !== undefined && board[7] !== undefined && board[8] !== undefined) {
      if(board[6] === board[7] && board[7] === board[8]) {
        win = true;
      }
    }
  }

  // Function that checks for column wins
  function checkColumns(board) {
        // Check first column
        if(board[0] !== undefined && board[3] !== undefined && board[6] !== undefined) {
          if(board[0] === board[3] && board[3] === board[6]) {
            win = true;
          }
        }
    
        // Check second column
        if(board[1] !== undefined && board[4] !== undefined && board[7] !== undefined) {
          if(board[1] === board[4] && board[4] === board[7]) {
            win = true;
          }
        }
    
        // Check third column
        if(board[2] !== undefined && board[5] !== undefined && board[8] !== undefined) {
          if(board[2] === board[5] && board[5] === board[8]) {
            win = true;
          }
        }
  }

  // Function that checks for diagonal wins
  function checkDiagonal(board) {
        // Check forward diagonal
        if(board[6] !== undefined && board[4] !== undefined && board[2] !== undefined) {
          if(board[6] === board[4] && board[4] === board[2]) {
            win = true;
          }
        }
    
        // Check backward diagonal
        if(board[0] !== undefined && board[4] !== undefined && board[8] !== undefined) {
          if(board[0] === board[4] && board[4] === board[8]) {
            win = true;
          }
        }
  }

  // Function that checks for a tie, then resets variables for next game
  function checkTie() {
    ++turnCount;

    if(turnCount >= 6 && !win) {
      alert("TIE!");
      turnCount = 0;
    }
  }

  // Function that checks for a win, then resets variables for next game
  function checkWin(board) {
    checkRows(board);
    checkColumns(board);
    checkDiagonal(board);

    if (win) {
      alert("WIN");
      win = false;
      turnCount = 0;
    }
  }

  return {
    win,
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
    const board = [];
    gameBoard.createBoard();

    for (let i = 0; i < 9; i++) {
      let square = document.getElementById(i);

      square.addEventListener("click", () => {
        playerLogic.humanTurn(i, board);
        playerLogic.computerTurn(board);

        gameLogic.checkWin(board);
        gameLogic.checkTie();
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

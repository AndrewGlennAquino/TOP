const gameBoard = (function () {
  const boardArray = []; // array that will hold game state

  // cache DOM
  const board = document.querySelector(".board");

  // function that creates square div elements for board and attaches an event listenter to each square
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

  return {
    boardArray,
    createBoard,
  };
})();


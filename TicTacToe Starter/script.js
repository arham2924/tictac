const allSquares = document.querySelectorAll(".board__square");
const title = document.querySelector(".board__title");

let currentPlayer = "X";
let gameOver = false;
let board = new Array(9);

allSquares.forEach((square, i) => {
  square.addEventListener("click", () => {
    if (square.innerHTML || gameOver) {
      return;
    }
    square.innerHTML = currentPlayer;
    board[i] = currentPlayer;

    console.log(board);

    if (checkWin()) {
      console.log("done");
      title.innerHTML = `${currentPlayer} Wins!`;
      gameOver = true;
      return;
    }

    if (checkDraw()) {
      title.innerHTML = "Its a Draw!";
      gameOver = true;
      return;
    }

    currentPlayer = currentPlayer === "X" ? "O" : "X";
    title.innerHTML = `${currentPlayer}'s turn`;
  });
});

function restartGame() {
    gameOver = false
    title.innerHTML = `${currentPlayer}'s turn`;
    allSquares.forEach(square => {
        square.innerHTML = ''
    })
    board = new Array(9)
}

function checkDraw() {
  for (let i = 0; i < board.length; ++i) {
    if (!board[i]) {
      return false;
    }
  }
  return true;
}

function checkWin() {
  const winninIndicies = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],

    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],

    [0, 4, 8],
    [2, 4, 6],
  ];

  for (let i = 0; i < winninIndicies.length; ++i) {
    const matchingIndicies = winninIndicies[i];
    let symbol1 = board[matchingIndicies[0]];
    let symbol2 = board[matchingIndicies[1]];
    let symbol3 = board[matchingIndicies[2]];

    if (!symbol1 || !symbol2 || !symbol3) {
      continue;
    }

    if (symbol1 === symbol2 && symbol2 === symbol3) {
      console.log("winner at", matchingIndicies);
      return true;
    }
  }
}

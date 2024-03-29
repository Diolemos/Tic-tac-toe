// 'use strict'
const Message =(()=>{
    header =  document.querySelector("#header")
    const render = (message)=> {
       
       header.innerText = message
    }
return {render,}})()

startBtn = document.getElementById("start-btn");

const gameBoardModule = (() => {
  let gameBoard = ["", "", "", "", "", "", "", "", ""];

  let boardInnerHtml;
  const renderBoard = () => {
    boardInnerHtml = ""
    gameBoard.forEach((cell, index) => {
      boardInnerHtml += `<div class='cell' id='cell-${index}'>${cell}</div>`;
    });
    document.querySelector(".game-board").innerHTML = boardInnerHtml;
    const cells = document.querySelectorAll(".cell");
    cells.forEach((cell) => {
      cell.addEventListener("click", Game.handleClick);
    });
  };

  const update = (index, value) => {
    gameBoard[index] = value;
  };

  const getGameBoard = ()=> gameBoard

  return { renderBoard, update, getGameBoard };
})();
//player factory
const Player = (PlayerName, marker) => {
  return { PlayerName, marker };
};

const Game = (() => {
  // player1Name = document.getElementById('player1')
  // player2Name = document.getElementById('player2')
  let players = [];
  let currentPlayerIndex;
  let isGameOver;

  const start = () => {
    players = [
      Player((playerName = "player 1"), (marker = "X")),
      Player((playerName = "player 2"), (marker = "O")),
    ];
    currentPlayerIndex = 0;
    isGameOver = false;
    gameBoardModule.renderBoard();
    startBtn.parentNode.removeChild(startBtn)
    
  };
  const handleClick = (event) => {
    if (isGameOver){
        return 
    }
    let index = parseInt(event.target.id.split("-")[1]);
    if (gameBoardModule.getGameBoard()[index] !== "") {
      return;
    }
    gameBoardModule.update(index, players[currentPlayerIndex].marker);
  
    if (checkForWin(gameBoardModule.getGameBoard(), players[currentPlayerIndex].marker)) {
      isGameOver = true;
      Message.render(`${players[currentPlayerIndex].PlayerName}, Won!`)
    }else if(checkForTie(gameBoardModule.getGameBoard())){
       Message.render("Draw!")
    }
  
    currentPlayerIndex = currentPlayerIndex == 0 ? 1 : 0;
  
    gameBoardModule.renderBoard();
  };
  
  
  
  
  

  const reset = ()=>{
    isGameOver = false
    Message.render("Tic Tac Toe")
    for(let i = 0;i<9;i++){
        gameBoardModule.update(i,"")
    }
    gameBoardModule.renderBoard()
  }

  return { start, handleClick,reset };
})();

startBtn.addEventListener("click", (e) => {
  Game.start();
});

function checkForWin(board){
    const winningCombinations = [
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6]
    ]
    for(let i=0;i<winningCombinations.length;i++){
        const [a,b,c] = winningCombinations[i]
        if (board[a] && board[a]=== board[b] && board[a]==board[c]){
                return true
        }
    }
    return false
}

function checkForTie(board){
    return board.every(cell => cell !== "")
}

resetBtn = document.querySelector("#reset-btn")
resetBtn.addEventListener("click",()=>{Game.reset()})
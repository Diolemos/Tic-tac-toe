// 'use strict'

startBtn = document.getElementById("start-btn")



const gameBoardModule = (()=>{

    let gameBoard =  ["", "", "", "", "", "", "", "", "",]
    
    let boardInnerHtml = ""
    const renderBoard = ()=>{
       
        gameBoard.forEach(
            (cell,index)=>{
            boardInnerHtml += `<div class='cell' id='cell-${index}'>${cell}</div>`
        })
        document.querySelector(".game-board").innerHTML = boardInnerHtml
        const cells = document.querySelectorAll(".cell")
        cells.forEach((cell)=>{
            cell.addEventListener("click", Game.handleClick)
        })
       
    }
    

    return {renderBoard,}

})()
const Player = (PlayerName, marker)=>{
    return{PlayerName, marker}
}

const Game = (()=>{
    player1Name = document.getElementById('player1')
    player2Name = document.getElementById('player2')
    let players = []
    let currentPlayerIndex
    let isGameOver 

    const start = ()=>{
        players = [
            Player(playerName=player1Name,marker='X'),
            Player(playerName=player2Name,marker='O')
        ]
    currentPlayerIndex = 0   
    isGameOver = false 
    gameBoardModule.renderBoard( )
    }
    const handleClick = (event)=>{
        let index = parseInt(event.target.id.split("-")[1])
        console.log(index)
    }
    return {start, handleClick}
})()







startBtn.addEventListener("click",(e)=>{
    Game.start()
    })
    
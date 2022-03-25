// 'use strict'


let gameBoard = {
    cells: [null, null, null, null, null, null, null, null, null,]
}
let turn = 1




//playerFactory
const playerfactory = function (marker) {

    const fillCell = function (x) {
        x.innerText = this.marker;
    }

    const updateGameboard = function (event) {  //places the current player's marker on the desired spot

        gameBoard.cells[event] = this.marker.toLowerCase()

    }
    return { marker, fillCell, updateGameboard }
}
//Players
const player1 = playerfactory('x');
const player2 = playerfactory('O')


//game, main module
const game = (function () {
    const tiles = document.querySelectorAll('.boardcell');
    const title = document.querySelector('h1')
    function checkForWinner() { //Looks the board for winning combinations

        const combinations = [[0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6]];

        for (let i = 0; i <= 7; i++) {
            let comb = combinations[i];
            console.log(comb)

            if (gameBoard.cells[comb[0]] == 'x' && gameBoard.cells[comb[1]] == 'x' && gameBoard.cells[comb[2]] == 'x') {
                title.innerText = 'Player 1 wins!!'
            } else if (gameBoard.cells[comb[0]] == 'o' && gameBoard.cells[comb[1]] == 'o' && gameBoard.cells[comb[2]] == 'o') {
                title.innerText = 'Player 2 wins!!'
            }
        }



    }// end of check for winner function



    tiles.forEach(function (tile) {
        tile.addEventListener('click', function (event) {
            let cell = event.target
            let cellData = event.target.dataset.index


            if (cell.innerText !== '') {
                return
            }

            if (turn % 2 == 1) {
                player1.fillCell(cell)
                player1.updateGameboard(cellData)
                title.innerText = 'Player 2'
                checkForWinner()
                turn++

            } else {
                player2.fillCell(cell)
                player2.updateGameboard(cellData)
                title.innerText = 'Player 1'
                checkForWinner()
                turn++
            }

        })
    })

})()



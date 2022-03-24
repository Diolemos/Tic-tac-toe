'use strict'


let gameBoard = {
    cells: [null, null, null, null, null, null, null, null, null,]
}
let turn = 1




//playerFactory
const playerfactory = function (marker) {

    const fillCell = function (x) {
        x.innerText = this.marker;
    }

    const updateGameboard = function () {

        gameBoard.cells[turn - 1] = this.marker.toLowerCase()

    }
    return { marker, fillCell, updateGameboard }
}
//Players
const player1 = playerfactory('x');
const player2 = playerfactory('O')


//game, main module
const game = (function () {
    const tiles = document.querySelectorAll('.boardcell');
    const title = document.querySelector('#title')
    function checkForWinner() {




    }


    tiles.forEach(function (tile) {
        tile.addEventListener('click', function (event) {
            let cell = event.target

            if (cell.innerText !== '') {
                return
            }

            if (turn % 2 == 1) {
                player1.fillCell(cell)
                player1.updateGameboard()
                title.innerText = '2'
                turn++

            } else {
                player2.fillCell(cell)
                player2.updateGameboard()
                title.innerText = '1'
                turn++
            }

        })
    })

})()



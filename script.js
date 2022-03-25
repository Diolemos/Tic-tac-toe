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

        const combinations = [[0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6]];

        for (let i = 0; i <= 8; i++) {
            let a = combinations[i];
            console.log(a)
        }

        if (gameBoard.cells[a[0]] == 'x' && gameBoard.cells[a[1]] == 'x' && gameBoard.cells[a[2]] == 'x') {
            //hey you've won, x
        } else if (gameBoard.cells[a[0]] == 'o' && gameBoard.cells[a[1]] == 'o' && gameBoard.cells[a[2]] == 'o') {
            //hey, O, you rock
        }

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



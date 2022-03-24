'use strict'


let gameBoard = {
    cells: [null, null, null, null, null, null, null, null, null,]
}



//playerFactory
function playerfactory(marker) {
    const fillCell = () => cell.textContext = this.marker
    return { marker, fillCell }
}
//Players
const player1 = playerfactory('x');
const player2 = playerfactory('O')


//game, main module
const game = (function () {
    let tiles = document.querySelectorAll('.boardcell');


    tiles.forEach(function (tile) {
        tile.addEventListener('click', function (event) {
            let cell = event.target

            if (cell.innerText !== '') {
                return
            }
        })
    })

})()



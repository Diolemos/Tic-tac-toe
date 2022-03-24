let gameBoard = {
    tiles: [null, null, null, null, null, null, null, null, null,]
}


const gameBoardArr = []

for (let i = 0; i < 9; i++) {
    gameBoardArr.push('')
}

let allCells = document.querySelectorAll('.boardcell')

allCells.forEach((cell) => {
    cell.addEventListener('click', () => {
        console.log('test')
    })
})



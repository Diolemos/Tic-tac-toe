let gameBoard = {
    cel1: document.getElementById(cel1),
    cel2: document.getElementById(cel2),
    cel3: document.getElementById(cel3),
    cel4: document.getElementById(cel4),
    cel5: document.getElementById(cel5),
    cel6: document.getElementById(cel6),
    cel7: document.getElementById(cel7),
    cel8: document.getElementById(cel8),
    cel9: document.getElementById(cel9),
}

let allCells = document.querySelectorAll('.boardcell')

allCells.forEach((cell) => {
    cell.addEventListener('click', () => {
        console.log('test')
    })
})



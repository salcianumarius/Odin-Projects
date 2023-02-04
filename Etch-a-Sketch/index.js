
// variables
const squareDivs = document.querySelector('.squareDivs')
const numberOfSquares = document.querySelector('#numberOfSquares')
const btnResetGrid = document.querySelector('#resetGrid')
const colorButtons = document.querySelectorAll('.buttonsDiv > .button-29');
let gridNumberOfSquares = numberOfSquares.value;
let squareBgColor = "blackBG";


// functions 
const createSquareDivs = (nrOfSquares, color) => {
    gridNumberOfSquares = nrOfSquares;
    squareDivs.innerHTML = '';
    let gridWidth = squareDivs.offsetWidth / nrOfSquares;
    let styleForSquare = `repeat(${nrOfSquares - 3}, ${gridWidth}px) 1fr 1fr 1fr`;
    squareDivs.style['grid-template-columns'] = styleForSquare;
    squareDivs.style['grid-template-rows'] = styleForSquare;
    for (let i = 0; i < nrOfSquares; i++) {
        for (let j = 0; j < nrOfSquares; j++) { 
            let square = document.createElement('div');
            square.addEventListener('mouseover',(e) => e.buttons ? changeSquareBgColor(e.target): "")
            square.addEventListener('click',(e) => changeSquareBgColor(e.target))
            squareDivs.appendChild(square);
        }
    }
}

const resetNumberOfSquares = () => {
    numberOfSquares.value = gridNumberOfSquares;
    numberOfSquares.nextElementSibling.value = gridNumberOfSquares;
}

const changeSquareBgColor = (square) => {
    if (squareBgColor == "blackBG")
        square.style.background = 'black';
    else if (squareBgColor == "rgbBG")
        square.style.background = "#" + Math.floor(Math.random()*16777215).toString(16);
    else
        square.style.background = "white";

}


// events
document.addEventListener("DOMContentLoaded", () => {
    createSquareDivs(24);
});

numberOfSquares.addEventListener('mouseup',(e) =>
     confirm("The change will reset grid. Are you ok with that?") ?
      createSquareDivs(e.target.value) :
      resetNumberOfSquares()
    )

colorButtons.forEach(el => el.addEventListener('click', event => {
    squareBgColor = event.target.id;
    colorButtons.forEach(btn => btn.classList.remove('active'));
    event.target.classList.add("active");
}));

btnResetGrid.addEventListener('click',() => {
    createSquareDivs(gridNumberOfSquares);
})


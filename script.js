let sizeOfGrid = 16;
const container = document.querySelector('.container');
const btn1 = document.querySelector('.btn-1');


const createGrid = (amountOfGrids) => {
    while (container.hasChildNodes()) {
        container.removeChild(container.firstChild);
      }
    for (let i = 0; i < amountOfGrids; i++) {
        const row = document.createElement('div');
        row.classList.add('grid-row');

        for (let j = 0; j < amountOfGrids; j++) {
            const widthAndHeight = 960 / amountOfGrids;
            const gridBox = document.createElement('div');
            // add mouseover event listener to change color:
            gridBox.addEventListener('mouseover', () => {
                gridBox.style.background = 'pink';
            })
            gridBox.style.width = `${widthAndHeight}px`;
            gridBox.style.height = `${widthAndHeight}px`;
            gridBox.classList.add('grid-box');
            row.appendChild(gridBox);
        }

        container.appendChild(row);
    }
}

createGrid(sizeOfGrid);

const gridBoxes = document.querySelectorAll('.grid-box');

btn1.addEventListener('click', () => {
    let userSize = Number(prompt("Enter a grid size."));
    
    while (userSize > 100) {
        userSize = Number(prompt("Size must be 100 or less. Please try again."))
    } 
    createGrid(userSize);
});
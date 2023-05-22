
let color = "black";
let lButton = document.getElementById('l-button');
let rButton = document.getElementById('r-button');
let container = document.querySelector('#container');
let gridNumber = 50;
let gridNumInt = parseInt(gridNumber);
let tempGridNum = gridNumber;
let gridSize = (gridNumInt * gridNumInt);

/* Creates a number of grid columns based on the user input
for use in styleCont function */
const auto = function () {
    gridNumInt = parseInt(gridNumber);
    let autoNum = " auto";
    for (let i = 1 ; i < gridNumInt ; i++) {
        autoNum += " auto";
    }
    return autoNum;
}

let styleCont = function () {
    container.style=`grid-template-columns: ${auto()};`;
}


const createGrid = function () {
    for (let i = 1 ; i <= gridSize; i++) {
        let div = document.createElement('div');
        div.setAttribute('class', 'pixel');
        container.appendChild(div);
    }
    styleCont();
    pixels = document.querySelectorAll('.pixel');
    pixels.forEach((pixel) => {
    pixel.addEventListener('mouseover', function(){
        if (color === 'rainbow') {
            this.style.background = `${randomColors()}`;
        } else {
        this.style.background = `${color}`;
        }
        let opacity = this.style.opacity;
        this.style.opacity = opacity ? (parseFloat(opacity) + 0.2) : 0.4;
        })
    });
}

createGrid();

const colorBtns = document.querySelectorAll('div#paper button');
colorBtns.forEach((button) => {
    button.addEventListener('click', () => {
        color = button.id;
        console.log(color);
    });
});

const randomInt = function (max) {
    return Math.floor(Math.random() * (max + 1));
}

const randomColors = function () {
    let rgb;
    let r = randomInt(255);
    let g = randomInt(255);
    let b = randomInt(255);
    return `rgb(${r},${g},${b})`;
}


const eraseGrid = function () {
    container.innerHTML="";
}

const lBtnFunc = function () {
    gridNumber = prompt('Choose a grid size between 16 & 100', `${gridNumInt}`);
    if (gridNumber === null) {
        return;
    }
    gridNumInt = parseInt(gridNumber);
    if (Number.isInteger(gridNumInt) === false || gridNumber < 16 || gridNumber > 100) {
        alert('Invalid selection! Please choose a grid size between 16 & 100');
        gridNumInt = tempGridNum;
        return;
    }

    eraseGrid();
    gridSize = (gridNumInt * gridNumInt);
    createGrid();
}


const leftButton = lButton.addEventListener('click', () => {
    lBtnFunc();
});

const leftClick = function () {
    return leftButton;
}

const reset = rButton.addEventListener('click', () => {
    eraseGrid();
    createGrid();
});

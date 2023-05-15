let lButton = document.getElementById('l-button');
let rButton = document.getElementById('r-button');
let container = document.querySelector('#container');
let gridNumber = 16;
let gridNumInt = parseInt(gridNumber);
let gridSize = (gridNumInt * gridNumInt);

const validate = function(item) {
    if (item < 16) {
        item = 16;
    };
    if (item > 100) {
        item = 100;
    };

    while (Number.isInteger(item) === false) {
        item = parseInt(prompt('Invalid selection! Please choose a grid size between 16 & 100', 16));
    };
}

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
    const pixels = document.querySelectorAll('.pixel');
    pixels.forEach((pixel) => {
    pixel.addEventListener('mouseover', function(){
        this.style.background = "black";
        let opacity = this.style.opacity;
        this.style.opacity = opacity ? (parseFloat(opacity) + 0.2) : 0.4;
        })
    });
}

createGrid();

const eraseGrid = function () {
        container.innerHTML="";
}


lButton.addEventListener('click', () => {
    gridNumber = prompt('Choose a grid size between 16 & 100', `${gridNumInt}`);
    if (gridNumber === null) {
        return;
    }
    eraseGrid();
    gridNumInt = parseInt(gridNumber);
    validate(gridNumInt);
    gridSize = (gridNumInt * gridNumInt);
    createGrid();
});

const reset = rButton.addEventListener('click', () => {
    eraseGrid();
    createGrid();
});


/*element.addEventListener("mouseover",function(){
    this.style.background = "#0000ff";
});*/
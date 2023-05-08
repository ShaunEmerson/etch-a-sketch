const div = document.createElement('div');
const lButton = document.getElementById('l-button');
const rButton = document.getElementById('r-button');
let gridNumber = 16;

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

lButton.addEventListener('click', () => {
    gridNumber = parseInt(prompt('Choose a grid size between 16 & 100', 16));
    validate(gridNumber);
});

const reset = rButton.addEventListener('click', () => {
    window.location.reload();
});



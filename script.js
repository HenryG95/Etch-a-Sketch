const container = document.querySelector('#container');
const select = document.querySelector('#select');
const red = document.querySelector('#red');
const green = document.querySelector('#green');
const blue = document.querySelector('#blue');
const erase = document.querySelector('#erase');

const createDiv = (number) => {
    for(var i = 0; i < number; i++) {
        var div = document.createElement('div');
        div.setAttribute('class','square');
        container.appendChild(div);
    }
}

const mouseOver = (element,color) => {
    element.addEventListener('mouseover',() => {
        element.style['background-color'] = color;
    })
}

const removeDiv = (element) => {
    element.forEach(item => {
        container.removeChild(item);
    })
}

createDiv(256);

let square = document.querySelectorAll('.square');
square.forEach(element => mouseOver(element,'red'));

select.addEventListener('click', () => {
    removeDiv(square);
    var size = parseInt(prompt('What Size?'));
    var division = 512/size;
    createDiv(size*size);
    square = document.querySelectorAll('.square');
    square.forEach(element => mouseOver(element,'red'));
    container.style['grid-template-rows'] = `repeat(${size},${division}px)`;
    container.style['grid-template-columns'] = `repeat(${size},${division}px`;
})

red.addEventListener('click', () => {
    square = document.querySelectorAll('.square');
    square.forEach(element => mouseOver(element,'red'));
} );

green.addEventListener('click', () => {
    square = document.querySelectorAll('.square');
    square.forEach(element => mouseOver(element,'green'));
} );

blue.addEventListener('click', () => {
    square = document.querySelectorAll('.square');
    square.forEach(element => mouseOver(element,'blue'));
} );

erase.addEventListener('click', () => {
    square = document.querySelectorAll('.square');
    square.forEach(element => mouseOver(element,'white'));
} );





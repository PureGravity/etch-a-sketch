let square = document.querySelector('.square')
let container = document.querySelector('.container')

let y = 5;
let x = 32;

for (let i = 0; i < x; i++) {
    let newSquare = square.cloneNode(true);
    container.appendChild(newSquare);
}

for (let i = 0; i < y; i++) {
    let newRow = container.cloneNode(true);
    container.appendChild(newRow);
}

let allSquares = document.querySelectorAll('.square')

allSquares.forEach(function(shape){
    shape.addEventListener('mouseover', function(){
        shape.style.backgroundColor = 'black';
    });

})


// clear button

let clearBtn = document.querySelector('.clear')

allSquares.forEach(function(shape){
    clearBtn.addEventListener('click', function(){
        shape.style.backgroundColor = '';
    });

})
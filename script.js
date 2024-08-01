let square = document.querySelector('.square');
let container = document.querySelector('.container');

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

let allSquares = document.querySelectorAll('.square');

allSquares.forEach(function(shape){
    shape.addEventListener('mouseover', function(){
        shape.style.backgroundColor = 'black';
    });
});


// clear button

let clearBtn = document.querySelector('.clearButton');

allSquares.forEach(function(shape){
    clearBtn.addEventListener('click', function(){
        shape.style.backgroundColor = '';
    });

})

clearBtn.addEventListener('mouseover', function(){
    clearBtn.style.outline = '3px solid white';

})
clearBtn.addEventListener('mouseout', function(){
    clearBtn.style.outline = '';
})

// color buttons

let red = document.querySelector('.redColor');
let black = document.querySelector('.blackColor');
let green = document.querySelector('.greenColor');
let blue = document.querySelector('.blueColor');

red.addEventListener('click', function(){
    allSquares.forEach(function(shape){
        shape.addEventListener('mouseover', function(){
            shape.style.backgroundColor = 'red';
        });
    });
})

black.addEventListener('click', function(){
    allSquares.forEach(function(shape){
        shape.addEventListener('mouseover', function(){
            shape.style.backgroundColor = 'black';
        });
    });
})

green.addEventListener('click', function(){
    allSquares.forEach(function(shape){
        shape.addEventListener('mouseover', function(){
            shape.style.backgroundColor = 'green';
        });
    });
})

blue.addEventListener('click', function(){
    allSquares.forEach(function(shape){
        shape.addEventListener('mouseover', function(){
            shape.style.backgroundColor = 'blue';
        });
    });
})

// Github Link 
 link = document.querySelector('.ghLink');

link.addEventListener('mouseover', function(){
    link.style.color = 'white';

})
link.addEventListener('mouseout', function(){
    link.style.color = '';
})
const buttons = document.createElement('div');
buttons.classList.add('buttons');

const container = document.createElement('div');
container.classList.add('container');

const btnColor = document.createElement('button');
btnColor.classList.add('color');
btnColor.textContent = 'Random colors'
buttons.appendChild(btnColor);

btnColor.addEventListener('click', function() {
    const quantity = prompt('Insert a grid size between 1 and 100 (default x16)')
    if (quantity <= 100 && quantity > 0) {
        createGrid(quantity, 'paintedColor');
    } else {
        createGrid(16, 'paintedColor');
    }
})

const btnRestart = document.createElement('button');
btnRestart.classList.add('restart');
btnRestart.textContent = 'RESTART'
buttons.appendChild(btnRestart);

btnRestart.addEventListener('click', function() {
    const quantity = prompt('Insert a grid size between 1 and 100 (default x16)')
    if (quantity <= 100 && quantity > 0) {
        createGrid(quantity, 'paintedNormal');
    } else {
        createGrid(16, 'paintedNormal');
    }
})

const btnScale = document.createElement('button');
btnColor.classList.add('scale');
btnScale.textContent = 'Gray scale'
buttons.appendChild(btnScale);

btnScale.addEventListener('click', function() {
    const quantity = prompt('Insert a grid size between 1 and 100 (default x16)')
    if (quantity <= 100 && quantity > 0) {
        createGrid(quantity, 'paintedScale');
    } else {
        createGrid(16, 'paintedScale');
    }
})


const createGrid = function(size, style){
    container.innerHTML = "";
    container.style.setProperty('--rows', size);
    container.style.setProperty('--cols', size);

    for (let i = 0; i < size * size; i++) {
        let box = document.createElement('div');
        box.classList.add('box');
        let scale = 100;
        
        box.onmouseover = function() {
            if (style === 'paintedColor') {
                const randomRGB = `rgb(${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)})`;
                box.style.setProperty('--randomColor', randomRGB);
            } else if (style === 'paintedScale') {
                if (scale > 0) {
                    scale = scale - 10;
                    darker = `hsl(0, 0%, ${scale}%)`;
                    box.style.setProperty('--scale', darker);
                }
            }
            box.classList.add(style);
        }

        container.appendChild(box);
    }
}

createGrid(16, 'paintedNormal');

document.body.appendChild(buttons);
document.body.appendChild(container);

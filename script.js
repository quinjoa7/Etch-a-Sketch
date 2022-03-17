const container = document.createElement('div');
container.classList.add('container');

const btnRestart = document.createElement('button');
btnRestart.classList.add('restart');
btnRestart.textContent = 'RESTART'

const createGrid = function(size){
    container.innerHTML = "";
    container.style.setProperty('--rows', size);
    container.style.setProperty('--cols', size);

    for (let i = 0; i < size * size; i++) {
        let box = document.createElement('div');
        box.classList.add('box');
    
        box.onmouseover = function() {
            box.classList.add('painted');
        }

        container.appendChild(box);
    }
}

btnRestart.addEventListener('click', function() {
    const quantity = prompt('Insert a grid size smaller between 1 and 100 (default x16)')
    if (quantity < 100 && quantity > 0) {
        createGrid(quantity);
    } else {
        createGrid(16);
    }
})

createGrid(16);

document.body.appendChild(btnRestart);
document.body.appendChild(container);

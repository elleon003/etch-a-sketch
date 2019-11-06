const container = document.querySelector('.container');
const clear = document.querySelector('.clear');
const buildGrid = document.querySelector('.buildGrid');
const eraser = document.querySelector('.eraser');
const color = document.querySelector('.color');

// Grid creation
const createGrid = (cells) => {
    container.style.gridTemplateColumns = `repeat(${cells}, 1fr)`;
    container.style.gridTemplateRows = `repeat(${cells}, 1fr)`;
    for (let i = 0; i < cells; i++) {
        for (let j = 0; j < cells; j++) {
            const div = document.createElement('div');
            div.classList.add('item');
            container.appendChild(div);
        }
    }
    // colorize functionality
    const item = document.querySelectorAll('.item');
    item.forEach((selection) => {
        selection.addEventListener('mouseenter', (e) => {
            e.target.classList.add('purple');
        });
    });
    // clear grid
    clear.addEventListener('click', () => {
        item.forEach((selection) => {
            selection.classList.remove('purple');
        })
    });
    // eraser
    eraser.addEventListener('click', () => {
        item.forEach((selection) => {
            selection.addEventListener('mouseenter', (e) => {
                e.target.classList.remove('purple');
            })
        })
    });
    // redraw
    color.addEventListener('click', () => {
        item.forEach((selection) => {
            selection.addEventListener('mouseenter', (e) => {
                e.target.classList.add('purple');
            })
        })
    })
};

// Resize draw
buildGrid.addEventListener('click', () => {
    let cells = Number(prompt('How thick do you want your pen? (Enter number between 4 - 100)'));
    createGrid(cells);
});

createGrid(20);
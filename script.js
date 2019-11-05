const container = document.querySelector('.container');
const clear = document.querySelector('.clear');

// Grid creation
const createGrid = (cells) => {
    container.style.gridTemplateColumns = `repeat(${cells}, 25px)`;
    for (let i = 0; i < cells; i++) {
        for (let j = 0; j < cells; j++) {
            const div = document.createElement('div');
            div.classList.add('item');
            div.style.width = '25px';
            div.style.height = '25px';
            div.style.border = 'solid black 1px'
            container.appendChild(div);
        }
    }
    // colorizing the grid
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

    })
};

createGrid(30);

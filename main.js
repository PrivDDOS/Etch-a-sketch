const container = document.querySelector('.grid-container');
const btn = document.querySelector('.btn');

function grid(size = 16) { // Default size 16x16
    container.innerHTML = ''; // Clear old grid

    container.style.display = "grid";
    container.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    container.style.gridTemplateRows = `repeat(${size}, 1fr)`;

    for (let i = 0; i < size * size; i++) {
        const div = document.createElement('div');
        div.classList.add('box');
        div.addEventListener('mouseover', () => {
            div.style.backgroundColor = getRandomColor();
        });
        container.appendChild(div);
    }
}

function getRandomColor() {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    return `rgb(${r}, ${g}, ${b})`;
}

// Generate initial grid
grid();

btn.addEventListener('click', () => {
    const input = prompt('Enter a number between 1 and 100');
    const size = parseInt(input);

    if (size > 0 && size <= 100) {
        grid(size);
    } else {
        alert('Please enter a number between 1 and 100');
    }
});
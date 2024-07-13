document.addEventListener("DOMContentLoaded", function() {
    const board = document.getElementById('sudoku-board');
    const generate = document.getElementById('generate');
    const solve = document.getElementById('solve');

    for(i = 0; i < 81; i++)
    {
        const cell = document.createElement('input');
        cell.type = 'text';
        cell.min = 1;
        cell.max = 9;
        cell.maxLength = 1;
        board.appendChild(cell);
    }
});
document.addEventListener("DOMContentLoaded", function() {
    const board = document.getElementById('sudoku-board');
    const generate = document.getElementById('generate');
    const solve = document.getElementById('solve');

    const inputButtons = document.getElementById('input-buttons');

    const buttons = document.querySelectorAll('.difficulty');
    const easy = document.getElementById('easy');
    const medium = document.getElementById('medium');
    const hard = document.getElementById('hard');

    var difficultyCount = 0;
    let selectedCell = null;

    for (let i = 0; i < 81; i++) {
        const cell = document.createElement('input');
        cell.setAttribute('type', 'text');
        cell.setAttribute('readonly', 'true');
        cell.addEventListener('click', () => {
            if (selectedCell) {
                selectedCell.classList.remove('selected');
            }
            cell.classList.add('selected');
            selectedCell = cell;
        });
        board.appendChild(cell);
    }

    for (let i = 1; i <= 9; i++) {
        var button = document.createElement('button');
        button.textContent = i;
        button.addEventListener('click', () => {
            if (selectedCell && !selectedCell.classList.contains('generated')) {
                selectedCell.value = i;
                selectedCell.classList.add('user-input');
                validateCell(selectedCell, i);
            }
        });
        inputButtons.appendChild(button);
    }

    const getBoard = () => {
        const cells = Array.from(board.children);
        const boardArray = [];
        for (let i = 0; i < 9; i++) {
            boardArray.push(cells.slice(i * 9, (i + 1) * 9).map(cell => parseInt(cell.value) || 0));
        }
        return boardArray;
    };

    const setBoard = (boardArray) => {
        const cells = Array.from(board.children);
        for (let i = 0; i < 81; i++) {
            const row = Math.floor(i / 9);
            const col = i % 9;
            cells[i].value = boardArray[row][col] === 0 ? '' : boardArray[row][col];
            if (boardArray[row][col] !== 0) {
                cells[i].classList.add('generated');
            } else {
                cells[i].classList.remove('generated');
            }
        }
    };

    const isValid = (board, row, col, num) => {
        for (let x = 0; x < 9; x++) {
            if (board[row][x] === num || board[x][col] === num ||
                board[3 * Math.floor(row / 3) + Math.floor(x / 3)][3 * Math.floor(col / 3) + x % 3] === num) {
                return false;
            }
        }
        return true;
    };

    const solveSudoku = (board) => {
        for (let row = 0; row < 9; row++) {
            for (let col = 0; col < 9; col++) {
                if (board[row][col] === 0) {
                    for (let num = 1; num <= 9; num++) {
                        if (isValid(board, row, col, num)) {
                            board[row][col] = num;
                            if (solveSudoku(board)) {
                                return true;
                            }
                            board[row][col] = 0;
                        }
                    }
                    return false;
                }
            }
        }
        return true;
    };

    const generateSudoku = () => {
        const emptyBoard = Array.from({ length: 9 }, () => Array(9).fill(0));

        const fillDiagonal = (board) => {
            for (let i = 0; i < 9; i += 3) {
                fillBox(board, i, i);
            }
        };

        const fillBox = (board, row, col) => {
            const numSet = new Set();
            while (numSet.size < 9) {
                numSet.add(Math.floor(Math.random() * 9) + 1);
            }
            const numArray = Array.from(numSet);
            for (let i = 0; i < 3; i++) {
                for (let j = 0; j < 3; j++) {
                    board[row + i][col + j] = numArray[i * 3 + j];
                }
            }
        };

        const removeDigits = (board, numToRemove) => {
            for (let i = 0; i < numToRemove; i++) {
                let row = Math.floor(Math.random() * 9);
                let col = Math.floor(Math.random() * 9);
                while (board[row][col] === 0) {
                    row = Math.floor(Math.random() * 9);
                    col = Math.floor(Math.random() * 9);
                }
                board[row][col] = 0;
            }
        };

        fillDiagonal(emptyBoard);
        solveSudoku(emptyBoard);
        removeDigits(emptyBoard, difficultyCount);

        return emptyBoard;
    };

    const validateCell = (cell, num) => {
        const boardArray = getBoard();
        const cellIndex = Array.from(board.children).indexOf(cell);
        const row = Math.floor(cellIndex / 9);
        const col = cellIndex % 9;

        boardArray[row][col] = 0;
        if (!isValid(boardArray, row, col, num)) {
            cell.classList.remove('valid');
            cell.classList.add('invalid');
        } else {
            cell.classList.remove('invalid');
            cell.classList.add('valid');
        }
        boardArray[row][col] = num;
    };

    solve.addEventListener('click', () => {
        const boardArray = getBoard();
        if (solveSudoku(boardArray)) {
            setBoard(boardArray);
        } else {
            alert("No solution exists for the given Sudoku.");
        }
    });

    generate.addEventListener('click', () => {
        const newPuzzle = generateSudoku();
        setBoard(newPuzzle);
    });

    easy.addEventListener('click', () => {
        difficultyCount = 50;
        buttons.forEach(btn => btn.classList.remove('selected-dificulty'));
        easy.classList.add('selected-dificulty');
    });

    medium.addEventListener('click', () => {
        difficultyCount = 57;
        buttons.forEach(btn => btn.classList.remove('selected-dificulty'));
        medium.classList.add('selected-dificulty');
    });

    hard.addEventListener('click', () => {
        difficultyCount = 65;
        buttons.forEach(btn => btn.classList.remove('selected-dificulty'));
        hard.classList.add('selected-dificulty');
    });
});

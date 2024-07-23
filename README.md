# Sudoku Game

## Table of Contents
- [Introduction](#introduction)
- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [Code Overview](#code-overview)
  - [HTML Structure](#html-structure)
  - [JavaScript Logic](#javascript-logic)
  - [CSS Styling](#css-styling)
- [Contributing](#contributing)
- [License](#license)

## Introduction
This project is a simple Sudoku game implemented in vanilla JavaScript, HTML, and CSS. Users can generate Sudoku boards of varying difficulty, input numbers, and solve the board.

## Features
- Generate Sudoku boards with three difficulty levels: Easy, Medium, and Hard.
- Input numbers into the Sudoku board.
- Solve the generated Sudoku board.

## Installation
1. Clone the repository:
   ```sh
   git clone https://github.com/yourusername/sudoku-game.git
2. Navigate to the project directory:
   ```sh
   cd sudoku-game

## Usage
1. Open the index.html file in your browser.
   ```sh
   open index.html
2. Use the interface to generate, solve, and interact with the Sudoku board:
- Select a difficulty level by clicking on "Easy", "Medium", or "Hard".
- Click "Generate" to create a new Sudoku puzzle.
- Click on any cell to select it and then click on the number buttons to input values.
- Click "Solve" to solve the current Sudoku puzzle.

## Code Overview
## HTML Structure
The HTML structure is simple and includes:

- A div with the id sudoku-board to hold the Sudoku cells.
- A div with the id input-buttons for number buttons.
- Buttons for selecting difficulty levels and generating/solving the Sudoku board.

## JavaScript Logic
The JavaScript code is responsible for:

- Generating the Sudoku board.
- Handling user input.
- Solving the Sudoku puzzle.

Key functions and elements include:

- Initialization: Adds event listeners to buttons and creates the Sudoku grid.
- Generate Sudoku: Fills the Sudoku board based on selected difficulty.
- Solve Sudoku: Solves the generated Sudoku board using a backtracking algorithm.
- Validate Cell: Checks if the user's input is valid according to Sudoku rules.

## CSS Styling
The CSS file styles the Sudoku board and buttons, providing a clean and responsive design.

## Contributing
Contributions are welcome! Please follow these steps:

1. Fork the repository.
2. Create a new branch:
   ```sh
   git checkout -b feature-branch
3. Make your changes and commit them:
   ```sh
   git commit -m 'Add new feature'
4. Push your changes to your forked repository:
   ```sh
   git push origin feature-branch
5. Create a pull request.

## License
This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
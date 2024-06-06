# React Tic-Tac-Toe

This is a simple tic-tac-toe game built using React. It allows two players to take turns marking spaces in a 3x3 grid, aiming to get three of their symbols in a row, column, or diagonal.

## Features

- Two-player functionality: Players can take turns marking spaces on the board.
- Player customization: Each player can set their name and choose their symbol (e.g., "X" or "O").
- Edit player names: Players can edit their names during the game.
- Game log: Keeps track of each turn, displaying the player's name and the selected square.
- Game board: Renders the 3x3 grid where players can select empty squares to make their moves.
- Game over screen: Displays a message when the game ends, indicating the winner or if it's a draw.
- Responsive design: The game interface adjusts to different screen sizes for a seamless experience on desktop and mobile devices.

## Key Concepts and Implementation:
- Component Modularity: I split components and built reusable components to ensure a clean and maintainable codebase, following the principle of component reusability.
- State Management: Employed React's state management capabilities effectively, including working with state, updating state based on old state correctly, and avoiding intersecting states to ensure optimal performance and scalability.
- Optimized State Management: Applied best practices to reduce state management overhead, such as preferring computed values over unnecessary state management and deriving state from props when appropriate.
- Sharing State Across Components: Utilized techniques to share state across components efficiently, enhancing code readability and reducing redundancy.
- Gameplay Logic: Implemented essential gameplay features such as tracking game progress, determining the winner, handling game over scenarios, and checking for draws, providing players with a seamless and immersive gaming experience.

## Getting Started

To run this tic-tac-toe game locally, follow these steps:

1. Clone this repository to your local machine:

```bash
git clone https://github.com/your-username/react-tic-tac-toe.git
```

2. Navigate to the project directory:
```bash
cd react-tic-tac-toe
```

3. Install dependencies using npm or yarn:
```bash
npm install
# or
yarn install
```

4. Start the development server:
```bash
npm start
# or
yarn start
```

5. Open your web browser and navigate to http://localhost:3000 to view the tic-tac-toe game.

## How to Play
Players take turns clicking on empty squares to mark them with their symbol.
The first player to get three of their symbols in a row, column, or diagonal wins the game.
If all squares are filled and no player has won, the game ends in a draw.

## Customization
You can customize the players' names and symbols by editing the Player component in the Player.js file.

## Game Log
The Log component keeps track of each turn during the game. It displays the player's name and the selected square.

## Game Board
The GameBoard component renders the 3x3 grid where players can select empty squares to make their moves.

## Game Over Screen
The GameOver component displays a message when the game ends, indicating the winner or if it's a draw.

## Contributing
Contributions to this project are welcome! If you find any bugs or have suggestions for improvements, please open an issue or submit a pull request.


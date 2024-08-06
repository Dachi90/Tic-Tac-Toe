import { useState } from 'react';
import { Board } from './components/Board';
import { Button } from './components/Button';
import { Header } from './components/Header';
import { Players } from './components/Players';

const initialState = ['', '', '', '', '', '', '', '', ''];
const comboWinner = [
	[0, 1, 2],
	[3, 4, 5],
	[6, 7, 8],
	[0, 3, 6],
	[1, 4, 7],
	[2, 5, 8],
	[0, 4, 8],
	[2, 4, 6],
];

function App() {
	const [board, setBoard] = useState(Array(9).fill(null));
	const [turn, setTurn] = useState('❌');
	const [winner, setWinner] = useState(null);

	const checkWinner = (board) => {
		for (const combo of comboWinner) {
			const [a, b, c] = combo;
			if (board[a] && board[a] === board[b] && board[a] === board[c]) {
				console.log(`ganador ${board[a]}`);
				return board[a];
			}
		}
		return null;
	};

	const checkEndGame = (board) => {
		// revisamos si hay un empate
		// si no hay más espacios vacíos
		// en el tablero
		return board.every((square) => square !== null);
	};

	const finishGame = () => {
		const newWinner = checkWinner(board);
		if (newWinner) {
			console.log(`gana el jugador ${winner}`);
			setWinner(newWinner);
		} else if (checkEndGame(board)) {
			console.log('empate');
			setWinner(false);
		}
	};

	return (
		<main className='h-screen bg-white'>
			<Header />
			<Board
				board={board}
				setBoard={setBoard}
				turn={turn}
				setTurn={setTurn}
				checkWinner={checkWinner}
				finishGame={finishGame}
			/>
			<Players turn={turn} />
			<Button />
		</main>
	);
}

export default App;

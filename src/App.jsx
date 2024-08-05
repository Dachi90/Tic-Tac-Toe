import { useState } from 'react';
import { Board } from './components/Board';
import { Button } from './components/Button';
import { Header } from './components/Header';
import { Players } from './components/Players';
import { Square } from './components/Square';

const initialState = ['', '', '', '', '', '', '', '', ''];

function App() {
	const [board, setBoard] = useState(initialState);
	const [turn, setTurn] = useState('❌');
	const [winner, setWinner] = useState(null);

	const updateBoard = (newBoard) => {
		console.log('hola');
		setBoard(newBoard);
	};

	return (
		<main className='h-screen bg-white'>
			<Header />
			<Board
				board={board}
				updateBoard={updateBoard}
			/>
			<Players />
			<Button />
		</main>
	);
}

export default App;

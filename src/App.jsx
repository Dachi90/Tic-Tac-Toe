import { useState } from 'react';
import { Board } from './components/Board';
import { Button } from './components/Button';
import { Header } from './components/Header';
import { Players } from './components/Players';
import { Square } from './components/Square';

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
	const [board, setBoard] = useState(initialState);
	const [turn, setTurn] = useState('❌');
	const [winner, setWinner] = useState(null);

	return (
		<main className='h-screen bg-white'>
			<Header />
			<Board
				board={board}
				setBoard={setBoard}
				turn={turn}
				setTurn={setTurn}
			/>
			<Players turn={turn} />
			<Button />
		</main>
	);
}

export default App;

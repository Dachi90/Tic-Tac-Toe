import { Square } from './Square';

const styleSquare = 'border border-slate-950 rounded-2xl flex items-center justify-center text-5xl bg-gray-300';

export const Board = ({ board, updateBoard }) => {
	const handleClick = (index) => {
		console.log(index);
		const newBoard = [...board];
		newBoard[index] = '❌';
		updateBoard(newBoard);
		console.log(newBoard);
	};

	return (
		<section className='w-[360px] h-[360px] grid grid-cols-3 grid-rows-3 mx-auto gap-1'>
			{board.map((square, index) => {
				return (
					<Square
						key={index}
						index={index}
						board={board}
						handleClick={() => handleClick(index)}
					>
						{square}
					</Square>
				);
			})}
		</section>
	);
};

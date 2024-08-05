import React from 'react';

export const Square = ({ index, handleClick, board }) => {
	return (
		<article
			onClick={() => handleClick(index)}
			className='border border-slate-950 rounded-2xl flex items-center justify-center text-5xl bg-gray-300'
		>
			{board[index]}
		</article>
	);
};

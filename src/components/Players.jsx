import React from 'react';

export const Players = ({ turn }) => {
	const isActive = 'border-2 border-black p-2 bg-cyan-600';
	const notActive = 'border-2 border-black p-2';

	return (
		<article className='flex justify-center p-3 gap-3 text-3xl'>
			<i className={turn === '❌' ? isActive : notActive}>❌</i>
			<i className={turn === '⚪' ? isActive : notActive}>⚪</i>
		</article>
	);
};

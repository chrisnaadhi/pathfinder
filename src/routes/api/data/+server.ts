import { json } from '@sveltejs/kit';

export const GET = () => {
	const number = Math.floor(Math.random() * 10) + 1;
	const res = {
		name: 'PathfinderKit API',
		creator: 'Chrisna Adhi Pranoto',
		randNumber: number
	};

	return json(res);
};

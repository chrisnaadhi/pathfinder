import { json } from '@sveltejs/kit';

export const GET = () => {
	const number = Math.floor(Math.random() * 10) + 1;
	const res = {
		name: 'Chrisna Adhi Pranoto',
		number
	};

	return json(res);
};

import { json } from '@sveltejs/kit';

export const GET = () => {
	const user = {
		name: 'Chrisna Adhi Pranoto',
		role: 'Administrator'
	};

	return json(user);
};

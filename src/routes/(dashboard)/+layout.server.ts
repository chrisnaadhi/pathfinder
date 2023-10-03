import { fail, redirect } from '@sveltejs/kit';

export const load = async ({ locals }) => {
	const session = await locals.auth.validate();

	const userData = session?.user;
	if (!session) throw redirect(302, '/account');

	return {
		userData
	};
};

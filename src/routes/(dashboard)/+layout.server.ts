import { fail, redirect } from '@sveltejs/kit';

export const load = async ({ locals }) => {
	const session = await locals.auth.validate();

	const userData = session?.user;
	const userId = session?.user.id;
	const role = session?.user.userType;

	if (!session) throw redirect(302, '/account');

	return {
		userData,
		role,
		userId
	};
};

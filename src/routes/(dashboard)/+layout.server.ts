import { base } from '$app/paths';
import { redirect } from '@sveltejs/kit';

export const load = async ({ locals }) => {
	const session = await locals.auth.validate();

	const userData = session?.user;
	const userId = session?.user.id;
	const role = session?.user.userType;

	if (!session) throw redirect(302, `${base}/account`);

	return {
		userData,
		role,
		userId
	};
};

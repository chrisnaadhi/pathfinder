import { db } from '$lib/server/drizzle';
import { users } from '$lib/db/pgSchema';
import { redirect } from '@sveltejs/kit';

export const load = async ({ params, locals }) => {
	const userId = params.id;
	const session = await locals.auth.validate();

	if (session?.user.userType !== 1) throw redirect(302, '/manage/member');

	return {
		userId
	};
};

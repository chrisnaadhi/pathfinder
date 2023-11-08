import { db } from '$lib/server/drizzle';
import { users } from '$lib/db/pgSchema';
import { redirect } from '@sveltejs/kit';
import { eq } from 'drizzle-orm';
import { auth } from '$lib/server/lucia';
import { LuciaError } from 'lucia';

export const load = async ({ params, locals }) => {
	const userId = params.id;
	const getUserData = await db.select().from(users).where(eq(users.id, userId));
	const session = await locals.auth.validate();

	if (session?.user.userType !== 1) throw redirect(302, '/manage/member');

	return {
		getUserData
	};
};

export const actions = {
	updatePassword: async ({ request, params }) => {
		const data = await request.formData();
		const userId = params.id;
		const getUserData = await db.select().from(users).where(eq(users.id, userId));
		const username = getUserData[0]?.username!;

		const password = data.get('password') as string;

		try {
			await auth.updateKeyPassword('username', username, password);
		} catch (error) {
			if (error instanceof LuciaError && error.message === 'AUTH_INVALID_KEY_ID') {
				console.log(error);
			}
		}

		throw redirect(302, '/manage/member/' + params.id);
	}
};

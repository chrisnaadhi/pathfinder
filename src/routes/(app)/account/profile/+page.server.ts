import { auth } from '$lib/server/lucia';
import type { PageServerLoad, Actions } from './$types';
import { fail, redirect } from '@sveltejs/kit';

export const load: PageServerLoad = async ({ locals }) => {
	const session = await locals.auth.validate();
	const user = session?.user;

	if (!session) throw redirect(307, 'account');

	return {
		user
	};
};

export const actions: Actions = {
	logout: async ({ locals }) => {
		const session = await locals.auth.validate();
		if (!session) return fail(401);

		await auth.invalidateSession(session.sessionId);
		locals.auth.setSession(null);
		throw redirect(302, 'account');
	}
};

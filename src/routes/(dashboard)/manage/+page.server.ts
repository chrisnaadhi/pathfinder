import { auth } from '$lib/server/lucia';
import { fail, redirect } from '@sveltejs/kit';

export const load = async ({ locals }) => {
	const session = await locals.auth.validate();
	if (!session) return fail(401);
	if (session.user.userType === 3) return fail(403);
	if (session.user.userType === 4) return fail(403);
};

export const actions = {
	signOut: async ({ locals }) => {
		const session = await locals.auth.validate();
		if (!session) return fail(401);
		await auth.invalidateSession(session.sessionId);
		locals.auth.setSession(null);
		throw redirect(302, '/account');
	}
};

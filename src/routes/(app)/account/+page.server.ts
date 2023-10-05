import type { Actions, PageServerLoad } from './$types';
import { auth } from '$lib/server/lucia';
import { error, redirect } from '@sveltejs/kit';
import { LuciaError } from 'lucia';
import { db } from '$lib/server/drizzle';
import { users } from '$lib/db/pgSchema';

const date = new Date();

export const load: PageServerLoad = async ({ locals, cookies }) => {
	const session = await locals.auth.validate();
	const listUsers = await db.select().from(users);
	const loginStatus = cookies.get('loginStatus');

	if (listUsers.length < 1) throw redirect(302, '/new-instance');
	if (session) {
		if (session.user.userType === 1) {
			throw redirect(302, '/manage');
		} else if (session.user.userType === 4) {
			throw redirect(302, '/account/profile');
		} else {
			console.log(session.state);
		}
	}

	return {
		loginStatus
	};
};

export const actions: Actions = {
	signin: async ({ request, locals, cookies }) => {
		const data = await request.formData();
		const username = data.get('username') as string;
		const password = data.get('password-login') as string;

		try {
			const key = await auth.useKey('username', username.toLowerCase(), password);
			const session = await auth.createSession({
				userId: key.userId,
				attributes: {}
			});

			locals.auth.setSession(session);
			if (cookies.get('loginStatus')) {
				cookies.set('loginStatus', 'SUCCESS');
			}
		} catch (err) {
			if (err instanceof LuciaError) {
				cookies.set('loginStatus', err.message, {
					expires: new Date(date.getTime() + 1 * 60000)
				});
			}
		}

		const session = await locals.auth.validate();

		if (session) {
			if (session.user.userType === 1) {
				throw redirect(302, '/manage');
			} else if (session.user.userType === 4) {
				throw redirect(302, '/');
			} else {
				console.log(session.state);
			}
		}
	},
	signup: async ({ request, locals }) => {
		const data = await request.formData();
		const namaLengkap = data.get('nama-lengkap') as string;
		const email = data.get('email-regis') as string;
		const password = data.get('password-regis') as string;
		const username = data.get('email-regis')?.toString().split('@')[0] as string;

		try {
			const user = await auth.createUser({
				key: {
					providerId: 'username',
					providerUserId: username.toLowerCase(),
					password
				},
				attributes: {
					username,
					email,
					full_name: namaLengkap,
					type_id: 4
				}
			});

			const session = await auth.createSession({
				userId: user.userId,
				attributes: {}
			});

			locals.auth.setSession(session);
		} catch (err) {
			console.log(err);
		}

		throw redirect(302, '/');
	}
};

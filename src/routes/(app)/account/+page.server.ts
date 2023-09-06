import type { Actions, PageServerLoad } from './$types';
import { auth } from '$lib/server/lucia';
import { error, redirect } from '@sveltejs/kit';

export const load: PageServerLoad = async ({ locals }) => {};

export const actions: Actions = {
	signin: async ({ request, locals }) => {
		const data = await request.formData();
		const email = data.get('email-login') as string;
		const password = data.get('password-login') as string;

		try {
			const key = await auth.useKey('username', email.toLowerCase(), password);
			const session = await auth.createSession({
				userId: key.userId,
				attributes: {}
			});

			locals.auth.setSession(session);
			console.log('success');
		} catch (err) {
			console.log(err);
		}

		const session = await locals.auth.validate();

		if (session) {
			throw redirect(302, '/manage');
		} else {
			throw error(401, { message: 'Something wrong' });
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
					full_name: namaLengkap
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

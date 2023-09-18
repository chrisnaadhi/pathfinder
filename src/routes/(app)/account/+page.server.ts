import type { Actions, PageServerLoad } from './$types';
import { auth } from '$lib/server/lucia';
import { error, redirect } from '@sveltejs/kit';
import { LuciaError } from 'lucia';

const date = new Date();

export const load: PageServerLoad = async ({ locals, cookies }) => {
	const session = await locals.auth.validate();
	const loginStatus = cookies.get('loginStatus');
	if (session) {
		if (session.user.userType === 57) {
			throw redirect(302, '/manage');
		} else if (session.user.userType === 60) {
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
		const email = data.get('email-login') as string;
		const password = data.get('password-login') as string;

		let luciaError;

		try {
			const key = await auth.useKey('email', email.toLowerCase(), password);
			const session = await auth.createSession({
				userId: key.userId,
				attributes: {}
			});

			locals.auth.setSession(session);
			if (cookies.get('loginStatus')) {
				cookies.delete('loginStatus');
			}
		} catch (err) {
			if (err instanceof LuciaError) {
				cookies.set('loginStatus', err.message, { expires: new Date(date.getTime() + 10 * 60000) });
			}
		}

		const session = await locals.auth.validate();

		if (session) {
			if (session.user.userType === 57) {
				throw redirect(302, '/manage');
			} else if (session.user.userType === 60) {
				throw redirect(302, '/');
			} else {
				console.log(session.state);
			}
		} else {
			console.log(luciaError);
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
					providerId: 'email',
					providerUserId: email.toLowerCase(),
					password
				},
				attributes: {
					username,
					email,
					full_name: namaLengkap,
					type_id: 60
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

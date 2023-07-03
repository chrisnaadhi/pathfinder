import { fail, redirect } from '@sveltejs/kit';
import { auth } from '$lib/server/lucia';
import prisma from '$lib/server/prisma';
import type { PageServerLoad, Actions } from './$types';

export const load: PageServerLoad = async ({ locals }) => {
	const { session } = await locals.auth.validateUser();
	if (session) throw redirect(302, '/manage');
	return {};
};

export const actions: Actions = {
	signin: async ({ request, locals }) => {
		const data = await request.formData();
		const email = data.get('email-login');
		const password = data.get('password-login');

		if (typeof email !== 'string' || typeof password !== 'string') return fail(400);

		try {
			const key = await auth.useKey('email', email, password);
			const session = await auth.createSession(key.userId);
			locals.auth.setSession(session);
		} catch (err) {
			console.log(err);
			return fail(400);
		}
	},
	signup: async ({ request, locals }) => {
		const data = await request.formData();
		const namaLengkap = data.get('nama-lengkap') as string;
		const email = data.get('email-regis');
		const password = data.get('password-regis');
		const username = data.get('email-regis')?.toString().split('@')[0];

		if (typeof email !== 'string' || typeof password !== 'string' || typeof username !== 'string') {
			return fail(400);
		}

		try {
			const user = await auth.createUser({
				primaryKey: {
					providerId: 'email',
					providerUserId: email,
					password: password
				},
				attributes: {
					email
				}
			});

			const session = await auth.createSession(user.userId);
			locals.auth.setSession(session);

			await prisma.userProfile.create({
				data: {
					email: email,
					name: namaLengkap,
					auth_user: {
						connect: {
							id: user.userId
						}
					}
				}
			});
		} catch (err) {
			console.log(err);
			return fail(400);
		}
	}
};

import prisma from '$lib/prismaClient';
import { redirect } from '@sveltejs/kit';
import type { PageServerLoad, Actions } from './$types';

export const load: PageServerLoad = async ({ locals }) => {
	const { user } = await locals.auth.validateUser();
	const userdata = await prisma.userProfile.findUnique({
		where: {
			profile_id: user.userId
		}
	});

	return {
		userdata
	};
};

export const actions: Actions = {
	updateProfile: async ({ locals, request }) => {
		const { user } = await locals.auth.validateUser();
		const data = await request.formData();
		const name = data.get('nama-lengkap') as string;
		const title = data.get('title') as string;
		const bio = data.get('bio') as string;

		await prisma.userProfile.update({
			where: {
				profile_id: user.userId
			},
			data: {
				name: name,
				title: title,
				bio: bio
			}
		});

		throw redirect(304, '/manage');
	}
};

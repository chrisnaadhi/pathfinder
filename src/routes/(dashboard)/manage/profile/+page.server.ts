import { redirect } from '@sveltejs/kit';
import type { PageServerLoad, Actions } from './$types';
import { db } from '$lib/server/drizzle';
import { users } from '$lib/db/pgSchema';

export const load: PageServerLoad = async ({ locals }) => {};

export const actions: Actions = {
	updateProfile: async ({ locals, request }) => {
		const { user } = await locals.auth.validateUser();
		const data = await request.formData();
		const name = data.get('nama-lengkap') as string;
		const title = data.get('title') as string;
		const bio = data.get('bio') as string;

		throw redirect(304, '/manage');
	}
};

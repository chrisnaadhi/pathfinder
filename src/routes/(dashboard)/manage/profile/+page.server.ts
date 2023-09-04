import type { Actions, PageServerLoad } from './$types';
import { redirect } from '@sveltejs/kit';
import { db } from '$lib/server/drizzle';
import { users } from '$lib/db/pgSchema';

export const load: PageServerLoad = async ({ locals }) => {};

export const actions: Actions = {
	updateProfile: async ({ locals, request }) => {
		const session = await locals.auth.validate();
		const data = await request.formData();
		const name = data.get('nama-lengkap');
		const title = data.get('title');
		const bio = data.get('bio');

		throw redirect(304, '/manage');
	}
};

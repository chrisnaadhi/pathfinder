import { redirect } from '@sveltejs/kit';
import { db } from '$lib/server/drizzle';
import { users } from '$lib/db/pgSchema';

/** @type {import('./$types').PageServerLoad} */
export const load = async ({ locals }) => {};

/** @type {import('./$types').Actions} */
export const actions = {
	updateProfile: async ({ locals, request }) => {
		const { user } = await locals.auth.validateUser();
		const data = await request.formData();
		const name = data.get('nama-lengkap');
		const title = data.get('title');
		const bio = data.get('bio');

		throw redirect(304, '/manage');
	}
};

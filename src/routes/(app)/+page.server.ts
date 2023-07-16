import { json } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';
import { db } from '$lib/server/drizzle';
import { users } from '$lib/db/schema';

export const load: PageServerLoad = async ({ request }) => {
	const profileData = await db.select().from(users).all();
	console.log(profileData);
	return {
		msg: 'Can i load this with load function ?',
		statusCode: 200,
		checkParams: request.method
	};
};
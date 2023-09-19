import type { Actions, PageServerLoad } from './$types';
import { db } from '$lib/server/drizzle';
import { users } from '$lib/db/pgSchema';
import { eq } from 'drizzle-orm';
import { redirect } from '@sveltejs/kit';

export const load: PageServerLoad = async ({ request }) => {
	const listUsers = await db.select().from(users);

	if (listUsers.length < 1) throw redirect(302, '/new-instance');

	return {
		msg: 'Can i load this with load function ?',
		statusCode: 200,
		checkParams: request.method,
		listGuide: ['Guide Collections', 'Topic Guides', 'Course List']
	};
};

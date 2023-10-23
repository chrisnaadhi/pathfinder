import { db } from '$lib/server/drizzle';
import { redirect } from '@sveltejs/kit';
import { users } from '$lib/db/pgSchema';

export const load = async ({ request, locals }) => {
	const listUsers = await db?.select().from(users);

	if (!listUsers || listUsers.length < 1) throw redirect(302, '/new-instance');

	return {
		statusCode: 200,
		checkParams: request.method,
		listGuide: ['Guide Collections', 'Topic Guides', 'Course List']
	};
};

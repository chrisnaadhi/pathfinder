import { db } from '$lib/server/drizzle';
import { subjects, users } from '$lib/db/pgSchema';
import { eq } from 'drizzle-orm';
import { redirect } from '@sveltejs/kit';

export const load = async ({ request, locals }) => {
	const getSubjects = await db.select().from(subjects);
	const listUsers = await db.select().from(users);

	if (!listUsers || listUsers.length < 1) throw redirect(302, '/new-instance');

	return {
		statusCode: 200,
		checkParams: request.method,
		listGuide: ['All Subjects', 'Guide Collections', 'Topic Guides', 'Course List'],
		getSubjects
	};
};

import { db } from '$lib/server/drizzle';
import { users } from '$lib/db/pgSchema';
import { eq } from 'drizzle-orm';

export const load = async ({ params, locals }) => {
	const user = params.username;
	const getLibrarian = await db.query.users.findFirst({
		where: eq(users.username, params.username),
		with: {
			department: true,
			subjectsInstructor: true
		}
	});

	return {
		getLibrarian
	};
};

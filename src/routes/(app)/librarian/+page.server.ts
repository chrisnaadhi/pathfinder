import { db } from '$lib/server/drizzle';
import { users } from '$lib/db/pgSchema';
import { and, asc, eq, or } from 'drizzle-orm';

export const load = async () => {
	const getAllLibrarian = await db.query.users.findMany({
		with: {
			userType: true,
			department: true,
			subjectsInstructor: true
		},
		where: or(eq(users.type, 1), eq(users.type, 2)),
		orderBy: [asc(users.type)]
	});
	return {
		getAllLibrarian
	};
};

export const actions = {};

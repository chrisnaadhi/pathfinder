import { users } from '$lib/db/pgSchema';
import { db } from '$lib/server/drizzle';
import { eq } from 'drizzle-orm';

export const load = async ({ params }) => {
	const getUsers = await db.select().from(users).where(eq(users.username, params.id));
	const userProfile = getUsers[0];
	return {
		userProfile
	};
};

import { db } from '$lib/server/drizzle';
import { users } from '$lib/db/pgSchema';
import { eq, or } from 'drizzle-orm';

export const load = async () => {
	const getUsers = await db
		.select()
		.from(users)
		.where(or(eq(users.type, 3), eq(users.type, 4)));

	return {
		getUsers
	};
};

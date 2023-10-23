import { db } from '$lib/server/drizzle';
import { users } from '$lib/db/pgSchema';
import { and, eq, or } from 'drizzle-orm';

export const load = async () => {
	const getAllLibrarian = await db.select().from(users).where(eq(users.type, 2));
	return {
		getAllLibrarian
	};
};

export const actions = {};

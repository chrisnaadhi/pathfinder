import { db } from '$lib/server/drizzle';
import { users } from '$lib/db/pgSchema';
import { eq } from 'drizzle-orm';

export const load = async () => {
	const getSubjectSpecialist = await db.select().from(users).where(eq(users.type, 2));

	return {
		getSubjectSpecialist
	};
};

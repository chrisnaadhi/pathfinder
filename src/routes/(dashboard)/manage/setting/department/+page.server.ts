import { db } from '$lib/server/drizzle.js';
import { department } from '$lib/db/pgSchema.js';

export const load = async () => {
	const getDepartment = await db.select().from(department).orderBy(department.id);
	return {
		getDepartment
	};
};

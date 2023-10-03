import { db } from '$lib/server/drizzle';
import * as schema from '$lib/db/pgSchema';

export const load = async () => {
	const results = await db.select().from(schema.subjects).orderBy(schema.subjects.id);
	return {
		results
	};
};

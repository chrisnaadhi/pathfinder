import type { PageServerLoad } from './$types';
import { db } from '$lib/server/drizzle';
import * as schema from '$lib/db/pgSchema';

export const load: PageServerLoad = async () => {
	const results = await db.select().from(schema.subjects).orderBy(schema.subjects.id);
	return {
		results
	};
};

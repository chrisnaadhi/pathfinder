import type { Load } from '@sveltejs/kit';
import { db } from '$lib/server/drizzle';
import * as schema from '$lib/db/schema';

export const load: Load = async () => {
	const results = await db.select().from(schema.subjects).all();
	return {
		results
	};
};

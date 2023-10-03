import { db } from '$lib/server/drizzle';
import { contents } from '$lib/db/pgSchema';
import { eq } from 'drizzle-orm';

export const load = async ({ request, params }) => {
	const results = await db.select().from(contents).where(eq(contents.id, params.content));

	return {
		results
	};
};

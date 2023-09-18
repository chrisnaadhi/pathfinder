import type { PageServerLoad } from './$types';
import { auth } from '$lib/server/lucia';
import { db } from '$lib/server/drizzle';
import { content } from '$lib/db/pgSchema';
import { eq } from 'drizzle-orm';

export const load: PageServerLoad = async ({ params }) => {
	const contentSearch = await db.select().from(content).where(eq(content.id, params.id));

	return {
		contentSearch
	};
};

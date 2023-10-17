import { contents } from '$lib/db/pgSchema.js';
import { db } from '$lib/server/drizzle';
import { eq } from 'drizzle-orm';

export const load = async ({ params }) => {
	const contentData = await db.select().from(contents).where(eq(contents.id, params.content));
	const selectedContent = contentData[0];

	return {
		selectedContent
	};
};

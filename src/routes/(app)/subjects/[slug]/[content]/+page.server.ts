import { contents } from '$lib/db/pgSchema.js';
import { db } from '$lib/server/drizzle';
import { eq } from 'drizzle-orm';

export const load = async ({ params }) => {
	const getContent = await db.query.contents.findFirst({
		where: eq(contents.id, params.content)
	});

	return {
		getContent
	};
};

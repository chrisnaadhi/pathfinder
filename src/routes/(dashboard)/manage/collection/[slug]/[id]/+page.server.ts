import type { PageServerLoad } from './$types';
import { auth } from '$lib/server/lucia';
import { db } from '$lib/server/drizzle';
import { collections } from '$lib/db/pgSchema';
import { eq } from 'drizzle-orm';

export const load: PageServerLoad = async ({ params }) => {
	const collectionSearch = await db
		.select()
		.from(collections)
		.where(eq(collections.id, Number(params.id)));
	const collectionItem = collectionSearch[0];
	return {
		collectionItem
	};
};

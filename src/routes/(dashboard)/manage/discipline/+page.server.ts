import { db } from '$lib/server/drizzle';
import { discipline } from '$lib/db/pgSchema';

export const load = async ({ request, locals }) => {
	const disciplinesData = await db.select().from(discipline).orderBy(discipline.id);

	return {
		disciplinesData
	};
};

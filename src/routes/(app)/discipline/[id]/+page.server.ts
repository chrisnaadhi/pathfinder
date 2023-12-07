import { db } from '$lib/server/drizzle';
import { discipline } from '$lib/db/pgSchema';
import { eq } from 'drizzle-orm';

export const load = async ({ params }) => {
	const getParams = Number(params.id);
	const getDiscipline = await db.select().from(discipline).where(eq(discipline.id, getParams));

	return {
		getDiscipline
	};
};

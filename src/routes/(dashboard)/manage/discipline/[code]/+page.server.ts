import { db } from '$lib/server/drizzle';
import { discipline } from '$lib/db/pgSchema';
import { eq } from 'drizzle-orm';

export const load = async ({ params }) => {
	const getDiscipline = await db.select().from(discipline).where(eq(discipline.code, params.code));
	const disciplineData = getDiscipline[0];

	return {
		disciplineData
	};
};

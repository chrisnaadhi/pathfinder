import { db } from '$lib/server/drizzle';
import { discipline, subjects } from '$lib/db/pgSchema';
import { eq } from 'drizzle-orm';

export const load = async ({ params, locals }) => {
	const getDiscipline = await db.select().from(discipline).where(eq(discipline.code, params.code));
	const disciplineData = getDiscipline[0];
	const getSubjectOfDiscipline = await db
		.select()
		.from(subjects)
		.where(eq(subjects.disciplineId, disciplineData.id));

	return {
		disciplineData,
		getSubjectOfDiscipline
	};
};

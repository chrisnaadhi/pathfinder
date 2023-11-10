import { db } from '$lib/server/drizzle';
import { discipline, subjects } from '$lib/db/pgSchema';
import { eq } from 'drizzle-orm';

export const load = async ({ params, locals }) => {
	const getDiscipline = await db.select().from(discipline).where(eq(discipline.code, params.code));
	const disciplineData = getDiscipline[0];
	const getSubjectOfDiscipline = await db.query.subjects.findMany({
		where: eq(subjects.disciplineId, disciplineData.id),
		with: {
			instructor: true,
			discipline: true
		}
	});

	return {
		disciplineData,
		getSubjectOfDiscipline
	};
};

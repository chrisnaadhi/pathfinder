import { db } from '$lib/server/drizzle';
import { discipline, faculty } from '$lib/db/pgSchema';
import { eq } from 'drizzle-orm';

export const load = async ({ request, locals }) => {
	const disciplinesData = await db
		.select({
			disciplineName: discipline.disciplineName,
			disciplineDesc: discipline.disciplineDescription,
			disciplineCode: discipline.code,
			disciplineFaculty: faculty.facultyName
		})
		.from(discipline)
		.leftJoin(faculty, eq(faculty.id, discipline.faculty))
		.orderBy(discipline.id);

	return {
		disciplinesData
	};
};

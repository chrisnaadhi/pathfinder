import { db } from '$lib/server/drizzle';
import { subjects, users, discipline } from '$lib/db/pgSchema';
import { eq } from 'drizzle-orm';

export const load = async ({ locals }) => {
	const session = await locals.auth.validate();
	const userType = session?.user.userType;

	let subjectResults = null;

	const disciplineList = await db.select().from(discipline).orderBy(discipline.id);

	if (userType === 1) {
		subjectResults = await db
			.select({
				title: subjects.subjectName,
				description: subjects.subjectDescription,
				type: subjects.type,
				slug: subjects.subjectSlug,
				specialist: users.name,
				subjectDiscipline: subjects.disciplineId,
				disciplineName: discipline.disciplineName,
				disciplineCode: discipline.code
			})
			.from(subjects)
			.leftJoin(users, eq(users.id, subjects.instructor))
			.leftJoin(discipline, eq(discipline.id, subjects.disciplineId))
			.orderBy(subjects.id);
	} else if (userType === 2) {
		subjectResults = await db
			.select({
				title: subjects.subjectName,
				description: subjects.subjectDescription,
				type: subjects.type,
				slug: subjects.subjectSlug,
				specialist: users.name,
				subjectDiscipline: subjects.disciplineId,
				disciplineName: discipline.disciplineName,
				disciplineCode: discipline.code
			})
			.from(subjects)
			.where(eq(subjects.instructor, session?.user?.userId!))
			.leftJoin(users, eq(users.id, subjects.instructor))
			.leftJoin(discipline, eq(discipline.id, subjects.disciplineId))
			.orderBy(subjects.id);
	}

	return {
		subjectResults,
		disciplineList
	};
};

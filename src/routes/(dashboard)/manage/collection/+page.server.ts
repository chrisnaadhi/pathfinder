import { db } from '$lib/server/drizzle';
import { subjects, users, discipline } from '$lib/db/pgSchema';
import { eq } from 'drizzle-orm';

export const load = async () => {
	const results = await db.select().from(subjects).orderBy(subjects.id);
	const subjectResults = await db
		.select({
			title: subjects.subjectName,
			description: subjects.subjectDescription,
			type: subjects.type,
			slug: subjects.subjectSlug,
			specialist: users.name,
			disciplineName: discipline.disciplineName
		})
		.from(subjects)
		.leftJoin(users, eq(users.id, subjects.instructor))
		.leftJoin(discipline, eq(discipline.id, subjects.disciplineId))
		.orderBy(subjects.id);
	return {
		results,
		subjectResults
	};
};

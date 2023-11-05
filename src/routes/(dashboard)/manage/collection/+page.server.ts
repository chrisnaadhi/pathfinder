import { db } from '$lib/server/drizzle';
import { subjects, users, discipline } from '$lib/db/pgSchema';
import { eq } from 'drizzle-orm';

export const load = async ({ locals }) => {
	const session = await locals.auth.validate();
	let subjectResults;

	if (session?.user.userType !== 1) {
		subjectResults = await db
			.select({
				title: subjects.subjectName,
				description: subjects.subjectDescription,
				type: subjects.type,
				slug: subjects.subjectSlug,
				specialist: users.name,
				disciplineName: discipline.disciplineName,
				instructor: subjects.instructor
			})
			.from(subjects)
			.where(eq(subjects.instructor, session?.user.id))
			.leftJoin(users, eq(users.id, subjects.instructor))
			.leftJoin(discipline, eq(discipline.id, subjects.disciplineId))
			.orderBy(subjects.id);
	} else {
		subjectResults = await db
			.select({
				title: subjects.subjectName,
				description: subjects.subjectDescription,
				type: subjects.type,
				slug: subjects.subjectSlug,
				specialist: users.name,
				disciplineName: discipline.disciplineName,
				instructor: subjects.instructor
			})
			.from(subjects)
			.leftJoin(users, eq(users.id, subjects.instructor))
			.leftJoin(discipline, eq(discipline.id, subjects.disciplineId))
			.orderBy(subjects.id);
	}

	return {
		subjectResults
	};
};

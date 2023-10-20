import { db } from '$lib/server/drizzle';
import { subjects, users } from '$lib/db/pgSchema';
import { eq } from 'drizzle-orm';

export const load = async () => {
	const results = await db.select().from(subjects).orderBy(subjects.id);
	const subjectResults = await db
		.select({
			title: subjects.subjectName,
			description: subjects.subjectDescription,
			type: subjects.type,
			slug: subjects.subjectSlug,
			specialist: users.name
		})
		.from(subjects)
		.leftJoin(users, eq(users.id, subjects.instructor))
		.orderBy(subjects.id);
	return {
		results,
		subjectResults
	};
};

import { subjects, users, discipline, contents, collections } from '$lib/db/pgSchema';
import { db } from '$lib/server/drizzle';
import { eq } from 'drizzle-orm';

export const load = async ({ params }) => {
	const getSubject = await db
		.select({
			id: subjects.id,
			subjectName: subjects.subjectName,
			description: subjects.subjectDescription,
			slug: subjects.subjectSlug,
			type: subjects.type,
			keywords: subjects.keywords,
			createdDate: subjects.createdAt,
			updatedDate: subjects.updatedAt,
			instructor: users.name,
			discipline: discipline.disciplineName
		})
		.from(subjects)
		.leftJoin(users, eq(subjects.instructor, users.id))
		.leftJoin(discipline, eq(subjects.disciplineId, discipline.id))
		.where(eq(subjects.subjectSlug, params.slug));

	const subjectGet = await db.query.subjects.findFirst({
		with: {
			collections: true,
			discipline: true,
			instructor: true,
			contents: true
		},
		where: eq(subjects.subjectSlug, params.slug)
	});

	const subjectData = getSubject[0];

	const getCollection = await db.select();

	return {
		subjectData,
		subjectGet
	};
};

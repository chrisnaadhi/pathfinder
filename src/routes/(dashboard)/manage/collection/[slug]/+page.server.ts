import { redirect } from '@sveltejs/kit';
import { asc, eq } from 'drizzle-orm';
import { db } from '$lib/server/drizzle';
import { subjects, collections, users } from '$lib/db/pgSchema';

export const load = async ({ params }) => {
	const getSubject = await db
		.select({
			id: subjects.id,
			slug: subjects.subjectSlug,
			name: subjects.subjectName,
			description: subjects.subjectDescription,
			keywords: subjects.keywords,
			librarian: subjects.instructor
		})
		.from(subjects)
		.where(eq(subjects.subjectSlug, params.slug));

	const subjectData = getSubject[0];

	const getCollection = await db
		.select()
		.from(collections)
		.where(eq(collections.subjectId, subjectData.id))
		.orderBy(asc(collections.id));

	const subjectSpecialist = await db
		.select()
		.from(users)
		.where(eq(users.id, `${subjectData.librarian}`));

	const specialist = subjectSpecialist[0];

	return {
		getCollection,
		subjectData,
		specialist
	};
};

export const actions = {};

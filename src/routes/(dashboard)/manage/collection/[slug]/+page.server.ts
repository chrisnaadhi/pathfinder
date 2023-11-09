import { redirect } from '@sveltejs/kit';
import { asc, eq } from 'drizzle-orm';
import { db } from '$lib/server/drizzle';
import { subjects, collections, users } from '$lib/db/pgSchema';

export const load = async ({ params, locals }) => {
	const session = await locals.auth.validate();
	const getSubject = await db
		.select({
			id: subjects.id,
			slug: subjects.subjectSlug,
			name: subjects.subjectName,
			description: subjects.subjectDescription,
			keywords: subjects.keywords,
			librarian: subjects.instructor,
			type: subjects.type
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
	const isInstructor = subjectData.librarian === session?.user.id ? true : false;

	if (session?.user.userType !== 1) {
		if (session?.user.id !== subjectData.librarian) throw redirect(302, '/manage/discipline#');
	}

	return {
		getCollection,
		subjectData,
		specialist,
		isInstructor
	};
};

export const actions = {};

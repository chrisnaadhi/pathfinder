import { subjects, users, discipline, contents, collections } from '$lib/db/pgSchema';
import { db } from '$lib/server/drizzle';
import { eq } from 'drizzle-orm';

export const load = async ({ params }) => {
	const getSubject = await db.query.subjects.findFirst({
		where: eq(subjects.subjectSlug, params.slug)
	});

	const getCollection = await db.query.collections.findMany({
		where: eq(collections.subjectId, getSubject?.id!),
		with: {
			contents: true,
			creator: true
		}
	});

	const getSubjectSpecialist = await db.query.users.findFirst({
		where: eq(users.id, getSubject?.instructor!)
	});

	return {
		getSubject,
		getCollection,
		getSubjectSpecialist
	};
};

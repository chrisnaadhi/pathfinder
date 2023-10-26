import { subjects, users, discipline, contents, collections } from '$lib/db/pgSchema';
import { db } from '$lib/server/drizzle';
import { eq } from 'drizzle-orm';

export const load = async ({ params }) => {
	const subjectGet = await db.query.subjects.findFirst({
		with: {
			collections: true,
			discipline: true,
			instructor: true,
			contents: true
		},
		where: eq(subjects.subjectSlug, params.slug)
	});

	return {
		subjectGet
	};
};

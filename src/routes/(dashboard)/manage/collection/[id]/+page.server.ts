import { redirect } from '@sveltejs/kit';
import { eq } from 'drizzle-orm';
import { db } from '$lib/server/drizzle';
import { subjects, content } from '$lib/db/pgSchema';

/** @type {import('./$types').PageServerLoad} */
export const load = async ({ params }) => {
	const getSubject = await db
		.select({
			id: subjects.id,
			slug: subjects.subjectSlug,
			name: subjects.subjectName,
			description: subjects.subjectDescription
		})
		.from(subjects)
		.where(eq(subjects.subjectSlug, params.id));

	const subjectData = getSubject[0];

	const getContents = await db.select().from(content).where(eq(content.subject, subjectData.id));

	return {
		getContents,
		subjectData
	};
};

/** @type {import('./$types').Actions} */
export const actions = {};

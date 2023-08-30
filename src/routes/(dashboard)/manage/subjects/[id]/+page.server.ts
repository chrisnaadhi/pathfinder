import type { Actions, PageServerLoad } from './$types';
import { redirect } from '@sveltejs/kit';
import { eq } from 'drizzle-orm';
import { db } from '$lib/server/drizzle';
import { subjects, content } from '$lib/db/pgSchema';

export const load: PageServerLoad = async ({ params }) => {
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

export const actions: Actions = {};

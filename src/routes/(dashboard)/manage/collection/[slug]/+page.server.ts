import type { Actions, PageServerLoad } from './$types';
import { redirect } from '@sveltejs/kit';
import { asc, eq } from 'drizzle-orm';
import { db } from '$lib/server/drizzle';
import { subjects, collections } from '$lib/db/pgSchema';

export const load: PageServerLoad = async ({ params }) => {
	const getSubject = await db
		.select({
			id: subjects.id,
			slug: subjects.subjectSlug,
			name: subjects.subjectName,
			description: subjects.subjectDescription,
			keywords: subjects.keywords
		})
		.from(subjects)
		.where(eq(subjects.subjectSlug, params.slug));

	const subjectData = getSubject[0];

	const getCollection = await db
		.select()
		.from(collections)
		.where(eq(collections.subjectId, subjectData.id))
		.orderBy(asc(collections.id));

	return {
		getCollection,
		subjectData
	};
};

export const actions: Actions = {};

import type { Actions, PageServerLoad } from './$types';
import { db } from '$lib/server/drizzle';
import { subjects } from '$lib/db/pgSchema';
import { eq } from 'drizzle-orm';

export const load: PageServerLoad = async ({ params }) => {
	const searchParam = await db
		.select({
			id: subjects.id
		})
		.from(subjects)
		.where(eq(subjects.subjectSlug, params.id));

	return {
		param: searchParam[0]
	};
};

export const actions: Actions = {
	default: async (event) => {
		const data = event.request.formData();
	}
};

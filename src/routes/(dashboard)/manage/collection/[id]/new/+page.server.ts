import { db } from '$lib/server/drizzle';
import { subjects } from '$lib/db/pgSchema';
import { eq } from 'drizzle-orm';

/** @type {import('./$types').PageServerLoad} */
export const load = async ({ params }) => {
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

/** @type {import('./$types').Actions} */
export const actions = {
	default: async (event) => {
		const data = event.request.formData();
	}
};

import { redirect } from '@sveltejs/kit';
import { db } from '$lib/server/drizzle';

export const load = async () => {
	const getAllSubjects = await db.query.discipline.findMany({
		with: {
			subject: true
		}
	});

	return {
		getAllSubjects
	};
};

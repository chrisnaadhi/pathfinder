import { redirect } from '@sveltejs/kit';
import { db } from '$lib/server/drizzle';
import { subjects } from '$lib/db/pgSchema';

/** @type {import('./$types').Actions} */
export const actions = {
	default: async (event) => {
		const data = await event.request.formData();
		const subjectName = data.get('title');
		const subjectSlug = data.get('slug');
		const subjectStatus = data.get('status');
		const subjectDescription = data.get('description');
		const subjectKeywords = data.get('keywords');
		const subjectType = data.get('typesubject');

		await db.insert(subjects).values({
			subjectName: subjectName,
			subjectSlug: subjectSlug,
			subjectDescription: subjectDescription,
			keywords: subjectKeywords,
			subjectStatus: subjectStatus,
			type: subjectType
		});

		throw redirect(302, '/manage/collection');
	}
};

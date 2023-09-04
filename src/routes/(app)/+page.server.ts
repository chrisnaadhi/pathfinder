import { db } from '$lib/server/drizzle';
import { subjects, content } from '$lib/db/pgSchema';
import { eq } from 'drizzle-orm';

/** @type {import('./$types').Actions} */
export const load = async ({ request }) => {
	const listSubject = await db
		.select({
			id: content.id,
			nama: subjects.subjectName,
			contentTitle: content.title
		})
		.from(subjects)
		.leftJoin(content, eq(subjects.id, content.subject));

	const results = listSubject.reduce((acc, val) => {
		acc[val.nama] = acc[val.nama] || [];
		acc[val.nama].push(val);

		return acc;
	}, {});

	return {
		msg: 'Can i load this with load function ?',
		statusCode: 200,
		checkParams: request.method,
		listGuide: ['Guide Collections', 'Topic Guides', 'Course List'],
		lists: results
	};
};

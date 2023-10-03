import { redirect } from '@sveltejs/kit';
import { eq } from 'drizzle-orm';
import { db } from '$lib/server/drizzle';
import { subjects } from '$lib/db/pgSchema';

const date = new Date();

export const load = async ({ params }) => {
	const getSubject = await db.select().from(subjects).where(eq(subjects.subjectSlug, params.slug));

	const subjectData = getSubject[0];

	return {
		subjectData
	};
};

export const actions = {
	updateData: async (event) => {
		const data = await event.request.formData();
		const subjectName = data.get('title');
		const subjectSlug = data.get('slug');
		const subjectStatus = data.get('status');
		const subjectDescription = data.get('description');
		const subjectKeywords = data.get('keywords');
		const subjectType = data.get('typesubject');

		await db
			.update(subjects)
			.set({
				subjectName: subjectName as string,
				subjectSlug: subjectSlug as string,
				subjectDescription: subjectDescription as string,
				subjectStatus: subjectStatus as string,
				keywords: subjectKeywords as string,
				type: subjectType as string,
				updatedAt: new Date(date.toISOString())
			})
			.where(eq(subjects.subjectSlug, event.params.slug));

		throw redirect(302, '/manage/collection');
	},
	deleteData: async (event) => {
		const data = await event.request.formData();
		const isDelete = data.get('confirmation');

		if (isDelete === 'delete') {
			await db.delete(subjects).where(eq(subjects.subjectSlug, event.params.slug));
			throw redirect(302, '/manage/collection');
		} else if (isDelete === 'keep') {
			throw redirect(300, '/manage/collection/' + event.params.slug);
		} else {
			console.log('Nothing Happen');
		}
	}
};

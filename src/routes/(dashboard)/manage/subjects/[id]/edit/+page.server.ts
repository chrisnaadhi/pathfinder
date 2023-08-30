import type { Actions, PageServerLoad } from './$types';
import { redirect } from '@sveltejs/kit';
import { eq } from 'drizzle-orm';
import { db } from '$lib/server/drizzle';
import { subjects } from '$lib/db/pgSchema';

const date = new Date();

export const load: PageServerLoad = async ({ params }) => {
	const getSubject = await db.select().from(subjects).where(eq(subjects.subjectSlug, params.id));

	const subjectData = getSubject[0];

	return {
		subjectData
	};
};

export const actions: Actions = {
	updateData: async (event) => {
		const data = await event.request.formData();
		const subjectName = data.get('title') as string;
		const subjectSlug = data.get('slug') as string;
		const subjectStatus = data.get('status') as string;
		const subjectDescription = data.get('description') as string;
		const subjectKeywords = data.get('keywords') as string;
		const subjectType = data.get('typesubject') as string;

		await db
			.update(subjects)
			.set({
				subjectName: subjectName,
				subjectSlug: subjectSlug,
				subjectDescription: subjectDescription,
				subjectStatus: subjectStatus,
				keywords: subjectKeywords,
				type: subjectType,
				updatedAt: new Date(date.toISOString())
			})
			.where(eq(subjects.subjectSlug, event.params.id));

		throw redirect(302, '/manage/subjects');
	},
	deleteData: async (event) => {
		const data = await event.request.formData();
		const isDelete = data.get('confirmation');

		if (isDelete === 'delete') {
			await db.delete(subjects).where(eq(subjects.subjectSlug, event.params.id));
			throw redirect(302, '/manage/subjects');
		} else if (isDelete === 'keep') {
			throw redirect(300, '/manage/subjects/' + event.params.id);
		} else {
			console.log('Nothing Happen');
		}
	}
};

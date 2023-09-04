
import { redirect } from '@sveltejs/kit';
import { eq } from 'drizzle-orm';
import { db } from '$lib/server/drizzle';
import { subjects } from '$lib/db/pgSchema';

<<<<<<<< HEAD:src/routes/(dashboard)/manage/collection/[id]/edit/+page.server.js
const date = new Date();

/** @type {import('./$types').PageServerLoad} */
export const load = async ({ params }) => {
========
export const load: PageServerLoad = async ({ params }) => {
>>>>>>>> parent of cee3d44 (update project):src/routes/(dashboard)/manage/collection/[id]/edit/+page.server.ts
	const getSubject = await db.select().from(subjects).where(eq(subjects.subjectSlug, params.id));

	const subjectData = getSubject[0];

	return {
		subjectData
	};
};

/** @type {import('./$types').Actions} */
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
				subjectName: subjectName,
				subjectSlug: subjectSlug,
				subjectDescription: subjectDescription,
				subjectStatus: subjectStatus,
				keywords: subjectKeywords,
				type: subjectType
			})
			.where(eq(subjects.subjectSlug, event.params.id));

		throw redirect(302, '/manage/collection');
	},
	deleteData: async (event) => {
		const data = await event.request.formData();
		const isDelete = data.get('confirmation');

		if (isDelete === 'delete') {
			await db.delete(subjects).where(eq(subjects.subjectSlug, event.params.id));
			throw redirect(302, '/manage/collection');
		} else if (isDelete === 'keep') {
			throw redirect(300, '/manage/collection/' + event.params.id);
		} else {
			console.log('Nothing Happen');
		}
	}
};

import type { Actions, PageServerLoad } from './$types';
import { db } from '$lib/server/drizzle';
import { subjects, content } from '$lib/db/pgSchema';
import { eq } from 'drizzle-orm';
import { redirect } from '@sveltejs/kit';

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
	tambah: async (event) => {
		const data = await event.request.formData();
		const title = data.get('title') as string;
		const description = data.get('description') as string;
		const contents = data.get('contents') as string;
		const tag = data.get('tag') as string;

		const searchParam = await db
			.select({
				id: subjects.id,
				slug: subjects.subjectSlug
			})
			.from(subjects)
			.where(eq(subjects.subjectSlug, event.params.id));

		await db.insert(content).values({
			title,
			contentDescription: description,
			contents: contents,
			tag: tag,
			subject: searchParam[0].id
		});

		throw redirect(302, '/manage/collection/' + searchParam[0].slug);
	}
};

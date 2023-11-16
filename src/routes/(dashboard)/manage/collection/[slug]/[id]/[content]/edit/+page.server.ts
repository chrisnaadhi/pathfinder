import { contents } from '$lib/db/pgSchema.js';
import { db } from '$lib/server/drizzle';
import { eq } from 'drizzle-orm';
import { redirect } from '@sveltejs/kit';
import { base } from '$app/paths';

const date = new Date();

export const load = async ({ params }) => {
	const contentData = await db.select().from(contents).where(eq(contents.id, params.content));
	const selectedContent = contentData[0];

	return {
		selectedContent
	};
};

export const actions = {
	updateKonten: async ({ request, params }) => {
		const data = await request.formData();
		const title = data.get('title') as string;
		const description = data.get('deskripsi') as string;
		const content = data.get('contents') as string;
		const tags = data.get('keywords') as string;

		await db
			.update(contents)
			.set({
				title,
				contents: content,
				contentDescription: description,
				tag: tags,
				updatedAt: new Date(date.toISOString())
			})
			.where(eq(contents.id, params.content));

		throw redirect(302, `${base}/manage/collection/${params.slug}/${params.id}`);
	}
};

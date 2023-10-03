import { contents } from '$lib/db/pgSchema';
import { db } from '$lib/server/drizzle';
import { redirect } from '@sveltejs/kit';

export const actions = {
	tambahKonten: async ({ request, locals, params }) => {
		const session = await locals.auth.validate();
		const data = await request.formData();
		const title = data.get('title') as string;
		const description = data.get('deskripsi') as string;
		const content = data.get('contents') as string;
		const tags = data.get('keywords') as string;

		await db.insert(contents).values({
			title,
			contents: content,
			contentDescription: description,
			tag: tags,
			creator: session?.user.userId,
			collectionId: Number(params.id)
		});

		throw redirect(302, `/manage/collection/${params.slug}/${params.id}`);
	}
};

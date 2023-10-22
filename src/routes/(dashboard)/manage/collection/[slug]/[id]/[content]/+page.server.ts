import { db } from '$lib/server/drizzle';
import { contents, users } from '$lib/db/pgSchema';
import { eq } from 'drizzle-orm';
import { redirect } from '@sveltejs/kit';

export const load = async ({ params }) => {
	const results = await db
		.select({
			title: contents.title,
			contentsFull: contents.contents,
			createdAt: contents.createdAt,
			updatedAt: contents.updatedAt,
			creator: users.name,
			tag: contents.tag,
			id: contents.collectionId,
			description: contents.contentDescription
		})
		.from(contents)
		.leftJoin(users, eq(users.id, contents.creator))
		.where(eq(contents.id, params.content));
	const content = results[0];

	return {
		content
	};
};

export const actions = {
	deleteData: async ({ request, params, url }) => {
		const data = await request.formData();
		const isDelete = data.get('confirmation');
		const backLink = url.pathname.split('/');
		backLink.pop();
		const back = backLink.join('/');
		if (isDelete === 'delete') {
			await db.delete(contents).where(eq(contents.id, params.content));
			throw redirect(302, back);
		} else {
			throw redirect(302, url.pathname);
		}
	}
};

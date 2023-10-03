import { db } from '$lib/server/drizzle';
import { contents } from '$lib/db/pgSchema';
import { eq } from 'drizzle-orm';
import { redirect } from '@sveltejs/kit';

export const load = async ({ request, params }) => {
	const results = await db.select().from(contents).where(eq(contents.id, params.content));

	return {
		results
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

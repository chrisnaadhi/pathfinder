import type { PageServerLoad, Actions } from './$types';
import { db } from '$lib/server/drizzle';
import { collections, contents } from '$lib/db/pgSchema';
import { eq } from 'drizzle-orm';
import { redirect } from '@sveltejs/kit';

const date = new Date();

export const load: PageServerLoad = async ({ params, url }) => {
	const collectionSearch = await db
		.select()
		.from(collections)
		.where(eq(collections.id, Number(params.id)));
	const collectionItem = collectionSearch[0];

	const contentsList = await db.select().from(contents);

	return {
		collectionItem,
		contentsList
	};
};

export const actions: Actions = {
	tambahKonten: async ({ locals }) => {
		const session = await locals.auth.validate();
	},
	editKonten: async ({ request, params, url }) => {
		const data = await request.formData();
		const judul = data.get('namakoleksi') as string;
		const status = data.get('statuskoleksi') as string;
		const deskripsi = data.get('deskripsikoleksi') as string;
		const slugTitle = judul
			.toLowerCase()
			.replace(/[^\w\s]/gi, '')
			.split(' ')
			.join('-');

		await db
			.update(collections)
			.set({
				name: judul,
				status,
				slug: slugTitle,
				deskripsi,
				updatedAt: new Date(date.toISOString())
			})
			.where(eq(collections.id, Number(params.id)));

		throw redirect(302, url.pathname);
	},
	deleteData: async (event) => {
		const data = await event.request.formData();
		const isDelete = data.get('confirmation');

		if (isDelete === 'delete') {
			await db.delete(collections).where(eq(collections.id, Number(event.params.id)));
			throw redirect(302, '/manage/collection/' + event.params.slug);
		} else if (isDelete === 'keep') {
			throw redirect(300, '/manage/collection/' + event.params.slug + '/' + event.params.id);
		} else {
			console.log('Nothing Happen');
		}
	}
};

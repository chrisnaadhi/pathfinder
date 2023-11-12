import { systemConfigs, systemContents } from '$lib/db/pgSchema';
import { db } from '$lib/server/drizzle';
import { fail, redirect } from '@sveltejs/kit';
import { eq } from 'drizzle-orm';

export const load = async () => {
	const deskripsiUtama = await db.query.systemContents.findFirst({
		where: eq(systemContents.title, 'deskripsiUtama')
	});

	const deskripsiPathfinder = await db.query.systemContents.findFirst({
		where: eq(systemContents.title, 'deskripsiPathfinder')
	});

	return {
		deskripsiUtama,
		deskripsiPathfinder
	};
};

export const actions = {
	updateContents: async ({ request }) => {
		const data = await request.formData();
		const deskripsiUtama = data.get('deskripsi-utama') as string;
		const deskripsiPathfinder = data.get('deskripsi-pathfinder') as string;

		const getContents = await db.query.systemContents.findMany();

		if (getContents.length === 0) {
			try {
				await db.insert(systemContents).values([
					{
						title: 'deskripsiUtama',
						contents: deskripsiUtama
					},
					{
						title: 'deskripsiPathfinder',
						contents: deskripsiPathfinder
					}
				]);
			} catch (error) {
				console.log(error);
				return fail(403, { message: error });
			}
		} else {
			try {
				await db
					.update(systemContents)
					.set({
						contents: deskripsiUtama
					})
					.where(eq(systemContents.title, 'deskripsiUtama'));
				await db
					.update(systemContents)
					.set({
						contents: deskripsiPathfinder
					})
					.where(eq(systemContents.title, 'deskripsiPathfinder'));
			} catch (error) {
				console.log(error);
				return fail(403, { message: error });
			}
		}

		throw redirect(302, '/manage/setting');
	}
};

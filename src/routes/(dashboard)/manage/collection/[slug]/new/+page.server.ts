import { db } from '$lib/server/drizzle';
import { subjects, collections } from '$lib/db/pgSchema';
import { eq } from 'drizzle-orm';
import { redirect } from '@sveltejs/kit';

export const load = async ({ params }) => {
	const searchParam = await db
		.select({
			id: subjects.id
		})
		.from(subjects)
		.where(eq(subjects.subjectSlug, params.slug));

	return {
		param: searchParam[0]
	};
};

export const actions = {
	tambah: async (event) => {
		const session = await event.locals.auth.validate();
		const data = await event.request.formData();
		const name = data.get('title') as string;
		const slug = data.get('slug') as string;
		const status = data.get('status') as string;
		const deskripsi = data.get('deskripsi') as string;

		const searchParam = await db
			.select({
				id: subjects.id,
				slug: subjects.subjectSlug
			})
			.from(subjects)
			.where(eq(subjects.subjectSlug, event.params.slug));

		await db.insert(collections).values({
			name,
			slug,
			status,
			deskripsi,
			subjectId: searchParam[0].id,
			creator: session?.user.userId
		});

		throw redirect(302, '/manage/collection/' + searchParam[0].slug);
	}
};

import { writeFileSync, mkdirSync } from 'fs';
import type { Actions, PageServerLoad } from './$types';
import { redirect } from '@sveltejs/kit';
import { db } from '$lib/server/drizzle';
import { users } from '$lib/db/pgSchema';
import { eq } from 'drizzle-orm';

export const load: PageServerLoad = async ({ locals }) => {
	const session = await locals.auth.validate();
	const userData = session?.user;

	return {
		userData
	};
};

export const actions: Actions = {
	updateProfile: async ({ locals, request }) => {
		const session = await locals.auth.validate();
		const data = await request.formData();
		const userId = session?.user.userId as string;
		const name = data.get('nama-lengkap') as string;
		const title = data.get('title') as string;
		const department = data.get('department') as string;
		const bio = data.get('bio') as string;
		const photo = data.get('photo') as File;
		const splitPhotoName = photo.name.split('.');
		splitPhotoName.splice(0, 1, userId);
		const joinedPhoto = splitPhotoName.join('.');
		console.log(splitPhotoName, joinedPhoto);

		writeFileSync(`static/uploads/profile/${joinedPhoto}`, Buffer.from(await photo.arrayBuffer()));

		await db
			.update(users)
			.set({
				name,
				title,
				bio,
				photo: '/uploads/profile/' + joinedPhoto
			})
			.where(eq(users.id, userId));

		throw redirect(304, '/manage');
	}
};

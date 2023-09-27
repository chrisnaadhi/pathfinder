import { writeFileSync } from 'fs';
import type { Actions, PageServerLoad } from './$types';
import { redirect } from '@sveltejs/kit';
import { db } from '$lib/server/drizzle';
import { department, users } from '$lib/db/pgSchema';
import { eq } from 'drizzle-orm';

export const load: PageServerLoad = async ({ locals }) => {
	const session = await locals.auth.validate();
	const userData = session?.user;
	const departmentList = await db.select().from(department);

	return {
		userData,
		departmentList
	};
};

export const actions: Actions = {
	updateProfile: async ({ locals, request, fetch }) => {
		const session = await locals.auth.validate();
		const data = await request.formData();
		const userId = session?.user.userId as string;
		const name = data.get('nama-lengkap') as string;
		const title = data.get('title') as string;
		const department = data.get('department');
		const bio = data.get('bio') as string;
		const photo = data.get('photo') as File;
		let joinedPhoto = session?.user.photo;
		if (photo.name !== undefined && photo.size !== 0) {
			const splitPhotoName = photo.name.split('.');
			splitPhotoName.splice(0, 1, userId);
			joinedPhoto = splitPhotoName.join('.');
			joinedPhoto = '/uploads/profile/' + joinedPhoto;
			writeFileSync(`static${joinedPhoto}`, Buffer.from(await photo.arrayBuffer()));
		}

		await db
			.update(users)
			.set({
				name,
				title,
				bio,
				departmentId: Number(department),
				photo: joinedPhoto
			})
			.where(eq(users.id, userId));

		await fetch('/api/files', {
			method: 'PUT',
			body: photo
		});

		throw redirect(304, '/manage');
	}
};

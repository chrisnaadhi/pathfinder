import { db } from '$lib/server/drizzle';
import { discipline, faculty } from '$lib/db/pgSchema';
import { redirect } from '@sveltejs/kit';
import { base } from '$app/paths';

export const load = async ({ locals }) => {
	const session = await locals.auth.validate();
	const getAllFaculty = await db.select().from(faculty);

	if (session?.user.userType !== 1) throw redirect(302, '/manage/discipline');

	return {
		getAllFaculty
	};
};

export const actions = {
	createDiscipline: async ({ locals, params, request }) => {
		const data = await request.formData();
		const session = await locals.auth.validate();
		const name = data.get('discipline') as string;
		const code = data.get('code') as string;
		const description = data.get('description') as string;
		const faculty = data.get('faculty');

		await db.insert(discipline).values({
			disciplineName: name,
			code,
			disciplineDescription: description,
			faculty: Number(faculty),
			creator: session?.user.userId
		});

		throw redirect(302, `${base}/manage/discipline`);
	}
};

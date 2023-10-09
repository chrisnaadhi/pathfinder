import { db } from '$lib/server/drizzle.js';
import { discipline } from '$lib/db/pgSchema.js';
import { redirect } from '@sveltejs/kit';

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

		throw redirect(302, '/manage/discipline');
	}
};

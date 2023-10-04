import { db } from '$lib/server/drizzle';
import { discipline } from '$lib/db/pgSchema';
import { eq } from 'drizzle-orm';
import { redirect } from '@sveltejs/kit';

const date = new Date();

export const load = async ({ params }) => {
	const getDiscipline = await db.select().from(discipline).where(eq(discipline.code, params.code));
	const disciplineData = getDiscipline[0];

	return {
		disciplineData
	};
};

export const actions = {
	updateData: async ({ request, params }) => {
		const data = await request.formData();
		const name = data.get('discipline') as string;
		const code = data.get('code') as string;
		const description = data.get('description') as string;
		const faculty = data.get('faculty') as string;

		await db
			.update(discipline)
			.set({
				disciplineName: name,
				code: code,
				disciplineDescription: description,
				faculty: faculty,
				updatedAt: new Date(date.toISOString())
			})
			.where(eq(discipline.code, params.code));

		throw redirect(302, '/');
	},
	deleteData: async ({ request, params }) => {
		const data = await request.formData();
	}
};

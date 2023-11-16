import { db } from '$lib/server/drizzle';
import { discipline, faculty } from '$lib/db/pgSchema';
import { eq } from 'drizzle-orm';
import { redirect } from '@sveltejs/kit';
import { base } from '$app/paths';

const date = new Date();

export const load = async ({ params, locals }) => {
	const getSession = await locals.auth.validate();
	const getDiscipline = await db.select().from(discipline).where(eq(discipline.code, params.code));
	const getAllFaculty = await db.select().from(faculty);
	const joinFaculty = await db
		.select()
		.from(discipline)
		.fullJoin(faculty, eq(discipline.faculty, faculty.id));
	const disciplineData = getDiscipline[0];

	if (getSession?.user.userType !== 1) throw redirect(302, '/manage/discipline');

	return {
		disciplineData,
		getAllFaculty,
		joinFaculty
	};
};

export const actions = {
	updateData: async ({ request, params }) => {
		const data = await request.formData();
		const name = data.get('discipline') as string;
		const code = data.get('code') as string;
		const description = data.get('description') as string;
		const faculty = data.get('faculty');

		await db
			.update(discipline)
			.set({
				disciplineName: name,
				code: code,
				disciplineDescription: description,
				faculty: Number(faculty),
				updatedAt: new Date(date.toISOString())
			})
			.where(eq(discipline.code, params.code));

		throw redirect(302, `${base}/manage/discipline`);
	},
	deleteData: async ({ request, params }) => {
		const dataCollection = params.code;

		await db.delete(discipline).where(eq(discipline.code, dataCollection));

		throw redirect(302, `${base}/manage/discipline`);
	}
};

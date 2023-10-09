import { faculty } from '$lib/db/pgSchema';
import { db } from '$lib/server/drizzle';
import { redirect } from '@sveltejs/kit';

export const actions = {
	addFakultas: async ({ request }) => {
		const data = await request.formData();
		const nama = data.get('namafakultas') as string;
		const value = data.get('slug') as string;

		await db.insert(faculty).values({
			facultyName: nama,
			facultyValue: value
		});

		throw redirect(302, '/manage/setting');
	}
};

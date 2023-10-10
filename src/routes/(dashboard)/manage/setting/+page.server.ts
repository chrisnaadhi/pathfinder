import { faculty } from '$lib/db/pgSchema';
import { db } from '$lib/server/drizzle';
import { redirect } from '@sveltejs/kit';

export const load = async ({ locals }) => {
	const session = await locals.auth.validate();
	const checkUserType = session?.user.userType;
	const getFaculty = await db.select().from(faculty);

	if (checkUserType !== 1) {
		throw redirect(302, '/manage');
	}

	return {
		checkUserType,
		getFaculty
	};
};

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

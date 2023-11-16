import { department, faculty } from '$lib/db/pgSchema';
import { db } from '$lib/server/drizzle';
import { redirect } from '@sveltejs/kit';
import { base } from '$app/paths';
import { eq } from 'drizzle-orm';

export const load = async ({ locals }) => {
	const session = await locals.auth.validate();
	const checkUserType = session?.user.userType;
	const getFaculty = await db.select().from(faculty);

	if (checkUserType !== 1) {
		throw redirect(302, `${base}/manage`);
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

		throw redirect(302, `${base}/manage/setting`);
	},
	editFakultas: async ({ request }) => {
		const data = await request.formData();
		const nama = data.get('namafakultas') as string;
		const value = data.get('slug') as string;
		const id = data.get('idfakultas');

		await db
			.update(faculty)
			.set({
				facultyName: nama,
				facultyValue: value
			})
			.where(eq(faculty.id, Number(id)));

		throw redirect(302, `${base}/manage/setting`);
	},
	deleteData: async ({ request }) => {
		const data = await request.formData();
		const confirmation = data.get('confirmation') as string;
		const id = data.get('idData');

		if (confirmation === 'delete') {
			await db.delete(faculty).where(eq(faculty.id, Number(id)));
		} else {
			console.log('Nothing deleted');
		}

		throw redirect(302, `${base}/manage/setting`);
	}
};

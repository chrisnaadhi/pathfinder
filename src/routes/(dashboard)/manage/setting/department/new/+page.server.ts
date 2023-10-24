import { db } from '$lib/server/drizzle';
import { department } from '$lib/db/pgSchema';
import { redirect } from '@sveltejs/kit';

export const actions = {
	tambahDepartment: async ({ request }) => {
		const data = await request.formData();
		const name = data.get('departmentname') as string;
		const description = data.get('departmentdescription') as string;
		const telephone = data.get('departmenttelephone') as string;
		const email = data.get('departmentmail') as string;
		const url = data.get('departmenturl') as string;

		await db.insert(department).values({
			departmentName: name,
			departmentDescription: description,
			telephone,
			email,
			url
		});

		throw redirect(302, '/manage/setting/department');
	}
};

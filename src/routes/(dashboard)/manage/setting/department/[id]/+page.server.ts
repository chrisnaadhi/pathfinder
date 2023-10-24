import { db } from '$lib/server/drizzle';
import { department } from '$lib/db/pgSchema';
import { eq } from 'drizzle-orm';
import { redirect } from '@sveltejs/kit';

export const load = async ({ params }) => {
	const getDepartment = await db
		.select()
		.from(department)
		.where(eq(department.id, Number(params.id)));
	const departmentData = getDepartment[0];

	return {
		departmentData
	};
};

export const actions = {
	updateDepartment: async ({ request, params }) => {
		const data = await request.formData();
		const id = Number(params.id);
		const name = data.get('departmentname') as string;
		const description = data.get('departmentdescription') as string;
		const telephone = data.get('departmenttelephone') as string;
		const email = data.get('departmentmail') as string;
		const url = data.get('departmenturl') as string;

		await db
			.update(department)
			.set({
				departmentName: name,
				departmentDescription: description,
				telephone,
				email,
				url
			})
			.where(eq(department.id, id));

		throw redirect(302, '/manage/setting/department');
	},
	deleteData: async ({ request }) => {
		const data = await request.formData();
		const confirmation = data.get('confirmation') as string;
		const idData = data.get('idData');

		if (confirmation === 'delete') {
			await db.delete(department).where(eq(department.id, Number(idData)));
		}

		throw redirect(302, '/manage/setting/department');
	}
};

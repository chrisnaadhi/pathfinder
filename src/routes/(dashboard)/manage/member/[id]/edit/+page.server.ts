import { db } from '$lib/server/drizzle';
import { department, userType, users } from '$lib/db/pgSchema';
import { eq } from 'drizzle-orm';
import { redirect } from '@sveltejs/kit';

export const load = async ({ params }) => {
	const getUserData = await db.select().from(users).where(eq(users.id, params.id));
	const getDepartment = await db.select().from(department).orderBy(department.id);
	const getRole = await db.select().from(userType).orderBy(userType.id);
	const userData = getUserData[0];

	return {
		userData,
		getDepartment,
		getRole
	};
};

export const actions = {
	updateData: async ({ request, params }) => {
		const data = await request.formData();
		const nama = data.get('nama') as string;
		const title = data.get('title') as string;
		const username = data.get('username') as string;
		const email = data.get('email') as string;
		const department = data.get('department');
		const role = data.get('role');

		await db
			.update(users)
			.set({
				name: nama,
				title,
				username,
				email,
				departmentId: Number(department),
				type: Number(role)
			})
			.where(eq(users.id, params.id));

		throw redirect(302, '/manage/member/' + params.id);
	}
};

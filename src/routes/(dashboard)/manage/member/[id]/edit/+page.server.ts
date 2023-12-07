import { db } from '$lib/server/drizzle';
import { department, userType, users } from '$lib/db/pgSchema';
import { eq } from 'drizzle-orm';
import { redirect } from '@sveltejs/kit';
import { base } from '$app/paths';

export const load = async ({ params, locals }) => {
	const getUserData = await db.select().from(users).where(eq(users.id, params.id));
	const getDepartment = await db.select().from(department).orderBy(department.id);
	const getRole = await db.select().from(userType).orderBy(userType.id);
	const loggedInUser = await locals.auth.validate();
	const userData = getUserData[0];

	if (loggedInUser?.user.userType !== 1) throw redirect(302, `${base}/manage/member`);

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
		const department = data.get('department');
		const role = data.get('role');

		console.log(role, department);

		await db
			.update(users)
			.set({
				name: nama,
				title,
				departmentId: Number(department),
				type: role === null ? 1 : Number(role)
			})
			.where(eq(users.id, params.id));

		throw redirect(302, `${base}/manage/member/${params.id}`);
	}
};

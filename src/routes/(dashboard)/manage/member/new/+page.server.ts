import { department } from '$lib/db/pgSchema.js';
import { db } from '$lib/server/drizzle';
import { auth } from '$lib/server/lucia';
import { LuciaError } from 'lucia';
import { redirect } from '@sveltejs/kit';
import { base } from '$app/paths';

export const load = async ({ locals }) => {
	const getDepartment = await db.select().from(department);
	const userSession = await locals.auth.validate();
	const userRole = userSession?.user.userType;

	return {
		getDepartment,
		userRole
	};
};

export const actions = {
	addUser: async ({ request, cookies }) => {
		const data = await request.formData();
		const name = data.get('name') as string;
		const username = data.get('username') as string;
		const email = data.get('email') as string;
		const password = data.get('password') as string;
		const role = data.get('role');
		const title = data.get('title');
		const department = data.get('department');

		try {
			await auth.createUser({
				key: {
					providerId: 'username',
					providerUserId: username.toLowerCase(),
					password
				},
				attributes: {
					full_name: name,
					username: username,
					email: email,
					title: title,
					type_id: role,
					department_id: department
				}
			});
		} catch (error) {
			if (error instanceof LuciaError && error.message === 'AUTH_DUPLICATE_KEY_ID') {
				cookies.set('createStatus', error.message);
			}
			console.log(error);
		}

		throw redirect(302, `${base}/manage/member`);
	}
};

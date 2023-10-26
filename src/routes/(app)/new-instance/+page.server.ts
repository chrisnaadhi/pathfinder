import { db } from '$lib/server/drizzle';
import { auth } from '$lib/server/lucia';
import { users, userType, department, faculty } from '$lib/db/pgSchema';
import { userRole, departmentList, facultyName } from '$lib/utils/dummyData';
import { fail, redirect } from '@sveltejs/kit';

const dummyFaculty = facultyName();
const dummyRole = userRole();
const dummyDepartment = departmentList();

export const load = async ({ cookies, locals }) => {
	const status = cookies.get('seedState');
	const firstUserData = await db.select().from(users);
	const session = await locals.auth.validate();

	let isAvailable;
	if (firstUserData.length > 0) {
		isAvailable = true;
	} else {
		isAvailable = false;
	}

	if (session) throw redirect(302, '/manage');

	return {
		status,
		isAvailable
	};
};

export const actions = {
	default: async ({ request, cookies, locals }) => {
		const formData = await request.formData();
		const email = formData.get('email') as string;
		const username = formData.get('username') as string;
		const password = formData.get('password') as string;

		try {
			await db.insert(userType).values(dummyRole).onConflictDoNothing();

			await db.insert(department).values(dummyDepartment).onConflictDoNothing();

			await db.insert(faculty).values(dummyFaculty).onConflictDoNothing();

			const user = await auth.createUser({
				key: {
					providerId: 'username',
					providerUserId: username?.toLowerCase(),
					password
				},
				attributes: {
					username: username,
					email: email,
					full_name: 'Administrator Pathfinder',
					type_id: 1
				}
			});

			const session = await auth.createSession({
				userId: user.userId,
				attributes: {}
			});

			locals.auth.setSession(session);
		} catch (error) {
			console.log(error);
			return fail(403, { message: error });
		}

		throw redirect(302, '/manage');
	}
};

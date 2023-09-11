import type { Actions, PageServerLoad } from './$types';
import { db } from '$lib/server/drizzle';
import { auth } from '$lib/server/lucia';
import { users, userType, department } from '$lib/db/pgSchema';
import { fail, redirect } from '@sveltejs/kit';

export const load: PageServerLoad = async ({ cookies }) => {
	const status = cookies.get('seedState');

	return {
		status
	};
};

export const actions: Actions = {
	default: async ({ request, cookies, locals }) => {
		const formData = await request.formData();
		const email = formData.get('email') as string;
		const password = formData.get('password') as string;

		try {
			await db
				.insert(userType)
				.values([
					{
						id: 1,
						typeName: 'Super Admin',
						description: 'Super Administrator PathfinderKit',
						typeRole: 'admin'
					},
					{
						id: 2,
						typeName: 'Subject Librarian',
						description: 'Subject Librarian',
						typeRole: 'subjectlib'
					},
					{
						id: 3,
						typeName: 'Lecturer',
						description: 'Lecturer and Teacher',
						typeRole: 'lecturer'
					},
					{
						id: 4,
						typeName: 'Registered User',
						description: 'User that has registered to PathfinderKit',
						typeRole: 'user'
					}
				])
				.onConflictDoNothing();

			await db
				.insert(department)
				.values([
					{
						departmentName: 'Central Library',
						departmentDescription: 'lorem ipsum'
					},
					{
						departmentName: 'Faculty Library',
						departmentDescription: 'lorem ipsum 2'
					}
				])
				.onConflictDoNothing();

			const user = await auth.createUser({
				key: {
					providerId: 'email',
					providerUserId: email?.toLowerCase(),
					password
				},
				attributes: {
					username: email?.split('@')[0],
					email: email,
					full_name: 'Administrator'
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

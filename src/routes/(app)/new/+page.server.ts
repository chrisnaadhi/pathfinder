import type { Actions, PageServerLoad } from '../$types';
import { db } from '$lib/server/drizzle';
import { users, userType, department } from '$lib/db/pgSchema';

export const load: PageServerLoad = async ({ cookies }) => {
	const status = cookies.get('seedState');

	return {
		status
	};
};

export const actions: Actions = {
	default: async ({ cookies }) => {
		try {
			await db
				.insert(userType)
				.values([
					{
						typeName: 'Super Admin',
						description: 'Super Administrator PathfinderKit',
						typeRole: 'admin'
					},
					{
						typeName: 'Subject Librarian',
						description: 'Subject Librarian',
						typeRole: 'subjectlib'
					},
					{
						typeName: 'Lecturer',
						description: 'Lecturer and Teacher',
						typeRole: 'lecturer'
					},
					{
						typeName: 'Registered User',
						description: 'User that has registered to PathfinderKit',
						typeRole: 'user'
					}
				])
				.onConflictDoNothing();

			await db.insert(department).values([
				{
					departmentName: 'Central Library',
					departmentDescription: 'lorem ipsum'
				},
				{
					departmentName: 'Faculty Library',
					departmentDescription: 'lorem ipsum 2'
				}
			]);

			await db
				.insert(users)
				.values({
					id: '1234567890',
					email: 'chrisna.adhi@unpad.ac.id',
					name: 'Chrisna Adhi Pranoto',
					bio: "Lotus wasn't bloom in vain",
					title: 'System Librarian',
					username: 'chrisna',
					departmentId: 1,
					type: 1
				})
				.onConflictDoNothing();

			cookies.set('seedState', 'success');
			console.log('Success!');
		} catch (error) {
			cookies.set('seedState', 'failed, check log!');
			console.log(error);
		}
	}
};

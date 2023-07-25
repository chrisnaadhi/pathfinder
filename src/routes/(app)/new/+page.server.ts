import type { Actions, PageServerLoad } from '../$types';
import { migrate } from 'drizzle-orm/postgres-js/migrator';
import { db } from '$lib/server/drizzle';
import { users, userType } from '$lib/db/pgSchema';

export const load: PageServerLoad = async ({ cookies }) => {
	const status = cookies.get('seedState');

	return {
		status
	};
};

export const actions: Actions = {
	default: async ({ cookies }) => {
		await migrate(db, { migrationsFolder: 'drizzle' });

		try {
			await db.insert(users).values({
				id: 'chrisna',
				email: 'chrisna.adhi@unpad.ac.id',
				name: 'Chrisna Adhi Pranoto',
				bio: "Lotus wasn't bloom in vain",
				title: 'System Librarian',
				username: 'chrisnaadhi',
				type: 1
			});

			await db
				.insert(userType)
				.values([
					{
						typeName: 'Super Admin',
						description: 'Super Administrator PathfinderKit',
						typeRole: 'admin',
						id: 1
					},
					{
						typeName: 'Subject Librarian',
						description: 'Subject Librarian',
						typeRole: 'subjectlib',
						id: 2
					},
					{
						typeName: 'Lecturer',
						description: 'Lecturer and Teacher',
						typeRole: 'lecturer',
						id: 3
					},
					{
						typeName: 'Registered User',
						description: 'User that has registered to PathfinderKit',
						typeRole: 'user',
						id: 4
					}
				])
				.onConflictDoNothing();

			cookies.set('seedState', 'success');
			console.log('Success!');
		} catch (error) {
			cookies.set('seedState', 'failed, check log!');
			console.log(error);
		}
	}
};

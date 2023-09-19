import type { PageServerLoad } from './$types';
import { db } from '$lib/server/drizzle';
import { users } from '$lib/db/pgSchema';

export const load: PageServerLoad = async () => {
	const listUsers = await db
		.select({
			username: users.username,
			fullName: users.name,
			email: users.email
		})
		.from(users);

	return {
		listUsers
	};
};

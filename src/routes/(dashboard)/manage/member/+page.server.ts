import { db } from '$lib/server/drizzle';
import { users, userType } from '$lib/db/pgSchema';
import { asc, eq } from 'drizzle-orm';
import { redirect } from '@sveltejs/kit';

export const load = async ({ locals }) => {
	const listUsers = await db
		.select({
			username: users.username,
			fullName: users.name,
			email: users.email,
			type: users.type,
			typeName: userType.typeName
		})
		.from(users)
		.leftJoin(userType, eq(users.type, userType.id))
		.orderBy(asc(users.type));
	const loggedInUser = await locals.auth.validate();

	if (loggedInUser?.user.userType === 1 || loggedInUser?.user.userType === 2) {
		console.log(loggedInUser?.user.userType);
	} else {
		throw redirect(302, '/manage');
	}

	return {
		listUsers
	};
};

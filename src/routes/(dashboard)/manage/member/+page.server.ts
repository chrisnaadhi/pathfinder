import { db } from '$lib/server/drizzle';
import { users, userType } from '$lib/db/pgSchema';
import { asc, eq } from 'drizzle-orm';

export const load = async () => {
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

	return {
		listUsers
	};
};

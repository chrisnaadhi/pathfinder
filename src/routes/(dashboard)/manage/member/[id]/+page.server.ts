import { users, department, userType } from '$lib/db/pgSchema';
import { db } from '$lib/server/drizzle';
import { eq } from 'drizzle-orm';

export const load = async ({ params, locals }) => {
	const session = await locals.auth.validate();

	const getUsers = await db
		.select({
			username: users.username,
			fullName: users.name,
			email: users.email,
			bio: users.bio,
			photo: users.photo,
			title: users.title,
			departmentName: department.departmentName,
			role: userType.typeName,
			userType: users.type
		})
		.from(users)
		.leftJoin(department, eq(department.id, users.departmentId))
		.leftJoin(userType, eq(userType.id, users.type))
		.where(eq(users.id, params.id));

	const userProfile = getUsers[0];
	console.log(session?.user.userType);

	return {
		userProfile,
		type: session?.user.userType
	};
};

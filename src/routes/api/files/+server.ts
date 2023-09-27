import { users } from '$lib/db/pgSchema';
import { db } from '$lib/server/drizzle';
import { json } from '@sveltejs/kit';

export const GET = async (event) => {
	const userList = await db.select().from(users);
	const userFile = '/uploads/profile/mv3at7endqp2yi7.jpg';

	return json(userList);
};

export const POST = async ({ request }) => {
	const data = await request.body;

	console.log(data);

	return json(data);
};

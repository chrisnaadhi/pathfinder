import { users } from '$lib/db/pgSchema';
import { db } from '$lib/server/drizzle';
import { json } from '@sveltejs/kit';

export const GET = async (event) => {
	const userList = await db.select().from(users);

	return json(userList);
};

export const POST = async ({ request }) => {
	const data = await request.body;

	console.log(data);

	return json(data);
};

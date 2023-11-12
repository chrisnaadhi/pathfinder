import { systemContents } from '$lib/db/pgSchema';
import { db } from '$lib/server/drizzle';
import { eq } from 'drizzle-orm';

export const load = async ({ locals }) => {
	const userData = await locals.auth.validate();
	const profile = userData?.user;
	const userState = userData?.state;

	const getDeskripsiUtama = await db.query.systemContents.findFirst({
		where: eq(systemContents.title, 'deskripsiUtama')
	});

	return {
		profile,
		userState,
		getDeskripsiUtama
	};
};

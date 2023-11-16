import { auth } from '$lib/server/lucia';
import { db } from '$lib/server/drizzle';
import { subjects, contents, discipline, faculty } from '$lib/db/pgSchema';
import { fail, redirect } from '@sveltejs/kit';
import { base } from '$app/paths';

export const load = async ({ locals }) => {
	const session = await locals.auth.validate();
	const facultyList = await db.select().from(faculty);
	const disciplineList = await db.select().from(discipline);
	const subjectList = await db.select().from(subjects);
	const contentList = await db.select().from(contents);

	const facultyNumber = facultyList.length;
	const disciplineNumber = disciplineList.length;
	const subjectNumber = subjectList.length;
	const contentNumber = contentList.length;

	if (!session) return fail(401);
	if (session.user.userType === 3) return fail(403);
	if (session.user.userType === 4) return fail(403);

	return {
		subjectList,
		facultyNumber,
		disciplineNumber,
		subjectNumber,
		contentNumber
	};
};

export const actions = {
	signOut: async ({ locals }) => {
		const session = await locals.auth.validate();
		if (!session) return fail(401);
		await auth.invalidateSession(session.sessionId);
		locals.auth.setSession(null);
		throw redirect(302, `${base}/account`);
	}
};

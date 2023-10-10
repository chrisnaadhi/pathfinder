import { redirect } from '@sveltejs/kit';
import { db } from '$lib/server/drizzle';
import { discipline, subjects, users } from '$lib/db/pgSchema';
import { eq, or } from 'drizzle-orm';

export const load = async () => {
	const getDiscipline = await db.select().from(discipline);
	const getLibrarian = await db
		.select()
		.from(users)
		.where(or(eq(users.type, 1), eq(users.type, 2)));

	return {
		getDiscipline,
		getLibrarian
	};
};

export const actions = {
	default: async (event) => {
		const data = await event.request.formData();
		const session = await event.locals.auth.validate();

		const subjectName = data.get('title') as string;
		const subjectSlug = data.get('slug') as string;
		const subjectStatus = data.get('status') as string;
		const subjectDescription = data.get('description') as string;
		const subjectKeywords = data.get('keywords') as string;
		const subjectType = data.get('typesubject') as string;
		const subjectDiscipline = data.get('disiplin') as string;
		const instructor = data.get('instructor') as string;

		await db.insert(subjects).values({
			subjectName: subjectName,
			subjectSlug: subjectSlug,
			subjectDescription: subjectDescription,
			keywords: subjectKeywords,
			subjectStatus: subjectStatus,
			type: subjectType,
			disciplineId: Number(subjectDiscipline),
			instructor: instructor,
			creator: session?.user.userId
		});

		throw redirect(302, '/manage/collection');
	}
};

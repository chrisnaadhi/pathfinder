import type { Actions } from './$types';
import { redirect } from '@sveltejs/kit';
import { db } from '$lib/server/drizzle';
import { subjects } from '$lib/db/pgSchema';

export const actions = {
	default: async (event) => {
		const data = await event.request.formData();
		const subjectName = data.get('title') as string;
		const subjectSlug = data.get('slug') as string;
		const subjectStatus = data.get('status') as string;
		const subjectDescription = data.get('description') as string;
		const subjectKeywords = data.get('keywords') as string;
		const subjectType = data.get('typesubject') as string;

		await db.insert(subjects).values({
			subjectName: subjectName,
			subjectSlug: subjectSlug,
			subjectDescription: subjectDescription,
			keywords: subjectKeywords,
			subjectStatus: subjectStatus,
			type: subjectType
		});

		throw redirect(302, '/manage/subjects');
	}
} satisfies Actions;

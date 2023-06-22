import type { Actions } from './$types';
import { redirect } from '@sveltejs/kit';
import prisma from '$lib/server/prisma';

export const actions = {
	default: async (event) => {
		const data = await event.request.formData();
		const subjectName = data.get('title') as string;
		const subjectSlug = data.get('slug') as string;
		const subjectStatus = data.get('status') as string;
		const subjectDescription = data.get('description') as string;
		const subjectKeywords = data.get('keywords') as string;
		const subjectType = data.get('typesubject') as string;

		await prisma.subject.create({
			data: {
				subject_name: subjectName,
				subject_slug: subjectSlug,
				active: subjectStatus,
				description: subjectDescription,
				keywords: subjectKeywords,
				type: subjectType
			}
		});

		throw redirect(302, '/manage/collection');
	}
} satisfies Actions;

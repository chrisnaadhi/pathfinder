import type { Actions } from './$types';
import { redirect } from '@sveltejs/kit';
import { prisma } from '$lib/server/prisma';

export const actions = {
	default: async (event) => {
		const data = await event.request.formData();
		const subjectName = data.get('title');
		const subjectSlug = data.get('slug');
		const subjectStatus = data.get('status');
		const subjectDescription = data.get('description');
		const subjectKeywords = data.get('keywords');
		const subjectType = data.get('typesubject');

		console.log(`
		Subject Name: ${subjectName},
		Subject Slug: ${subjectSlug},
		Subject Status: ${subjectStatus},
		Subject Description: ${subjectDescription},
		Subject Keywords: ${subjectKeywords},
		Subject Type: ${subjectType}
		`);

		throw redirect(302, '/manage/collection');
	}
} satisfies Actions;

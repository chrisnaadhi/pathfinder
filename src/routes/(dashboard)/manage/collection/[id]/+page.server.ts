import type { Actions, PageServerLoad } from './$types';
import { redirect } from '@sveltejs/kit';
import prisma from '$lib/server/prisma';

export const load: PageServerLoad = async ({ params }) => {
	const subjectData = await prisma.subject.findUniqueOrThrow({
		where: {
			id: +params.id
		}
	});

	return {
		subjectData
	};
};

export const actions: Actions = {
	updateData: async (event) => {
		const data = await event.request.formData();
		const subjectName = data.get('title') as string;
		const subjectSlug = data.get('slug') as string;
		const subjectStatus = data.get('status') as string;
		const subjectDescription = data.get('description') as string;
		const subjectKeywords = data.get('keywords') as string;
		const subjectType = data.get('typesubject') as string;

		await prisma.subject.update({
			where: {
				id: +event.params.id
			},
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
	},
	deleteData: async (event) => {
		const data = await event.request.formData();
		const isDelete = data.get('confirmation');
		if (isDelete === 'delete') {
			await prisma.subject.delete({
				where: {
					id: Number(event.params.id)
				}
			});

			throw redirect(307, '/manage/collection');
		} else {
			throw redirect(304, event.url.pathname);
		}
	}
};

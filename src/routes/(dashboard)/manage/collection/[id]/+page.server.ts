import type { Actions, PageServerLoad } from './$types';
import { redirect } from '@sveltejs/kit';

export const load: PageServerLoad = async ({ params }) => {};

export const actions: Actions = {
	updateData: async (event) => {
		const data = await event.request.formData();
		const subjectName = data.get('title') as string;
		const subjectSlug = data.get('slug') as string;
		const subjectStatus = data.get('status') as string;
		const subjectDescription = data.get('description') as string;
		const subjectKeywords = data.get('keywords') as string;
		const subjectType = data.get('typesubject') as string;

		throw redirect(302, '/manage/collection');
	},
	deleteData: async (event) => {
		const data = await event.request.formData();
		const isDelete = data.get('confirmation');
	}
};

import type { Actions } from './$types';
import { redirect } from '@sveltejs/kit';

export const actions = {
	default: async (event) => {
		const data = await event.request.formData();
		const title = data.get('title');
		const description = data.get('description');
		const agreement = data.get('agreement');

		console.log(title, description, agreement);

		throw redirect(302, '/manage/collection');
	}
} satisfies Actions;

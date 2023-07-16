import { fail, redirect } from '@sveltejs/kit';
import type { PageServerLoad, Actions } from './$types';

export const load: PageServerLoad = async ({ locals }) => {};

export const actions: Actions = {
	signin: async ({ request, locals }) => {
		const data = await request.formData();
		const email = data.get('email-login');
		const password = data.get('password-login');
	},
	signup: async ({ request, locals }) => {
		const data = await request.formData();
		const namaLengkap = data.get('nama-lengkap') as string;
		const email = data.get('email-regis');
		const password = data.get('password-regis');
		const username = data.get('email-regis')?.toString().split('@')[0];
	}
};

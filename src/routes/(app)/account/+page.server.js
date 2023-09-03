import { fail, redirect } from '@sveltejs/kit';

/** @type {import('./$types').PageServerLoad} */
export const load = async ({ locals }) => {};

/** @type {import('./$types').Actions} */
export const actions = {
	signin: async ({ request, locals }) => {
		const data = await request.formData();
		const email = data.get('email-login');
		const password = data.get('password-login');
	},
	signup: async ({ request, locals }) => {
		const data = await request.formData();
		const namaLengkap = data.get('nama-lengkap');
		const email = data.get('email-regis');
		const password = data.get('password-regis');
		const username = data.get('email-regis')?.toString().split('@')[0];
	}
};

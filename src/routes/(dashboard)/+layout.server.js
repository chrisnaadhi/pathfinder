import { fail, redirect } from '@sveltejs/kit';

/** @type {import('./$types').PageServerLoad} */
export const load = async ({ locals }) => {
	// const { user } = await locals.auth.validateUser();
	// if (!user) throw redirect(302, '/account');
	// return {
	// 	user
	// };
};

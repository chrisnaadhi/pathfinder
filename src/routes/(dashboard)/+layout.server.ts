import { fail, redirect } from '@sveltejs/kit';
import type { LayoutServerLoad } from './$types';

export const load: LayoutServerLoad = async ({ locals }) => {
	// const { user } = await locals.auth.validateUser();
	// if (!user) throw redirect(302, '/account');
	// return {
	// 	user
	// };
};

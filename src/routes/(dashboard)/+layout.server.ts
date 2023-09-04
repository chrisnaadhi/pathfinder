import type { LayoutServerLoad } from './$types';
import { fail, redirect } from '@sveltejs/kit';

export const load: LayoutServerLoad = async ({}) => {
	// const { user } = await locals.auth.validateUser();
	// if (!user) throw redirect(302, '/account');
	// return {
	// 	user
	// };
};

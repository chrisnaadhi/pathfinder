import type { LayoutServerLoad } from './$types';
import { fail, redirect } from '@sveltejs/kit';

export const load: LayoutServerLoad = async ({ locals }) => {
	const authData = await locals.auth.validate();
	// if (!authData) throw redirect(302, '/account');
	return {
		authData
	};
};

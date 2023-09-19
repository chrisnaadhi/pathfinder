import type { LayoutServerLoad } from './$types';
import { fail, redirect } from '@sveltejs/kit';

export const load: LayoutServerLoad = async ({ locals }) => {
	const session = await locals.auth.validate();
	const authData = session?.state;
	if (!authData) throw redirect(302, '/account');

	return {
		authData
	};
};

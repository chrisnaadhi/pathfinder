import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ request }) => {
	return {
		msg: 'Can i load this with load function ?',
		statusCode: 200,
		checkParams: request.method
	};
};

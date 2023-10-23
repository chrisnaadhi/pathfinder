export const load = async ({ locals }) => {
	const userData = await locals.auth.validate();
	const profile = userData?.user;
	const userState = userData?.state;
	return {
		profile,
		userState
	};
};

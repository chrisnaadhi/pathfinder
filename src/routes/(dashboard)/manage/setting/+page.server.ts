export const load = async ({ locals }) => {
	const session = await locals.auth.validate();
	const checkUserType = session?.user.userType;

	return {
		checkUserType
	};
};

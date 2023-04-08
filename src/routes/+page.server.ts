export const load = ({ request }) => {
	return {
		msg: 'Can i load this with load function ?',
		statusCode: 200,
		checkParams: request.method
	};
};

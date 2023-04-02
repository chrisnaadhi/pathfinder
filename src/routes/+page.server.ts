export const load = ({ request }) => {
	return {
		msg: 'Can i load this with load function ?',
		statusMsg: 200,
		checkParams: request.method
	};
};

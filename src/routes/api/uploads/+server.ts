import { json } from '@sveltejs/kit';

export const GET = async (event) => {
	const uploadDescription = {
		data: 'Upload your file here later on.'
	};

	return json(uploadDescription);
};

export const POST = async ({ request }) => {
	const data = await request.body;

	console.log(data);

	return json(data);
};

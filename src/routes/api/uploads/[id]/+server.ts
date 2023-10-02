import { readFile } from 'fs/promises';
import path from 'path';

export const GET = async ({ params }) => {
	const userFile = 'files/api/uploads/' + params.id;

	const type = path.extname(userFile);
	const extension = type.replace(/./, '');

	const img = await readFile(path.resolve(userFile));

	return new Response(img, {
		headers: {
			'Content-Type': `image/${extension}`
		},
		status: 200
	});
};

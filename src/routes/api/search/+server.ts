import { error, json } from '@sveltejs/kit';
import { db } from '$lib/server/drizzle';
import { ilike, or } from 'drizzle-orm';
import { contents } from '$lib/db/pgSchema';

export const GET = async ({ url }) => {
	const value = url.searchParams.get('q');
	const contentResult = await db.query.contents.findMany({
		with: {
			collections: true,
			subjects: true,
			creator: true
		},
		where: or(
			ilike(contents.tag, `%${value}%`),
			ilike(contents.title, `%${value}%`),
			ilike(contents.contentDescription, `%${value}%`),
			ilike(contents.contents, `%${value}%`)
		)
	});

	if (!value) {
		return json({
			name: 'PathfinderKit Search API',
			creator: 'Chrisna Adhi Pranoto'
		});
	}
	if (!contentResult || contentResult.length === 0) {
		return json({
			code: 404,
			message: 'Not Found'
		});
	}

	return json(contentResult);
};

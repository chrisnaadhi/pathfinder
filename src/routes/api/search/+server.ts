import { error, json } from '@sveltejs/kit';
import { db } from '$lib/server/drizzle';
import { ilike, or } from 'drizzle-orm';
import { contents, collections, subjects } from '$lib/db/pgSchema';

export const GET = async ({ url, request }) => {
	const value = url.searchParams.get('q');
	const contentResult = await db.query.contents.findMany({
		with: {
			collections: true,
			subjects: true
		},
		where: or(
			ilike(contents.tag, `%${value}%`),
			ilike(contents.title, `%${value}%`),
			ilike(contents.contentDescription, `%${value}%`),
			ilike(contents.contents, `%${value}%`)
		)
	});

	return json(contentResult);
};

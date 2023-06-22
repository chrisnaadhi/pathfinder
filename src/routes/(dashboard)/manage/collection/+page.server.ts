import type { Actions } from './$types';
import prisma from '$lib/server/prisma';

export const load = async () => {
	const subject = await prisma.subject.findMany({
		orderBy: {
			id: 'asc'
		}
	});

	return {
		subject
	};
};

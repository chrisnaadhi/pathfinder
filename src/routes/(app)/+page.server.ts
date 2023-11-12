import { db } from '$lib/server/drizzle';
import { discipline, subjects, systemContents, users } from '$lib/db/pgSchema';
import { eq, or } from 'drizzle-orm';
import { redirect } from '@sveltejs/kit';

export const load = async ({ request, fetch }) => {
	const listUsers = await db.select().from(users);

	const getDeskripsiPathfinder = await db.query.systemContents.findFirst({
		where: eq(systemContents.title, 'deskripsiPathfinder')
	});

	const getSubjectSpecialist = await db.query.users.findMany({
		where: or(eq(users.type, 1), eq(users.type, 2)),
		with: {
			subjectsInstructor: true,
			userType: true
		}
	});

	const randomSubjectSpecialist = getSubjectSpecialist.sort(() => 0.5 - Math.random()).slice(0, 3);

	const getSubjectData = await db.query.discipline.findMany({
		with: {
			subject: true
		}
	});

	const getSubjectDataTopic = await db.query.discipline.findMany({
		with: {
			subject: {
				where: (subjects, { eq }) => eq(subjects.type, 'topic')
			}
		}
	});

	const getSubjectDataGuide = await db.query.discipline.findMany({
		with: {
			subject: {
				where: (subjects, { eq }) => eq(subjects.type, 'guide')
			}
		}
	});

	const getSubjectDataCourse = await db.query.discipline.findMany({
		with: {
			subject: {
				where: (subjects, { eq }) => eq(subjects.type, 'course')
			}
		}
	});

	if (!listUsers || listUsers.length < 1) throw redirect(302, '/new-instance');

	return {
		statusCode: 200,
		checkParams: request.method,
		listGuide: ['All Subjects', 'Topic Collections', 'Guides List', 'Courses List'],
		getDeskripsiPathfinder,
		getSubjectData,
		getSubjectDataTopic,
		getSubjectDataGuide,
		getSubjectDataCourse,

		randomSubjectSpecialist
	};
};

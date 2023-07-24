import lucia from 'lucia-auth';
import { sveltekit } from 'lucia-auth/middleware';
import { dev } from '$app/environment';

// export const auth = lucia({
// 	adapter: prisma(new PrismaClient()),
// 	env: dev ? 'DEV' : 'PROD',
// 	middleware: sveltekit(),
// 	transformDatabaseUser: (userData) => {
// 		return {
// 			userId: userData.id,
// 			username: userData.username,
// 			email: userData.email
// 		};
// 	}
// });

// export const auth = lucia({
//   adapter: pg(connectionPool),
// })

// export type Auth = typeof auth;

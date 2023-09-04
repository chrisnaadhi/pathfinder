import lucia from 'lucia-auth';
import { sveltekit } from 'lucia-auth/middleware';
import { dev } from '$app/environment';

export const auth = lucia({
	adapter: postgresAdapter(sql, {
		user: 'auth_user',
		key: 'auth_key',
		session: 'auth_session'
	}),
	env: dev ? 'DEV' : 'PROD',
	middleware: sveltekit(),
	getUserAttributes: (data) => {
		return {
			username: data.username
		};
	}
});

export type Auth = typeof auth;
import { lucia } from 'lucia';
import { sveltekit } from 'lucia/middleware';
import { postgres as postgresAdapter } from '@lucia-auth/adapter-postgresql';
import postgres from 'postgres';
import { DATABASE_URL } from '$env/static/private';
import { dev } from '$app/environment';

const sql = postgres(DATABASE_URL);

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
			username: data.username,
			email: data.email,
			fullName: data.full_name,
			title: data.title,
			bio: data.biograph,
			userType: data.type_id,
			department: data.department_id
		};
	}
});

export type Auth = typeof auth;

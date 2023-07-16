import { type Config } from 'drizzle-kit';

export default {
	out: './drizzle',
	schema: './src/lib/db/schema.ts',
	driver: 'turso',
	dbCredentials: {
		url: 'file:./drizzle/pathfinder.db'
	},
	breakpoints: true
} satisfies Config;

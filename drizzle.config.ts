import type { Config } from 'drizzle-kit';

export default {
	out: './drizzle',
	schema: './src/lib/db/pgSchema.ts',
	driver: 'pg',
	dbCredentials: {
		// connectionString: DATABASE_URL
		connectionString: process.env.DATABASE_URL as string
	},
	breakpoints: true
} satisfies Config;

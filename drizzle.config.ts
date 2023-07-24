import { type Config } from 'drizzle-kit';

export default {
	out: './drizzle',
	schema: './src/lib/db/pgSchema.ts',
	driver: 'pg',
	dbCredentials: {
		connectionString: 'postgres://pathfinder:path@0.0.0.0:5432/pathfinder'
	},
	breakpoints: true
} satisfies Config;

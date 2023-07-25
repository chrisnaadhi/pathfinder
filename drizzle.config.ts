import type { Config } from 'drizzle-kit';
import * as dotenv from 'dotenv';

dotenv.config();

export default {
	out: './drizzle',
	schema: './src/lib/db/pgSchema.ts',
	driver: 'pg',
	dbCredentials: {
		// connectionString: DATABASE_URL
		connectionString: process.env.DATABASE_URL!
	}
} satisfies Config;

import * as dotenv from 'dotenv';
dotenv.config();

export default {
	out: './drizzle',
	schema: './src/lib/db/pgSchema.js',
	driver: 'pg',
	dbCredentials: {
		connectionString: process.env.DATABASE_URL
	}
};

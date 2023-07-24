// import { drizzle } from 'drizzle-orm/libsql';
import { drizzle } from 'drizzle-orm/postgres-js';
import type { PostgresJsDatabase } from 'drizzle-orm/postgres-js';
import { migrate } from 'drizzle-orm/postgres-js/migrator';
import { DATABASE_URL } from '$env/static/private';
import postgres from 'postgres';

const migrationClient = postgres(DATABASE_URL);
const queryClient = postgres(DATABASE_URL);

export const db: PostgresJsDatabase = drizzle(queryClient);

await migrate(db, { migrationsFolder: 'drizzle' });

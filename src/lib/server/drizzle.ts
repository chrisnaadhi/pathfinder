// Local PostgresDB
import { drizzle } from 'drizzle-orm/postgres-js';
import type { PostgresJsDatabase } from 'drizzle-orm/postgres-js';
import postgres from 'postgres';

// Neon Database
// import { neon, neonConfig } from '@neondatabase/serverless';
// import { drizzle } from 'drizzle-orm/neon-serverless';
// neonConfig.fetchConnectionCache = true;

// Environment Variabel
import { DATABASE_URL } from '$env/static/private';

const migrationClient = postgres(DATABASE_URL);
const queryClient = postgres(DATABASE_URL);

export const db: PostgresJsDatabase = drizzle(queryClient);

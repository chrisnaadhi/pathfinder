// Environment Variabel
import { DATABASE_URL } from '$env/static/private';

// // Local PostgresDB
import { drizzle } from 'drizzle-orm/postgres-js';
import type { PostgresJsDatabase } from 'drizzle-orm/postgres-js';
import postgres from 'postgres';

const migrationClient = postgres(DATABASE_URL);
const queryClient = postgres(DATABASE_URL);

export const db: PostgresJsDatabase = drizzle(queryClient);

// Neon Database
// import { neon, neonConfig } from '@neondatabase/serverless';
// import { drizzle } from 'drizzle-orm/neon-http';
// neonConfig.fetchConnectionCache = true;

// const sql = neon(DATABASE_URL);
// export const db = drizzle(sql);

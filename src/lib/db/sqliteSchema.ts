import { sql, relations } from 'drizzle-orm';
import { sqliteTable, text, integer } from 'drizzle-orm/sqlite-core';

// Table for Users
export const users = sqliteTable('auth_users', {
	id: text('id', { length: 31 }).primaryKey().notNull(),
	username: text('username'),
	email: text('email').notNull().unique(),
	name: text('full_name').notNull(),
	title: text('title'),
	bio: text('biograph'),
	userType: integer('user_type').references(() => userType.id),
	department: integer('department').references(() => department.id)
});

export const session = sqliteTable('auth_session', {
	id: text('id').primaryKey(),
	userId: text('user_id')
		.notNull()
		.references(() => users.id),
	activeExpires: integer('active_expires').notNull(),
	idleExpires: integer('idle_expires').notNull()
});

export const key = sqliteTable('auth_key', {
	id: text('id').primaryKey(),
	userId: text('user_id')
		.notNull()
		.references(() => users.id),
	primaryKey: integer('primary_key').notNull(),
	hashedPassword: text('hashed_password'),
	expires: integer('expires')
});

export const userType = sqliteTable('user_type', {
	id: integer('id', { mode: 'number' }).primaryKey({ autoIncrement: true }),
	typeName: text('type_name').notNull(),
	typeRole: text('type_role').unique().notNull(),
	description: text('description'),
	createdAt: text('created_at').default(sql`CURRENT_TIMESTAMP`),
	lastModified: text('last_modified').default(sql`CURRENT_TIMESTAMP`)
});

export const department = sqliteTable('department', {
	id: integer('id', { mode: 'number' }).primaryKey({ autoIncrement: true }),
	departmentName: text('department_name').notNull(),
	departmentDescription: text('department_description'),
	telephone: text('telephone'),
	email: text('email'),
	url: text('url')
});

// Table for Subjects
export const subjects = sqliteTable('subjects', {
	id: integer('id', { mode: 'number' }).primaryKey({ autoIncrement: true }),
	subjectName: text('subject_name').notNull(),
	subjectSlug: text('subject_slug').unique().notNull(),
	redirectUrl: text('redirect_url'),
	status: text('status'),
	header: text('header'),
	description: text('description'),
	keywords: text('keywords'),
	type: text('type'),
	createdAt: text('created_at').default(sql`CURRENT_TIMESTAMP`),
	lastModified: text('last_modified').default(sql`CURRENT_TIMESTAMP`),
	instructor: text('instructor')
});

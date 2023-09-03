import { sql, relations } from 'drizzle-orm';
import {
	pgTable,
	pgEnum,
	integer,
	serial,
	varchar,
	text,
	bigint,
	boolean,
	timestamp,
	uuid
} from 'drizzle-orm/pg-core';

// Table for Users
export const users = pgTable('auth_user', {
	id: varchar('id', { length: 32 }).notNull().primaryKey(),
	username: varchar('username', { length: 64 }),
	email: varchar('email').notNull().unique(),
	name: varchar('full_name', { length: 255 }).notNull(),
	title: text('title'),
	bio: text('biograph'),
	createdAt: timestamp('created_at', { withTimezone: true }).defaultNow(),
	updatedAt: timestamp('updated_at', { withTimezone: true }).defaultNow(),
	type: integer('type_id').references(() => userType.id),
	departmentId: integer('department_id').references(() => department.id)
});

export const session = pgTable('auth_session', {
	id: varchar('id', { length: 128 }).primaryKey(),
	userId: varchar('user_id', { length: 32 })
		.notNull()
		.references(() => users.id),
	activeExpires: bigint('active_expires', {
		mode: 'number'
	}).notNull(),
	idleExpires: bigint('idle_expires', {
		mode: 'number'
	}).notNull()
});

export const key = pgTable('auth_key', {
	id: varchar('id', {
		length: 255
	}).primaryKey(),
	userId: varchar('user_id', {
		length: 32
	})
		.notNull()
		.references(() => users.id),
	primaryKey: boolean('primary_key').notNull(),
	hashedPassword: varchar('hashed_password', {
		length: 155
	}),
	expires: bigint('expires', {
		mode: 'number'
	})
});

export const userType = pgTable('user_type', {
	id: serial('id').primaryKey(),
	typeName: varchar('type_name', { length: 255 }).notNull(),
	typeRole: varchar('type_role', { length: 64 }).notNull().unique(),
	description: text('description'),
	createdAt: timestamp('created_at', { withTimezone: true }).defaultNow(),
	updatedAt: timestamp('updated_at', {
		withTimezone: true
	}).defaultNow()
});

export const department = pgTable('department', {
	id: serial('id').primaryKey(),
	departmentName: varchar('department_name', { length: 255 }).notNull(),
	departmentDescription: text('department_description'),
	telephone: varchar('telephone'),
	email: varchar('email'),
	url: varchar('url'),
	createdAt: timestamp('created_at', { withTimezone: true }).defaultNow(),
	updatedAt: timestamp('updated_at', { withTimezone: true }).defaultNow()
});

// Table for Subjects
export const subjects = pgTable('subjects', {
	id: serial('id').primaryKey(),
	subjectName: varchar('subject_name', { length: 255 }).notNull(),
	subjectSlug: varchar('subject_slug').notNull().unique(),
	subjectDescription: text('subject_description'),
	subjectStatus: varchar('subject_status'),
	redirectUrl: text('redirect_url'),
	header: text('header'),
	keywords: text('keywords'),
	type: varchar('subject_type'),
	createdAt: timestamp('created_at', { withTimezone: true }).defaultNow(),
	updatedAt: timestamp('updated_at', { withTimezone: true }).defaultNow(),
	instructor: varchar('instructor', { length: 32 }).references(() => users.id),
	disciplineId: integer('discipline_id').references(() => discipline.id)
});

export const discipline = pgTable('discipline', {
	id: serial('id').primaryKey(),
	code: varchar('code').notNull(),
	disciplineName: varchar('discipline_name').notNull(),
	disciplineDescription: text('discipline_description'),
	faculty: varchar('faculty'),
	createdAt: timestamp('created_at', { withTimezone: true }).defaultNow(),
	updatedAt: timestamp('updated_at', { withTimezone: true }).defaultNow()
});

export const content = pgTable('content', {
	id: uuid('id').defaultRandom().primaryKey(),
	title: varchar('title').notNull(),
	contentDescription: text('content_description'),
	contents: text('contents'),
	tag: varchar('tag'),
	createdAt: timestamp('created_at', { withTimezone: true }).defaultNow(),
	updatedAt: timestamp('updated_at', { withTimezone: true }).defaultNow(),
	subject: integer('subject').references(() => subjects.id)
});

// Table for System Setting
export const systemContent = pgTable('system_content', {
	id: serial('id').notNull().primaryKey(),
	title: varchar('title').notNull(),
	description: text('description'),
	contents: text('contents'),
	createdAt: timestamp('created_at', { withTimezone: true }).defaultNow(),
	updatedAt: timestamp('updated_at', { withTimezone: true }).defaultNow()
});

export const systemConfig = pgTable('system_config', {
	id: serial('id').notNull().primaryKey(),
	configName: varchar('config_name').notNull(),
	description: text('description'),
	configValue: integer('config_value'),
	configOption: varchar('config_option'),
	configState: boolean('config_state'),
	createdAt: timestamp('created_at', { withTimezone: true }).defaultNow(),
	updatedAt: timestamp('updated_at', { withTimezone: true }).defaultNow()
});

// Users Relations
export const usersRelations = relations(users, ({ one, many }) => ({
	subjects: many(subjects),
	department: one(department, {
		fields: [users.departmentId],
		references: [department.id]
	}),
	role: one(userType, {
		fields: [users.type],
		references: [userType.id]
	})
}));

// Subjects Relations
export const subjectsRelations = relations(subjects, ({ one, many }) => ({
	instructor: one(users, {
		fields: [subjects.instructor],
		references: [users.id]
	}),
	discipline: one(discipline, {
		fields: [subjects.disciplineId],
		references: [discipline.id]
	}),
	content: many(content)
}));

export const contentRelations = relations(content, ({ one }) => ({
	subject: one(subjects, {
		fields: [content.subject],
		references: [subjects.id]
	})
}));

export const disciplineRelation = relations(discipline, ({ many }) => ({
	subject: many(subjects)
}));

// Department Relations
export const departmentRelations = relations(department, ({ many }) => ({
	users: many(users)
}));

// UserType Relations
export const userTypeRelations = relations(userType, ({ many }) => ({
	users: many(users)
}));
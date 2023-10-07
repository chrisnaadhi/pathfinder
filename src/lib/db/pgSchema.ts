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
	username: varchar('username', { length: 64 }).unique(),
	email: varchar('email').notNull().unique(),
	name: varchar('full_name', { length: 255 }).notNull(),
	title: text('title'),
	bio: text('biograph'),
	type: integer('type_id').references(() => userType.id),
	photo: text('photo'),
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
	primaryKey: boolean('primary_key'),
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
	departmentName: varchar('department_name', { length: 255 }).notNull().unique(),
	departmentDescription: text('department_description'),
	telephone: varchar('telephone'),
	email: varchar('email'),
	url: varchar('url')
});

// Table for Subjects
export const faculty = pgTable('faculty', {
	id: serial('id').primaryKey(),
	facultyName: varchar('faculty_name'),
	facultyValue: varchar('faculty_value').unique()
});

export const discipline = pgTable('discipline', {
	id: serial('id').primaryKey(),
	code: varchar('code').notNull(),
	disciplineName: varchar('discipline_name').notNull(),
	disciplineDescription: text('discipline_description'),
	createdAt: timestamp('created_at', { withTimezone: true }).defaultNow(),
	updatedAt: timestamp('updated_at', { withTimezone: true }).defaultNow(),
	faculty: integer('faculty').references(() => faculty.id),
	creator: varchar('creator').references(() => users.id)
});

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
	creator: varchar('creator').references(() => users.id),
	instructor: varchar('instructor', { length: 32 }).references(() => users.id),
	disciplineId: integer('discipline_id').references(() => discipline.id)
});

export const collections = pgTable('collections', {
	id: serial('id').primaryKey(),
	slug: varchar('slug').notNull(),
	name: varchar('collection_name'),
	status: varchar('collection_status'),
	deskripsi: varchar('description'),
	createdAt: timestamp('created_at', { withTimezone: true }).defaultNow(),
	updatedAt: timestamp('updated_at', { withTimezone: true }).defaultNow(),
	creator: varchar('creator').references(() => users.id),
	subjectId: integer('subject_id').references(() => subjects.id)
});

export const contents = pgTable('contents', {
	id: uuid('id').defaultRandom().primaryKey(),
	title: varchar('title').notNull(),
	contentDescription: text('content_description'),
	contents: text('contents'),
	tag: varchar('tag'),
	createdAt: timestamp('created_at', { withTimezone: true }).defaultNow(),
	updatedAt: timestamp('updated_at', { withTimezone: true }).defaultNow(),
	collectionId: integer('collection_id').references(() => subjects.id),
	creator: varchar('creator').references(() => users.id)
});

// Users Relations
export const usersRelations = relations(users, ({ one, many }) => ({
	department: one(department, {
		fields: [users.departmentId],
		references: [department.id]
	}),
	userType: one(userType, {
		fields: [users.type],
		references: [userType.id]
	}),
	discipline: many(discipline),
	subjectsCreator: many(subjects, {
		relationName: 'subject_creator'
	}),
	subjectsInstructor: many(subjects, {
		relationName: 'subject_instructor'
	}),
	collectionCreator: many(collections),
	contentCreator: many(contents)
}));

// Subjects Relations
export const facultyRelation = relations(faculty, ({ many }) => ({
	discipline: many(discipline)
}));

export const disciplineRelation = relations(discipline, ({ one, many }) => ({
	creator: one(users, {
		fields: [discipline.creator],
		references: [users.id]
	}),
	faculty: one(faculty, {
		fields: [discipline.faculty],
		references: [faculty.id]
	}),
	subject: many(subjects)
}));

export const subjectsRelations = relations(subjects, ({ one, many }) => ({
	creator: one(users, {
		fields: [subjects.creator],
		references: [users.id],
		relationName: 'subject_creator'
	}),
	discipline: one(discipline, {
		fields: [subjects.disciplineId],
		references: [discipline.id]
	}),
	instructor: one(users, {
		fields: [subjects.instructor],
		references: [users.id],
		relationName: 'subject_instructor'
	}),
	collections: many(collections)
}));

export const collectionRelations = relations(collections, ({ one, many }) => ({
	creator: one(users, {
		fields: [collections.creator],
		references: [users.id]
	}),
	subjects: one(subjects, {
		fields: [collections.subjectId],
		references: [subjects.id]
	}),
	contents: many(contents)
}));

export const contentRelations = relations(contents, ({ one }) => ({
	creator: one(users, {
		fields: [contents.creator],
		references: [users.id]
	}),
	collections: one(collections, {
		fields: [contents.collectionId],
		references: [collections.id]
	})
}));

// Department Relations
export const departmentRelations = relations(department, ({ many }) => ({
	users: many(users)
}));

// UserType Relations
export const userTypeRelations = relations(userType, ({ many }) => ({
	users: many(users)
}));

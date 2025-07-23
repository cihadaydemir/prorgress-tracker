import { relations, sql } from "drizzle-orm";
import { int, sqliteTable, text } from "drizzle-orm/sqlite-core";
import { IdPrefix, newId } from "./id";

export const defaultFields = (idPrefix: IdPrefix) => ({
	serialId: int("serial_id").primaryKey({ autoIncrement: true }),
	id: text("id", { length: 21 })
		.$defaultFn(() => newId(idPrefix))
		.notNull()
		.unique(),

	createdAt: text("created_at").default(sql`CURRENT_TIMESTAMP`).notNull(),
	updatedAt: text("updated_at").$defaultFn(() => new Date().toISOString()),
	deletedAt: text("deleted_at"),
})


export const usersTable = sqliteTable("users_table", {
  ...defaultFields('user'),
  name: text().notNull(),
  age: int().notNull(),
  height: int().notNull(),

});

export const progressTable = sqliteTable("progress_table", {
  ...defaultFields('progress'),
    userId: text("user_id").notNull().references(() => usersTable.id, { onDelete: "cascade" }),
  weight: int("weight").notNull(),
  hipCircumference: int("hip_circumference").notNull(),
  chestCircumference: int("chest_circumference").notNull(),
  shoulderWidth: int("shoulder_width").notNull(),
abdominalGirth: int("abdominal_girth").notNull(),

});

export const imagePathsTable = sqliteTable("image_paths_table", {
  ...defaultFields('image'),
    progressId: text("progress_id").notNull().references(() => progressTable.id, { onDelete: "cascade" }),
  path: text("path").notNull(),
});

export const usersRelations = relations(usersTable, ({ many }) => ({
	progress: many(progressTable),
}));

export const progressRelations = relations(progressTable, ({ one, many }) => ({
	user: one(usersTable, {
		fields: [progressTable.userId],
		references: [usersTable.id],
	}),
	images: many(imagePathsTable),
}));

export const imagePathsRelations = relations(imagePathsTable, ({ one }) => ({
	progress: one(progressTable, {
		fields: [imagePathsTable.progressId],
		references: [progressTable.id],
	}),
}));


import { createInsertSchema, createSelectSchema } from "drizzle-zod"
import { imagePathsTable, progressTable, usersTable } from "./schema"
import { z } from "zod"

export const insertUserSchema = createInsertSchema(usersTable).omit({
	serialId: true,
	createdAt: true,
	id: true,
	updatedAt: true,
	deletedAt: true,
})

export const insertProgressSchema = createInsertSchema(progressTable, {
	userId: z.string(),
	weight: z.number(),
	hipCircumference: z.number(),
	chestCircumference: z.number(),
	shoulderWidth: z.number(),
	abdominalGirth: z.number(),
})

export const insertImagePathSchema = createInsertSchema(imagePathsTable).omit({
	serialId: true,
	createdAt: true,
	id: true,
	updatedAt: true,
	deletedAt: true,
})

export const updateUserSchema = createSelectSchema(usersTable).partial()

export const updateProgressSchema = createSelectSchema(progressTable).partial()

import { createInsertSchema } from "drizzle-zod"
import { progressTable, usersTable } from "./schema"

export const insertUserSchema = createInsertSchema(usersTable).omit({
	serialId: true,
	createdAt: true,
	id: true,
	updatedAt: true,
	deletedAt: true,
})
export const insertProgressSchema = createInsertSchema(progressTable).omit({
	serialId: true,
	createdAt: true,
	id: true,
	updatedAt: true,
	deletedAt: true,
})

import type z from "zod/v4"
import type { imagePathsTable, progressTable, usersTable } from "./schema"
import type { insertProgressSchema, insertUserSchema } from "./zod"

export type User = typeof usersTable.$inferSelect
export type ProgressEntry = typeof progressTable.$inferSelect
export type ImagePath = typeof imagePathsTable.$inferSelect
export type InsertUser = z.infer<typeof insertUserSchema>
export type InsertProgress = z.infer<typeof insertProgressSchema>

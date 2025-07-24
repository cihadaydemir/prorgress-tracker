import z from "zod/v4";
import { imagePathsTable, progressTable, usersTable } from "./schema";
import { insertProgressSchema, insertUserSchema } from "./zod";

export type User = typeof usersTable.$inferSelect;
export type ProgressEntry = typeof progressTable.$inferSelect;
export type ImagePath = typeof imagePathsTable.$inferSelect;
export type InsertUser = z.infer<typeof insertUserSchema>;
export type InsertProgress = z.infer<typeof insertProgressSchema>;


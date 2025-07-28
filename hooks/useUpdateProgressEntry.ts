import { db } from "@/db/db"
import { progressTable } from "@/db/schema"
import type { updateProgressSchema } from "@/db/zod"
import { useMutation, useQueryClient } from "@tanstack/react-query"
import { eq } from "drizzle-orm"
import type { z } from "zod"

export const useUpdateProgressEntry = () => {
	const queryClient = useQueryClient()
	return useMutation({
		mutationFn: async (entry: z.infer<typeof updateProgressSchema>) => {
			if (!entry.id) {
				throw new Error("Progress entry id is required")
			}
			return await db.update(progressTable).set(entry).where(eq(progressTable.id, entry.id))
		},
		onSuccess: () => {
			queryClient.invalidateQueries({ queryKey: ["progress"] })
		},
	})
}

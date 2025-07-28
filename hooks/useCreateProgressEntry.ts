import { db } from "@/db/db"
import { progressTable } from "@/db/schema"
import type { insertProgressSchema } from "@/db/zod"
import { useMutation, useQueryClient } from "@tanstack/react-query"
import type { z } from "zod"

export const useCreateProgressEntry = () => {
	const queryClient = useQueryClient()
	return useMutation({
		mutationFn: async (entry: z.infer<typeof insertProgressSchema>) => {
			return await db.insert(progressTable).values(entry).returning()
		},
		onSuccess: () => {
			queryClient.invalidateQueries({ queryKey: ["progress"] })
		},
	})
}

import { db } from "@/db/db"
import { progressTable } from "@/db/schema"
import { useMutation, useQueryClient } from "@tanstack/react-query"
import { eq } from "drizzle-orm"

export const useDeleteProgressEntry = () => {
	const queryClient = useQueryClient()
	return useMutation({
		mutationFn: async (id: string) => {
			return await db.delete(progressTable).where(eq(progressTable.id, id))
		},
		onSuccess: () => {
			queryClient.invalidateQueries({ queryKey: ["progress"] })
		},
	})
}

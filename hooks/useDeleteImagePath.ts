import { db } from "@/db/db"
import { imagePathsTable } from "@/db/schema"
import { useMutation, useQueryClient } from "@tanstack/react-query"
import { eq } from "drizzle-orm"

export const useDeleteImagePath = () => {
	const queryClient = useQueryClient()
	return useMutation({
		mutationFn: async (id: string) => {
			return await db.delete(imagePathsTable).where(eq(imagePathsTable.id, id))
		},
		onSuccess: (data, variables, context) => {
            // We don't know the progressId here, so we invalidate all image queries
			queryClient.invalidateQueries({ queryKey: ["images"] })
		},
	})
}

import { db } from "@/db/db"
import { imagePathsTable } from "@/db/schema"
import type { insertImagePathSchema } from "@/db/zod"
import { useMutation, useQueryClient } from "@tanstack/react-query"
import type { z } from "zod"

export const useCreateImagePath = () => {
	const queryClient = useQueryClient()
	return useMutation({
		mutationFn: async (imagePath: z.infer<typeof insertImagePathSchema>) => {
			return await db.insert(imagePathsTable).values(imagePath)
		},
		onSuccess: (data, variables) => {
			queryClient.invalidateQueries({ queryKey: ["images", variables.progressId] })
		},
	})
}

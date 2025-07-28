import { db } from "@/db/db"
import { usersTable } from "@/db/schema"
import type { insertUserSchema } from "@/db/zod"
import { useMutation, useQueryClient } from "@tanstack/react-query"
import type { z } from "zod"

export const useCreateUser = () => {
	const queryClient = useQueryClient()
	return useMutation({
		mutationFn: async (user: z.infer<typeof insertUserSchema>) => {
			return await db.insert(usersTable).values(user)
		},
		onSuccess: () => {
			queryClient.invalidateQueries({ queryKey: ["users"] })
		},
	})
}

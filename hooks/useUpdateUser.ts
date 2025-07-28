import { db } from "@/db/db"
import { usersTable } from "@/db/schema"
import type { updateUserSchema } from "@/db/zod"
import { useMutation, useQueryClient } from "@tanstack/react-query"
import { eq } from "drizzle-orm"
import type { z } from "zod"

export const useUpdateUser = () => {
	const queryClient = useQueryClient()
	return useMutation({
		mutationFn: async (user: z.infer<typeof updateUserSchema>) => {
			if (!user.id) {
				throw new Error("User id is required")
			}
			return await db.update(usersTable).set(user).where(eq(usersTable.id, user.id))
		},
		onSuccess: () => {
			queryClient.invalidateQueries({ queryKey: ["users"] })
		},
	})
}

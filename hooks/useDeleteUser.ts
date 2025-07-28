import { db } from "@/db/db"
import { usersTable } from "@/db/schema"
import { useMutation, useQueryClient } from "@tanstack/react-query"
import { eq } from "drizzle-orm"

export const useDeleteUser = () => {
	const queryClient = useQueryClient()
	return useMutation({
		mutationFn: async (id: string) => {
			return await db.delete(usersTable).where(eq(usersTable.id, id))
		},
		onSuccess: () => {
			queryClient.invalidateQueries({ queryKey: ["users"] })
		},
	})
}

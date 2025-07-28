import { db } from "@/db/db"
import { usersTable } from "@/db/schema"
import { useQuery } from "@tanstack/react-query"

export const useUsers = () => {
	return useQuery({
		queryKey: ["users"],
		queryFn: async () => {
			return await db.select().from(usersTable)
		},
	})
}

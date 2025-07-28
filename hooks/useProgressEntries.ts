import { db } from "@/db/db"
import { progressTable } from "@/db/schema"
import { useQuery } from "@tanstack/react-query"

export const useProgressEntries = () => {
	return useQuery({
		queryKey: ["progress"],
		queryFn: async () => {
			return await db.select().from(progressTable)
		},
	})
}

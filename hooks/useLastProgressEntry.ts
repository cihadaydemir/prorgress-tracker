import { db } from "@/db/db"
import { progressTable } from "@/db/schema"
import { useQuery } from "@tanstack/react-query"
import { desc } from "drizzle-orm"

export const useLastProgressEntry = () => {
	return useQuery({
		queryKey: ["progress", ["latest"]],
		queryFn: async () => {
			return await db.query.progressTable.findFirst({
				orderBy: desc(progressTable.createdAt),
			})
		},
	})
}

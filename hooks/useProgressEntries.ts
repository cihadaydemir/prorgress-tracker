import { db } from "@/db/db"
import { progressTable } from "@/db/schema"
import { useQuery } from "@tanstack/react-query"
import { asc } from "drizzle-orm"

export const useProgressEntries = () => {
	return useQuery({
		queryKey: ["progress"],
		queryFn: async () => {
			const progressEntriesWithImages = await db.query.progressTable.findMany({
				orderBy: asc(progressTable.createdAt),
				with: {
					images: true,
				},
			})

			return progressEntriesWithImages.map((entry) => ({
				...entry,
				images: entry.images.map((image) => image.path),
			}))
		},
	})
}

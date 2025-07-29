import { db } from "@/db/db"
import { useQuery } from "@tanstack/react-query"

export const useProgressEntries = () => {
	return useQuery({
		queryKey: ["progress"],
		queryFn: async () => {
			const progressEntriesWithImages = await db.query.progressTable.findMany({
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

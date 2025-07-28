import { db } from "@/db/db"
import { imagePathsTable } from "@/db/schema"
import { useQuery } from "@tanstack/react-query"
import { eq } from "drizzle-orm"

export const useImagePaths = (progressId: string) => {
	return useQuery({
		queryKey: ["images", progressId],
		queryFn: async () => {
			return await db.select().from(imagePathsTable).where(eq(imagePathsTable.progressId, progressId))
		},
	})
}

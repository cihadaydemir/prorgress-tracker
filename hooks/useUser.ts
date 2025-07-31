import { db } from "@/db/db"
import { useQuery } from "@tanstack/react-query"

export const useUser = () => {
  return useQuery({
    queryKey: ["user"],
    queryFn: async () => {
      return await db.query.usersTable.findFirst()
    },
  })
}

import { drizzle } from "drizzle-orm/expo-sqlite/driver"
import { openDatabaseSync } from "expo-sqlite"
import * as schema from "@/db/schema"

export const DATABASE_NAME = "db.db"

export const expo_sqlite = openDatabaseSync(DATABASE_NAME, { enableChangeListener: true })
export const db = drizzle(expo_sqlite, { schema })

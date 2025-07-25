// import { db } from "@/db/db";

import { eq } from "drizzle-orm"
import { drizzle, useLiveQuery } from "drizzle-orm/expo-sqlite"
import { openDatabaseSync } from "expo-sqlite"
import { Text, TouchableOpacity, View } from "react-native"
import { DATABASE_NAME } from "@/db/db"
import * as schema from "@/db/schema"

export const expo_sqlite = openDatabaseSync(DATABASE_NAME, { enableChangeListener: true })
export const db = drizzle(expo_sqlite, { schema })

export default function Home() {
	const { data: users } = useLiveQuery(db.query.usersTable.findMany())

	return (
		<View
			style={{
				flex: 1,
				justifyContent: "center",
				alignItems: "center",
			}}
		>
			<Text>Home</Text>

			<View
				style={{
					flex: 1,
					gap: 10,
				}}
			>
				{users?.map((user) => (
					<TouchableOpacity
						onPress={async () => {
							await db.delete(schema.usersTable).where(eq(schema.usersTable.id, user.id))
						}}
					>
						<Text
							key={user.id}
							style={{
								color: "black",
							}}
						>
							{user.name}
						</Text>
					</TouchableOpacity>
				))}
			</View>
		</View>
	)
}

// import { db } from "@/db/db";

import { DATABASE_NAME } from "@/db/db"
import * as schema from "@/db/schema"
import { useProgressEntries } from "@/hooks/useProgressEntries"
import { useUsers } from "@/hooks/useUsers"
import { eq } from "drizzle-orm"
import { drizzle } from "drizzle-orm/expo-sqlite"
import { openDatabaseSync } from "expo-sqlite"
import { Image, SafeAreaView, Text, TouchableOpacity, View } from "react-native"

export const expo_sqlite = openDatabaseSync(DATABASE_NAME, { enableChangeListener: true })
export const db = drizzle(expo_sqlite, { schema })

export default function Home() {
	const { data: users } = useUsers()
	const { data: progress } = useProgressEntries()
	console.log("prgress", progress)
	return (
		<SafeAreaView
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
						key={user.id}
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
				{progress?.map((progress) => (
					<View key={progress.id}>
						<Text>{progress.weight}</Text>
						<View className="flex flex-row gap-2">
							{progress.images.map((image) => {
								console.log("image src", image)
								return <Image key={image} source={{ uri: image }} style={{ width: 50, height: 50 }} />
							})}
						</View>
					</View>
				))}
			</View>
		</SafeAreaView>
	)
}

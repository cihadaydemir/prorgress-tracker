import { db } from "@/db/db"
import { useLiveQuery } from "drizzle-orm/expo-sqlite"
import { Redirect, Stack } from "expo-router"

export default function AppLayout() {
	const user = useLiveQuery(db.query.usersTable.findFirst())

	if (!user) {
		return <Redirect href={"/setup"} />
	}

	return (
		<Stack screenOptions={{ headerShown: false }}>
			<Stack.Screen name="(tabs)" />
			<Stack.Screen
				name="(screens)"
				options={{
					presentation: "formSheet",
				}}
			/>
		</Stack>
	)
}

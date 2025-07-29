import Ionicons from "@expo/vector-icons/Ionicons"
import { useLiveQuery } from "drizzle-orm/expo-sqlite"
import { Tabs, useRouter } from "expo-router"
import { type ReactNode, useEffect } from "react"
import { db } from "."

export default function TabLayout() {
	return (
		<Tabs screenOptions={{ headerShown: false }}>
			<Tabs.Screen
				name="index"
				options={{
					title: "Home",
					tabBarIcon: ({ color, size }) => <Ionicons name="home" size={size} color={color} />,
				}}
			/>
			<Tabs.Screen
				name="camera"
				options={{
					title: "Camera",
					tabBarStyle: { display: "none" },
					tabBarIcon: ({ color, size }) => <Ionicons name="camera" size={size} color={color} />,
				}}
			/>
			<Tabs.Screen
				name="statistics"
				options={{
					title: "Statistics",
					tabBarIcon: ({ color, size }) => <Ionicons name="stats-chart" size={size} color={color} />,
				}}
			/>
		</Tabs>
	)
}

const SetupGuard = ({ children }: { children: ReactNode }) => {
	const user = useLiveQuery(db.query.usersTable.findFirst())
	const router = useRouter()
	useEffect(() => {
		console.log("user", user)
		if (!user) {
			router.replace("/(setup)/setup")
		}
	}, [user])
	// if (!user.data) {
	// 	return <Redirect href="/(setup)/setup" />
	// }
	return <>{children} </>
}

import "../global.css"

import { db, expo_sqlite } from "@/db/db"
import migrations from "@/drizzle/migrations"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import { useMigrations } from "drizzle-orm/expo-sqlite/migrator"
import { useDrizzleStudio } from "expo-drizzle-studio-plugin"
import { Stack } from "expo-router"
import { Suspense } from "react"
import { ActivityIndicator, Text, View } from "react-native"

const queryClient = new QueryClient()

export default function RootLayout() {
	const { success, error } = useMigrations(db, migrations)
	useDrizzleStudio(expo_sqlite)

	console.log("migration state", { success, error })
	if (error) {
		return (
			<View>
				<Text>Migration error: {error.message}</Text>
			</View>
		)
	}
	if (!success) {
		return (
			<View>
				<Text>Migration is in progress...</Text>
			</View>
		)
	}

	return (
		<Suspense fallback={<ActivityIndicator size="large" />}>
			<QueryClientProvider client={queryClient}>
				<Stack screenOptions={{ headerShown: false }}>
					<Stack.Screen name="(setup)" />
					<Stack.Screen name="(tabs)" />
				</Stack>
			</QueryClientProvider>
		</Suspense>
	)
}

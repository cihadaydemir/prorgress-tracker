// import { db } from "@/db/db";

import { useProgressEntries } from "@/hooks/useProgressEntries"
import { FlatList, SafeAreaView, Text, View } from "react-native"

import { ProgressCard } from "../components/ProgressCard"

export default function Home() {
	const { data: progress } = useProgressEntries()

	if (!progress || progress.length === 0)
		return (
			<SafeAreaView className="flex-1 bg-gray-100">
				<View className="flex-1 justify-center items-center">
					<Text className="text-lg text-gray-500">No progress entries yet.</Text>
				</View>
			</SafeAreaView>
		)

	return (
		<SafeAreaView className="flex-1 bg-gray-100">
			<View className="p-4">
				<Text className="text-2xl font-bold mb-4">Progress History</Text>
				<FlatList
					data={progress}
					keyExtractor={(item) => item.id}
					renderItem={({ item }) => <ProgressCard entry={item} />}
					contentContainerStyle={{ paddingBottom: 20 }}
				/>
			</View>
		</SafeAreaView>
	)
}

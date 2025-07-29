import { formatDate } from "@/utils/utils"
import { Image } from "expo-image"
import { ScrollView, Text, View } from "react-native"

export type ProgressData = {
	id: string
	weight: number
	hipCircumference: number
	chestCircumference: number
	shoulderWidth: number
	abdominalGirth: number
	createdAt: string
	images: string[]
}

export function ProgressCard({ entry }: { entry: ProgressData }) {
	return (
		<View className="bg-white rounded-lg shadow-md p-4 mb-4">
			<Text className="text-lg font-bold mb-2">{formatDate(entry.createdAt)}</Text>
			<ScrollView horizontal showsHorizontalScrollIndicator={false} className="mb-4">
				{entry.images.map((image) => (
					<Image key={image} source={{ uri: image }} className="w-40 h-40 rounded-lg mr-2" />
				))}
			</ScrollView>
			<View className="flex-row flex-wrap">
				<View className="w-1/2 mb-2 pr-1">
					<Text className="font-semibold">Weight:</Text>
					<Text>{entry.weight} kg</Text>
				</View>
				<View className="w-1/2 mb-2 pl-1">
					<Text className="font-semibold">Abdominal Girth:</Text>
					<Text>{entry.abdominalGirth} cm</Text>
				</View>
				<View className="w-1/2 mb-2 pr-1">
					<Text className="font-semibold">Hip Circumference:</Text>
					<Text>{entry.hipCircumference} cm</Text>
				</View>
				<View className="w-1/2 mb-2 pl-1">
					<Text className="font-semibold">Chest Circumference:</Text>
					<Text>{entry.chestCircumference} cm</Text>
				</View>
				<View className="w-1/2 pr-1">
					<Text className="font-semibold">Shoulder Width:</Text>
					<Text>{entry.shoulderWidth} cm</Text>
				</View>
			</View>
		</View>
	)
}

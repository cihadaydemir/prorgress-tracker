import { formatDate } from "@/utils/utils"
import { Image } from "expo-image"
import Ionicons from "@expo/vector-icons/Ionicons"
import { styled } from "nativewind"
import { Alert, ScrollView, Text, TouchableOpacity, View } from "react-native"

const StyledIonicons = styled(Ionicons)
const StyledImage = styled(Image)

import { useDeleteProgressEntry } from "@/hooks/useDeleteProgressEntry"

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
        const deleteEntry = useDeleteProgressEntry()

        const handleDelete = () => {
                Alert.alert("Delete entry", "Are you sure you want to delete this entry?", [
                        { text: "Cancel", style: "cancel" },
                        { text: "Delete", style: "destructive", onPress: () => deleteEntry.mutate(entry.id) },
                ])
        }

        return (
                <View className="relative bg-white rounded-lg shadow-md p-4 mb-4">
                        <TouchableOpacity
                                onPress={handleDelete}
                                className="absolute right-2 top-2 p-1 rounded-full"
                        >
                                <StyledIonicons name="trash" size={20} className="text-red-600" />
                        </TouchableOpacity>
                        <Text className="text-lg font-bold mb-2">{formatDate(entry.createdAt)}</Text>
			<ScrollView horizontal showsHorizontalScrollIndicator={false} className="mb-4">
                                {entry.images.map((image) => (
                                        <StyledImage
                                                key={image}
                                                source={{ uri: image }}
                                                className="mr-2 h-12 w-12 rounded-lg"
                                        />
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

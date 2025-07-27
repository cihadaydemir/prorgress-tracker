import { ProgressForm } from "@/components/ProgressForm"
import { Form } from "@/components/ui/form"
import { insertProgressSchema } from "@/db/zod"
import { imagesAtom } from "@/stores/camera"
import Ionicons from "@expo/vector-icons/Ionicons"
import { zodResolver } from "@hookform/resolvers/zod"
import { useRouter } from "expo-router"
import { useAtom } from "jotai"
import { useForm } from "react-hook-form"
import { Button, Image, ScrollView, Text, TouchableOpacity, View } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"
import type z from "zod"

export default function ProgressEntryForm() {
	const [images, setImages] = useAtom(imagesAtom)
	const form = useForm<z.infer<typeof insertProgressSchema>>({
		resolver: zodResolver(insertProgressSchema),
		defaultValues: {
			weight: 0,
			hipCircumference: 0,
			chestCircumference: 0,
			shoulderWidth: 0,
			abdominalGirth: 0,
		},
	})
	const router = useRouter()

	console.log("images", images)
	return (
		<SafeAreaView className="flex-1 gap-1">
			<View className="flex-1 flex-row justify-between">
				<Text className="text-2xl font-bold">Progress</Text>
				<TouchableOpacity
					onPress={() => {
						form.reset()
						setImages([])
						router.replace("/")
					}}
				>
					<Ionicons name="close" size={24} color="black" />
				</TouchableOpacity>
			</View>
			<Text className="text-lg">Images</Text>
			<View className="flex-1 gap-2 flex-row">
				{images.length > 0 &&
					images.map((image) => <Image key={image.uri} src={image.uri} className="h-16 w-16" />)}
			</View>
			<ScrollView>
				<Form {...form}>
					<ProgressForm control={form.control} />
				</Form>
			</ScrollView>
			<Button title="Submit" onPress={form.handleSubmit((data) => console.log(data))} />
		</SafeAreaView>
	)
}

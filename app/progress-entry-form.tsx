import ImagePreviewCard from "@/components/image-preview-card"
import { ProgressForm } from "@/components/ProgressForm"
import { Form } from "@/components/ui/form"
import { insertProgressSchema } from "@/db/zod"
import { useCreateImagePath } from "@/hooks/useCreateImagePath"
import { useCreateProgressEntry } from "@/hooks/useCreateProgressEntry"
import { useUsers } from "@/hooks/useUsers"
import { imagesAtom } from "@/stores/camera"
import { persistImageToDevice } from "@/utils/utils"
import Ionicons from "@expo/vector-icons/Ionicons"
import { zodResolver } from "@hookform/resolvers/zod"
import { useRouter } from "expo-router"
import { useAtom } from "jotai"
import { useForm } from "react-hook-form"
import { Button, ScrollView, Text, TouchableOpacity, View } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"
import type z from "zod"

export default function ProgressEntryForm() {
	const { data: users } = useUsers()
	const createProgressEntry = useCreateProgressEntry()
	const createImagePath = useCreateImagePath()
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

	const onSubmit = async (data: z.infer<typeof insertProgressSchema>) => {
		if (!users) return

		const user = users[0]
		createProgressEntry.mutate(
			{ ...data, userId: user.id },
			{
				onSuccess: async (progressEntry) => {
					const persistedImages = await persistImageToDevice(images)
					persistedImages.forEach(async (image) => {
						createImagePath.mutate(
							{ progressId: progressEntry[0].id, path: image },
							{
								onSuccess: () => {
									router.replace("/")
								},
								onError: (e) => {
									console.error("Error creating image path entry", e)
								},
							},
						)
					})
				},
				onError: (e) => {
					console.error("Error creating progress entry", e)
				},
			},
		)
	}

	return (
		<SafeAreaView className="flex-1 gap-1">
			<View className="flex-row justify-between">
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
			<View className="gap-2 flex-row">
				{images.length > 0 &&
					images.map((image) => (
						<ImagePreviewCard
							image={image}
							onRemove={() => setImages(images.filter((img) => img.uri !== image.uri))}
							key={image.uri}
						/>
					))}
			</View>
			<Form {...form}>
				<ScrollView>
					<ProgressForm control={form.control} />
				</ScrollView>
				<View>
					<Button
						onPress={() => {
							onSubmit(form.getValues())
						}}
						title={"Submit"}
					/>
				</View>
			</Form>
		</SafeAreaView>
	)
}

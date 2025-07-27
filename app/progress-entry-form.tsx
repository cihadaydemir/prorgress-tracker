import ImagePreviewCard from "@/components/image-preview-card"
import { ProgressForm } from "@/components/ProgressForm"
import { Form } from "@/components/ui/form"
import { db } from "@/db/db"
import { imagePathsTable, progressTable } from "@/db/schema"
import { insertProgressSchema } from "@/db/zod"
import { imagesAtom } from "@/stores/camera"
import Ionicons from "@expo/vector-icons/Ionicons"
import { zodResolver } from "@hookform/resolvers/zod"
import { useRouter } from "expo-router"
import { useAtom } from "jotai"
import { useForm } from "react-hook-form"
import { Button, ScrollView, Text, TouchableOpacity, View } from "react-native"
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

	const onSubmit = async (data: z.infer<typeof insertProgressSchema>) => {
		console.log("data", data)
		const user = await db.query.usersTable.findFirst()
		if (!user) {
			return
		}
		const [progressEntry] = await db
			.insert(progressTable)
			.values({ ...data, userId: user?.id })
			.returning()
		images.forEach(async (image) => {
			await db.insert(imagePathsTable).values({
				path: image.uri,
				progressId: progressEntry.id,
			})
		})
		console.log("submitted succesful")
	}

	console.log("images", images)
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
			<Form {...form} handleSubmit={() => form.handleSubmit(onSubmit)}>
				<ScrollView>
					<ProgressForm control={form.control} />
				</ScrollView>
				<View>
					<Button onPress={form.handleSubmit(onSubmit)} title={"Submit"} />
				</View>
			</Form>
		</SafeAreaView>
	)
}

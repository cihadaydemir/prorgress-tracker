import type { CameraCapturedPicture } from "expo-camera"
import * as FileSystem from "expo-file-system"

export const persistImageToDevice = async (images: CameraCapturedPicture[]) => {
	const persistedImages = images.map(async (image, index) => {
		const filename = `progress_${Date.now()}_${index}.jpg`
		const permanentPath = `${FileSystem.documentDirectory}${filename}`
		await FileSystem.moveAsync({
			from: image.uri,
			to: permanentPath,
		})
		return permanentPath
	})
	return await Promise.all(persistedImages)
}

export const formatDate = (dateString: string) => {
	const date = new Date(dateString)
	return date.toLocaleDateString("en-US", {
		year: "numeric",
		month: "long",
		day: "numeric",
	})
}

import type { CameraCapturedPicture } from "expo-camera"
import type React from "react"
import { View } from "react-native"
import ImagePreviewCard from "./image-preview-card"

interface ImageGalleryProps {
	images: CameraCapturedPicture[]
	removeImage: (index: number) => void
}

export const ImageGallery: React.FC<ImageGalleryProps> = ({ images, removeImage }) => {
	return (
		<View className="absolute bottom-32 left-4 z-10 flex-1 flex-row bg-transparent">
			{images.map((image, index) => (
				<ImagePreviewCard key={image.uri} image={image} onRemove={() => removeImage(index)} />
			))}
		</View>
	)
}

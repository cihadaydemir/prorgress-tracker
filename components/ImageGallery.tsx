import Ionicons from "@expo/vector-icons/Ionicons"
import type { CameraCapturedPicture } from "expo-camera"
import type React from "react"
import { Image, TouchableOpacity, View } from "react-native"

interface ImageGalleryProps {
	images: CameraCapturedPicture[]
	removeImage: (index: number) => void
}

export const ImageGallery: React.FC<ImageGalleryProps> = ({ images, removeImage }) => {
	return (
		<View className="absolute bottom-32 left-4 z-10 flex-1 flex-row bg-transparent">
			{images.map((image, index) => (
				<View className="flex-row" key={image.uri}>
					<Image source={{ uri: image.uri }} className="m-2 h-16 w-16" />
					<View className="absolute right-0 top-0 z-10 rounded-full bg-white">
						<TouchableOpacity onPress={() => removeImage(index)}>
							<Ionicons name="close" size={18} color="black" />
						</TouchableOpacity>
					</View>
				</View>
			))}
		</View>
	)
}

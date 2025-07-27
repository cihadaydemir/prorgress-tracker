import Ionicons from "@expo/vector-icons/Ionicons"
import type { CameraCapturedPicture } from "expo-camera"
import { Image, TouchableOpacity, View } from "react-native"

export default function ImagePreviewCard({ image, onRemove }: { image: CameraCapturedPicture; onRemove: () => void }) {
	return (
		<View className="flex-row" key={image.uri}>
			<Image source={{ uri: image.uri }} className="m-2 h-16 w-16" />
			<View className="absolute right-0 top-0 z-10 rounded-full bg-white">
				<TouchableOpacity
					onPress={() => {
						onRemove()
					}}
				>
					<Ionicons name="close" size={18} color="black" />
				</TouchableOpacity>
			</View>
		</View>
	)
}

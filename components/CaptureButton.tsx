import type { CameraCapturedPicture } from "expo-camera"
import type React from "react"
import { Text, TouchableOpacity, View } from "react-native"

interface CaptureButtonProps {
	handleCapture: () => void
	handleDoneBtn: () => void
	images: CameraCapturedPicture[]
}

export const CaptureButton: React.FC<CaptureButtonProps> = ({ handleCapture, handleDoneBtn, images }) => {
	return (
		<View className="absolute flex-row bottom-8 w-full items-center justify-center">
			<TouchableOpacity onPress={handleCapture}>
				<View className="w-[70px] h-[70px] rounded-full bg-white/70 border-2 border-white" />
			</TouchableOpacity>
			{images.length > 0 && (
				<TouchableOpacity
					onPress={handleDoneBtn}
					className="absolute right-4 bg-white/70 p-2.5 rounded-[10px] border-2 border-white"
				>
					<Text>Done</Text>
				</TouchableOpacity>
			)}
		</View>
	)
}

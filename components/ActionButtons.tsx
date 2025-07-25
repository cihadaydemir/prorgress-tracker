import Ionicons from "@expo/vector-icons/Ionicons"
import MaterialIcons from "@expo/vector-icons/MaterialIcons"
import type React from "react"
import { TouchableOpacity, View } from "react-native"

interface ActionButtonsProps {
	handleOnBack: () => void
	toggleCameraFacing: () => void
}

export const ActionButtons: React.FC<ActionButtonsProps> = ({ handleOnBack, toggleCameraFacing }) => {
	return (
		<>
			<View className="absolute top-4 left-4 z-10">
				<TouchableOpacity onPress={handleOnBack}>
					<Ionicons name="close" size={24} color="white" />
				</TouchableOpacity>
			</View>
			<View className="absolute top-4 right-4 z-10">
				<TouchableOpacity onPress={toggleCameraFacing}>
					<MaterialIcons name="flip-camera-ios" size={24} color="white" />
				</TouchableOpacity>
			</View>
		</>
	)
}

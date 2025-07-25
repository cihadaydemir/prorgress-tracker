import Ionicons from "@expo/vector-icons/Ionicons"
import MaterialIcons from "@expo/vector-icons/MaterialIcons"
import type React from "react"
import { StyleSheet, TouchableOpacity, View } from "react-native"

interface ActionButtonsProps {
	handleOnBack: () => void
	toggleCameraFacing: () => void
}

export const ActionButtons: React.FC<ActionButtonsProps> = ({ handleOnBack, toggleCameraFacing }) => {
	return (
		<>
			<View style={styles.closeButton}>
				<TouchableOpacity onPress={handleOnBack}>
					<Ionicons name="close" size={24} color="white" />
				</TouchableOpacity>
			</View>
			<View style={styles.actionButtons}>
				<TouchableOpacity onPress={toggleCameraFacing}>
					<MaterialIcons name="flip-camera-ios" size={24} color="white" />
				</TouchableOpacity>
			</View>
		</>
	)
}

const styles = StyleSheet.create({
	actionButtons: {
		flex: 1,
		flexDirection: "row",
		backgroundColor: "transparent",
		position: "absolute",
		top: 16,
		right: 16,
		zIndex: 1,
	},
	closeButton: {
		position: "absolute",
		top: 16,
		left: 16,
		zIndex: 1,
	},
})

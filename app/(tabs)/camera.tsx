import { CameraView } from "expo-camera"
import React from "react"
import { StyleSheet, View } from "react-native"
import { useSafeAreaInsets } from "react-native-safe-area-context"
import { ActionButtons } from "../../components/ActionButtons"
import { CaptureButton } from "../../components/CaptureButton"
import { ImageGallery } from "../../components/ImageGallery"
import { useCamera } from "../../hooks/useCamera"

export default function CameraScreen() {
	const { facing, images, cameraRef, handleCapture, handleDoneBtn, handleOnBack, removeImage, toggleCameraFacing } =
		useCamera()
	const insets = useSafeAreaInsets()

	return (
		<View style={{ ...styles.container, paddingTop: insets.top, paddingBottom: insets.bottom }}>
			<CameraView style={styles.camera} facing={facing} ref={cameraRef}>
				<ActionButtons handleOnBack={handleOnBack} toggleCameraFacing={toggleCameraFacing} />
				<ImageGallery images={images} removeImage={removeImage} />
				<CaptureButton handleCapture={handleCapture} handleDoneBtn={handleDoneBtn} images={images} />
			</CameraView>
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: "center",
	},
	camera: {
		flex: 1,
	},
})

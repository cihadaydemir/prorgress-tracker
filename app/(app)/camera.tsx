import { CameraView } from "expo-camera"
import React from "react"
import { StyleSheet, View } from "react-native"
import { ActionButtons } from "../../components/ActionButtons"
import { CaptureButton } from "../../components/CaptureButton"
import { ImageGallery } from "../../components/ImageGallery"
import { useCamera } from "../../hooks/useCamera"

export default function CameraScreen() {
	const { facing, images, cameraRef, handleCapture, handleDoneBtn, handleOnBack, removeImage, toggleCameraFacing } =
		useCamera()

	return (
		<View style={styles.container}>
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

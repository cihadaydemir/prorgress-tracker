import { type CameraCapturedPicture, type CameraType, type CameraView, useCameraPermissions } from "expo-camera"
import { useRouter } from "expo-router"
import { useEffect, useRef, useState } from "react"

export const useCamera = () => {
	const [facing, setFacing] = useState<CameraType>("back")
	const [images, setImages] = useState<CameraCapturedPicture[]>([])
	const cameraRef = useRef<CameraView>(null)
	const [permission, requestPermission] = useCameraPermissions()
	const router = useRouter()

	useEffect(() => {
		if (!permission?.granted) {
			requestPermission()
		}
	}, [permission?.status])

	const toggleCameraFacing = () => setFacing((current) => (current === "back" ? "front" : "back"))

	const handleCapture = async () => {
		const photo = await cameraRef?.current?.takePictureAsync()
		if (!photo) return
		setImages((prev) => [...prev, photo])
	}

	const handleOnBack = () => {
		router.back()
		setImages([])
	}

	const handleDoneBtn = () => {
		//TODO persist images to local storage

		console.log("persisted images", images)
	}

	const removeImage = (index: number) => {
		setImages((prev) => prev.filter((_, i) => i !== index))
	}

	return {
		facing,
		images,
		cameraRef,
		permission,
		toggleCameraFacing,
		handleCapture,
		handleOnBack,
		handleDoneBtn,
		removeImage,
	}
}

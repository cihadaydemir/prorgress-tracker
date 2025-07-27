import type { CameraCapturedPicture } from "expo-camera"
import { atom } from "jotai"

export const imagesAtom = atom<CameraCapturedPicture[]>([])

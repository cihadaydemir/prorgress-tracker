import type { ThemeMode } from "@/theme/types"
import { atom } from "jotai"
import { atomWithStorage } from "jotai/utils"
import { Appearance } from "react-native"

export const themeModeAtom = atomWithStorage<ThemeMode>("theme-mode", "system")

export const systemThemeAtom = atom<"light" | "dark">(() => {
	return Appearance.getColorScheme() === "dark" ? "dark" : "light"
})

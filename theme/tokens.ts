import type { DesignTokens } from "./types"

export const lightTokens: DesignTokens = {
	colors: {
		bg: "oklch(1 0 0)",
		fg: "oklch(0.147 0.004 49.25)",

		primary: "oklch(0.705 0.213 47.604)",
		primaryFg: "oklch(1 0 0)",

		secondary: "oklch(0.923 0.003 48.717)",
		secondaryFg: "oklch(0.147 0.004 49.25)",

		overlay: "oklch(1 0 0)",
		overlayFg: "oklch(0.147 0.004 49.25)",

		accent: "oklch(0.705 0.213 47.604)",
		accentFg: "oklch(1 0 0)",

		muted: "oklch(0.97 0.001 106.424)",
		mutedFg: "oklch(0.553 0.013 58.071)",

		success: "oklch(0.596 0.145 163.225)",
		successFg: "oklch(1 0 0)",

		warning: "oklch(0.828 0.189 84.429)",
		warningFg: "oklch(0.279 0.077 45.635)",

		danger: "oklch(0.577 0.245 27.325)",
		dangerFg: "oklch(0.971 0.013 17.38)",

		border: "oklch(0.909 0.005 56.366)",
		input: "oklch(0.869 0.005 56.366)",
		ring: "oklch(0.646 0.222 41.116)",

		navbar: "oklch(0.995 0.001 106.423)",
		navbarFg: "oklch(0.147 0.004 49.25)",

		sidebar: "oklch(0.97 0.001 106.424)",
		sidebarFg: "oklch(0.147 0.004 49.25)",

		chart1: "oklch(0.646 0.222 41.116)",
		chart2: "oklch(0.75 0.183 55.934)",
		chart3: "oklch(0.837 0.128 66.29)",
		chart4: "oklch(0.901 0.076 70.697)",
		chart5: "oklch(0.954 0.038 75.164)",
	},
	radius: {
		xs: 4,
		sm: 6,
		md: 7.2,
		lg: 8,
		xl: 10,
		"2xl": 12,
		"3xl": 16,
		"4xl": 24,
	},
	spacing: {
		xs: 4,
		sm: 8,
		md: 16,
		lg: 24,
		xl: 32,
		"2xl": 48,
	},
}

export const darkTokens: DesignTokens = {
	colors: {
		bg: "oklch(0.097 0.004 49.25)",
		fg: "oklch(0.985 0.001 106.423)",

		primary: "oklch(0.705 0.213 47.604)",
		primaryFg: "oklch(1 0 0)",

		secondary: "oklch(0.238 0.007 34.298)",
		secondaryFg: "oklch(0.985 0.001 106.423)",

		accent: "oklch(0.705 0.213 47.604)",
		accentFg: "oklch(1 0 0)",

		muted: "oklch(0.216 0.006 56.043)",
		mutedFg: "oklch(0.709 0.01 56.259)",

		overlay: "oklch(0.186 0.006 56.043)",
		overlayFg: "oklch(0.985 0.001 106.423)",

		success: "oklch(0.596 0.145 163.225)",
		successFg: "oklch(1 0 0)",

		warning: "oklch(0.828 0.189 84.429)",
		warningFg: "oklch(0.279 0.077 45.635)",

		danger: "oklch(0.577 0.245 27.325)",
		dangerFg: "oklch(0.971 0.013 17.38)",

		border: "oklch(0.274 0.01 67.558)",
		input: "oklch(0.324 0.01 67.558)",
		ring: "oklch(0.646 0.222 41.116)",

		navbar: "oklch(0.196 0.006 56.043)",
		navbarFg: "oklch(0.985 0.001 106.423)",

		sidebar: "oklch(0.166 0.006 56.043)",
		sidebarFg: "oklch(0.985 0.001 106.423)",

		chart1: "oklch(0.553 0.195 38.402)",
		chart2: "oklch(0.705 0.213 47.604)",
		chart3: "oklch(0.75 0.183 55.934)",
		chart4: "oklch(0.837 0.128 66.29)",
		chart5: "oklch(0.901 0.076 70.697)",
	},
	radius: lightTokens.radius,
	spacing: lightTokens.spacing,
}

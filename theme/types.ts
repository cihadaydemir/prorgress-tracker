export interface DesignTokens {
	colors: {
		bg: string
		fg: string
		primary: string
		primaryFg: string
		secondary: string
		secondaryFg: string
		overlay: string
		overlayFg: string
		accent: string
		accentFg: string
		muted: string
		mutedFg: string
		success: string
		successFg: string
		warning: string
		warningFg: string
		danger: string
		dangerFg: string
		border: string
		input: string
		ring: string
		navbar: string
		navbarFg: string
		sidebar: string
		sidebarFg: string
		chart1: string
		chart2: string
		chart3: string
		chart4: string
		chart5: string
	}
	radius: {
		xs: number
		sm: number
		md: number
		lg: number
		xl: number
		"2xl": number
		"3xl": number
		"4xl": number
	}
	spacing: {
		xs: number
		sm: number
		md: number
		lg: number
		xl: number
		"2xl": number
	}
}

export type ThemeMode = "light" | "dark" | "system"

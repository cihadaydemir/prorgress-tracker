export interface DesignTokens {
	colors: {
		primary: string
		primaryForeground: string
		secondary: string
		secondaryForeground: string
		background: string
		foreground: string
		muted: string
		mutedForeground: string
		border: string
		input: string
		ring: string
		destructive: string
		destructiveForeground: string
		success: string
		successForeground: string
		warning: string
		warningForeground: string
	}
	spacing: {
		xs: string
		sm: string
		md: string
		lg: string
		xl: string
	}
	typography: {
		fontSizes: {
			xs: string
			sm: string
			base: string
			lg: string
			xl: string
			"2xl": string
		}
		fontWeights: {
			normal: string
			medium: string
			semibold: string
			bold: string
		}
	}
}

export type ThemeMode = "light" | "dark" | "system"

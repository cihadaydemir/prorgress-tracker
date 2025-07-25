import * as React from "react"
import { StyleSheet, Text, TouchableOpacity, type TouchableOpacityProps } from "react-native"

interface ButtonProps extends TouchableOpacityProps {
	children: React.ReactNode
}

const Button = React.forwardRef<TouchableOpacity, ButtonProps>(({ children, style, ...props }, ref) => {
	return (
		<TouchableOpacity style={[styles.button, style]} ref={ref} {...props}>
			<Text style={styles.text}>{children}</Text>
		</TouchableOpacity>
	)
})

Button.displayName = "Button"

const styles = StyleSheet.create({
	button: {
		backgroundColor: "#007AFF",
		paddingVertical: 10,
		paddingHorizontal: 20,
		borderRadius: 8,
		alignItems: "center",
		justifyContent: "center",
	},
	text: {
		color: "#FFFFFF",
		fontSize: 16,
		fontWeight: "600",
	},
})

export { Button }

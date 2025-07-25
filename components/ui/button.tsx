import * as React from "react"
import { Text, TouchableOpacity, type TouchableOpacityProps } from "react-native"

interface ButtonProps extends TouchableOpacityProps {
	children: React.ReactNode
	className?: string
}

const Button = React.forwardRef<React.ElementRef<typeof TouchableOpacity>, ButtonProps>(
	({ children, className, ...props }, ref) => {
	return (
		<TouchableOpacity
			className={`bg-blue-500 py-2.5 px-5 rounded-lg items-center justify-center ${className}`}
			ref={ref}
			{...props}
		>
			<Text className="text-white text-base font-semibold">{children}</Text>
		</TouchableOpacity>
	)
})

Button.displayName = "Button"

export { Button }

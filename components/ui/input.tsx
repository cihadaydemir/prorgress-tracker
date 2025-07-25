import * as React from "react"
import { TextInput, type TextInputProps } from "react-native"

const Input = React.forwardRef<React.ElementRef<typeof TextInput>, TextInputProps & { className?: string }>(
	({ className, ...props }, ref) => {
		return (
			<TextInput
				ref={ref}
				className={`h-10 border border-gray-400 rounded-lg px-2.5 ${className}`}
				{...props}
			/>
		)
	},
)

Input.displayName = "Input"

export { Input }

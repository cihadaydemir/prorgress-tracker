import * as React from "react"
import { Text, type TextProps } from "react-native"

const Label = React.forwardRef<React.ElementRef<typeof Text>, TextProps & { className?: string }>(
	({ className, ...props }, ref) => {
		return <Text ref={ref} className={`text-base font-medium mb-2 ${className}`} {...props} />
	},
)

Label.displayName = "Label"

export { Label }

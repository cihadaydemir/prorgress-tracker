import * as React from "react"
import {
	Controller,
	type ControllerProps,
	type FieldPath,
	type FieldValues,
	FormProvider,
	useFormContext,
} from "react-hook-form"
import { Text, type TextProps, View, type ViewProps } from "react-native"

import { Label } from "@/components/ui/label"

type FormFieldContextValue<
	TFieldValues extends FieldValues = FieldValues,
	TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>,
> = {
	name: TName
}

const FormFieldContext = React.createContext<FormFieldContextValue>({} as FormFieldContextValue)

const FormField = <
	TFieldValues extends FieldValues = FieldValues,
	TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>,
>({
	...props
}: ControllerProps<TFieldValues, TName>) => {
	return (
		<FormFieldContext.Provider value={{ name: props.name }}>
			<Controller {...props} />
		</FormFieldContext.Provider>
	)
}

const useFormField = () => {
	const fieldContext = React.useContext(FormFieldContext)
	const { getFieldState, formState } = useFormContext()

	if (!fieldContext) {
		throw new Error("useFormField should be used within a <FormField>")
	}

	const fieldState = getFieldState(fieldContext.name, formState)

	return {
		name: fieldContext.name,
		...fieldState,
	}
}

const FormItem = React.forwardRef<React.ElementRef<typeof View>, ViewProps & { className?: string }>(
	({ className, ...props }, ref) => {
		return <View ref={ref} className={`${className}`} {...props} />
	},
)
FormItem.displayName = "FormItem"

const FormLabel = React.forwardRef<React.ElementRef<typeof Label>, React.ComponentPropsWithoutRef<typeof Label>>(
	({ className, ...props }, ref) => {
		const { error } = useFormField()
		return <Label ref={ref} className={`${className} ${error ? "text-red-500" : ""}`} {...props} />
	},
)
FormLabel.displayName = "FormLabel"

const FormControl = React.forwardRef<React.ElementRef<typeof View>, ViewProps & { className?: string }>(
	({ className, ...props }, ref) => {
		return <View ref={ref} className={className} {...props} />
	},
)
FormControl.displayName = "FormControl"

const FormMessage = React.forwardRef<
	React.ElementRef<typeof Text>,
	TextProps & { className?: string }
>(({ className, children, ...props }, ref) => {
	const { error } = useFormField()
	const body = error ? String(error?.message) : children

	if (!body) {
		return null
	}

	return (
		<Text ref={ref} className={`text-xs text-red-500 mt-1 ${className}`} {...props}>
			{body}
		</Text>
	)
})
FormMessage.displayName = "FormMessage"



const Form = FormProvider

export { useFormField, Form, FormItem, FormLabel, FormControl, FormMessage, FormField }

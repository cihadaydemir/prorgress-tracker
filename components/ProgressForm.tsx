import type { SetupSchema } from "@/app/(app)/setup"
import type { Control } from "react-hook-form"

import { FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"

export function ProgressForm({ control }: { control: Control<SetupSchema> }) {
	return (
		<>
			<FormField
				control={control}
				name="weight"
				render={({ field: { onChange, onBlur, value } }) => (
					<FormItem className="mb-4">
						<FormLabel>Weight (kg)</FormLabel>
						<FormControl>
							<Input
								keyboardType="numeric"
								onBlur={onBlur}
								onChangeText={(text) => onChange(parseInt(text, 10) || 0)}
								value={value?.toString()}
							/>
						</FormControl>
						<FormMessage />
					</FormItem>
				)}
			/>
			<FormField
				control={control}
				name="hipCircumference"
				render={({ field: { onChange, onBlur, value } }) => (
					<FormItem className="mb-4">
						<FormLabel>Hip Circumference (cm)</FormLabel>
						<FormControl>
							<Input
								keyboardType="numeric"
								onBlur={onBlur}
								onChangeText={(text) => onChange(parseInt(text, 10) || 0)}
								value={value?.toString()}
							/>
						</FormControl>
						<FormMessage />
					</FormItem>
				)}
			/>
			<FormField
				control={control}
				name="chestCircumference"
				render={({ field: { onChange, onBlur, value } }) => (
					<FormItem className="mb-4">
						<FormLabel>Chest Circumference (cm)</FormLabel>
						<FormControl>
							<Input
								keyboardType="numeric"
								onBlur={onBlur}
								onChangeText={(text) => onChange(parseInt(text, 10) || 0)}
								value={value?.toString()}
							/>
						</FormControl>
						<FormMessage />
					</FormItem>
				)}
			/>
			<FormField
				control={control}
				name="shoulderWidth"
				render={({ field: { onChange, onBlur, value } }) => (
					<FormItem className="mb-4">
						<FormLabel>Shoulder Width (cm)</FormLabel>
						<FormControl>
							<Input
								keyboardType="numeric"
								onBlur={onBlur}
								onChangeText={(text) => onChange(parseInt(text, 10) || 0)}
								value={value?.toString()}
							/>
						</FormControl>
						<FormMessage />
					</FormItem>
				)}
			/>
			<FormField
				control={control}
				name="abdominalGirth"
				render={({ field: { onChange, onBlur, value } }) => (
					<FormItem className="mb-4">
						<FormLabel>Abdominal Girth (cm)</FormLabel>
						<FormControl>
							<Input
								keyboardType="numeric"
								onBlur={onBlur}
								onChangeText={(text) => onChange(parseInt(text, 10) || 0)}
								value={value?.toString()}
							/>
						</FormControl>
						<FormMessage />
					</FormItem>
				)}
			/>
		</>
	)
}

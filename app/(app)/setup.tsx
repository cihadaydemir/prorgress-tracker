import { zodResolver } from "@hookform/resolvers/zod"
import { useRouter } from "expo-router"
import { useForm } from "react-hook-form"
import { ScrollView, StyleSheet, Text, View } from "react-native"
import type { z } from "zod"

import { ProgressForm } from "@/components/ProgressForm"
import { UserForm } from "@/components/UserForm"
import { Button } from "@/components/ui/button"
import { Form } from "@/components/ui/form"
import { db } from "@/db/db"
import { progressTable, usersTable } from "@/db/schema"
import { insertProgressSchema, insertUserSchema } from "@/db/zod"

const setupSchema = insertUserSchema.merge(insertProgressSchema.omit({ userId: true }))

export type SetupSchema = z.infer<typeof setupSchema>

export default function SetupPage() {
	const router = useRouter()
	const form = useForm<z.infer<typeof setupSchema>>({
		resolver: zodResolver(setupSchema),
		defaultValues: {
			name: "",
			age: 0,
			height: 0,
			weight: 0,
			hipCircumference: 0,
			chestCircumference: 0,
			shoulderWidth: 0,
			abdominalGirth: 0,
		},
	})

	async function onSubmit(values: z.infer<typeof setupSchema>) {
		try {
			const [newUser] = await db
				.insert(usersTable)
				.values({
					name: values.name,
					age: values.age,
					height: values.height,
				})
				.returning()

			if (newUser) {
				await db.insert(progressTable).values({
					userId: newUser.id,
					weight: values.weight,
					hipCircumference: values.hipCircumference,
					chestCircumference: values.chestCircumference,
					shoulderWidth: values.shoulderWidth,
					abdominalGirth: values.abdominalGirth,
				})
				router.push("/(app)/(tabs)")
			}
		} catch (error) {
			console.error("Error during setup:", error)
		}
	}

	return (
		<Form {...form}>
			<ScrollView style={styles.container}>
				<Text style={styles.title}>Setup</Text>
				<View style={styles.formContainer}>
					<UserForm control={form.control} />
					<ProgressForm control={form.control} />
					<Button onPress={form.handleSubmit(onSubmit)}>Complete Setup</Button>
				</View>
			</ScrollView>
		</Form>
	)
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		padding: 16,
	},
	formContainer: {
		gap: 16,
		paddingVertical: 8,
	},
	title: {
		fontSize: 32,
		marginBottom: 8,
		fontWeight: "bold",
	},
})

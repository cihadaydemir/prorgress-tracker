import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "expo-router";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { ScrollView, StyleSheet, View } from "react-native";

import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import { UserForm } from "@/components/UserForm";
import { ProgressForm } from "@/components/ProgressForm";
import { insertUserSchema, insertProgressSchema } from "@/db/zod";
import { db } from "@/db/db";
import { usersTable, progressTable } from "@/db/schema";

const setupSchema = insertUserSchema.merge(insertProgressSchema.omit({ userId: true }));

export type SetupSchema = z.infer<typeof setupSchema>;

export default function SetupPage() {
  const router = useRouter();
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
  });

  async function onSubmit(values: z.infer<typeof setupSchema>) {
    try {
      const [newUser] = await db.insert(usersTable).values({
        name: values.name,
        age: values.age,
        height: values.height,
      }).returning();

      if (newUser) {
        await db.insert(progressTable).values({
          userId: newUser.id,
          weight: values.weight,
          hipCircumference: values.hipCircumference,
          chestCircumference: values.chestCircumference,
          shoulderWidth: values.shoulderWidth,
          abdominalGirth: values.abdominalGirth,
        });
        router.push("/(app)");
      }
    } catch (error) {
      console.error("Error during setup:", error);
    }
  }

  return (
    <Form {...form}>
      <ScrollView style={styles.container}>
        <View style={styles.formContainer}>
          <UserForm control={form.control} />
          <ProgressForm control={form.control} />
          <Button onPress={form.handleSubmit(onSubmit)}>
            Complete Setup
          </Button>
        </View>
      </ScrollView>
    </Form>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  formContainer: {
    gap: 16,
  }
});
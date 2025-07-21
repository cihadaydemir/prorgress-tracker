import { db } from "@/db/db";
import { useMigrations } from 'drizzle-orm/expo-sqlite/migrator';
import { Stack } from "expo-router";
import { Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import migrations from '../drizzle/migrations';


export default function RootLayout() {
  const { success, error } = useMigrations(db, migrations);

   if (error) {
    return (
      <View>
        <Text>Migration error: {error.message}</Text>
      </View>
    );
  }

   if (!success) {
    return (
      <View>
        <Text>Migration is in progress...</Text>
      </View>
    );
  }


  return   (
    <SafeAreaView  style={{ flex: 1 }}>
  <Stack screenOptions={{ headerShown: false }}>

      <Stack.Screen name="(app)" />
    </Stack>
    </SafeAreaView>
    )
}

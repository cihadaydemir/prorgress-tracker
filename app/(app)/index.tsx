import { db } from "@/db/db";
import { usersTable } from "@/db/schema";

import { useLiveQuery } from "drizzle-orm/expo-sqlite";
import { Button, Text, View } from "react-native";

export default function Home() {
  const { data: users } = useLiveQuery(db.query.usersTable.findMany());

  const insert = async () => {
    console.log('insert triggered')
    const insertedUser = await db
      .insert(usersTable)
      .values({
        name: "Foo",
        age: 25,
        height: 160,
      })
      .returning();
    console.log("inserting user", insertedUser);
  };

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text>Home</Text>
      <Button title="Insert Mock" onPress={insert} />

      <View
        style={{
          flex: 1,
          gap: 10,
        }}
      >
        {users?.map((user) => (
          <Text
            key={user.id}
            style={{
              color: "black",
            }}
          >
            {user.name}
          </Text>
        ))}
      </View>
    </View>
  );
}

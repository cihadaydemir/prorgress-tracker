// import { db } from "@/db/db";
import { usersTable } from "@/db/schema";

import { DATABASE_NAME } from "@/db/db";
import * as schema from "@/db/schema";
import { drizzle, useLiveQuery } from "drizzle-orm/expo-sqlite";
import { openDatabaseSync } from "expo-sqlite";
import { Button, Text, View } from "react-native";

export const expo_sqlite = openDatabaseSync(DATABASE_NAME, { enableChangeListener: true });
export const db = drizzle(expo_sqlite, { schema });

export default function Home() {
  const { data: users } = useLiveQuery(db.query.usersTable.findMany());
  console.log('users', users)
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
      <Button title="Insert Mock" onPress={async ()=>{
        try{

          const insertedUser = await db.insert(usersTable).values({
           name:"Cihad2",
           age:25,
           height:180,
         }).returning()
         console.log('insertedUser',insertedUser)
        }catch(e){
          console.log('error',e)
        }
      }} />

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

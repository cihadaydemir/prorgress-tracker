import { db } from "@/db/db";
import { usersTable } from "@/db/schema";
import { useEffect, useState } from "react";
import { Text, View } from "react-native";

export default  function Home() {
  const [users, setUsers] = useState<typeof usersTable.$inferSelect[] | null>([]);

  useEffect(() => {
    (async ()=>{

         db.insert(usersTable).values({
      name:"Foo",
      age:25,
      height:160,
    })

      const users = await db.select().from(usersTable);
      console.log('users',users)
      setUsers(users);
    })
  });

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text>Home</Text>
      {users?.map((user) => (
        <Text key={user.id}>{user.name}</Text>
      ))}
    </View>
  );
}

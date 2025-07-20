
import Ionicons from '@expo/vector-icons/Ionicons';
import { Tabs, useRouter } from 'expo-router';
import React from 'react';
const AppLayout = () => {
  const router = useRouter();

  return (
    <Tabs screenOptions={{ headerShown: false }}>
      <Tabs.Screen name="index" options={{
        title:"Home",
        tabBarIcon: ({ color, size }) => (
          <Ionicons name="home" size={size} color={color} />
        ),
      }}/>
      <Tabs.Screen
        name="camera"
        options={{
          tabBarStyle: { display: 'none' },
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="camera" size={size} color={color} />
          ),
        }}
      />
      <Tabs.Screen name="statistics" options={{
        title:"Statistics",
        tabBarIcon: ({ color, size }) => (
          <Ionicons name="stats-chart" size={size} color={color} />
        ),
      }}/>
    </Tabs>
  );
};

export default AppLayout;
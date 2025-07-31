import Ionicons from "@expo/vector-icons/Ionicons"
import { Tabs, useRouter } from "expo-router"
import { type ReactNode, useEffect } from "react"
import { useUser } from "@/hooks/useUser"

export default function TabLayout() {
        return (
                <SetupGuard>
                        <Tabs screenOptions={{ headerShown: false }}>
                                <Tabs.Screen
                                        name="index"
                                        options={{
                                                title: "Home",
                                                tabBarIcon: ({ color, size }) => <Ionicons name="home" size={size} color={color} />,
                                        }}
                                />
                                <Tabs.Screen
                                        name="camera"
                                        options={{
                                                title: "Camera",
                                                tabBarStyle: { display: "none" },
                                                tabBarIcon: ({ color, size }) => <Ionicons name="camera" size={size} color={color} />,
                                        }}
                                />
                                <Tabs.Screen
                                        name="statistics"
                                        options={{
                                                title: "Statistics",
                                                tabBarIcon: ({ color, size }) => <Ionicons name="stats-chart" size={size} color={color} />,
                                        }}
                                />
                        </Tabs>
                </SetupGuard>
        )
}

const SetupGuard = ({ children }: { children: ReactNode }) => {
        const { data: user, isLoading } = useUser()
        const router = useRouter()

        useEffect(() => {
                if (!isLoading && !user) {
                        router.replace("/(setup)/setup")
                }
        }, [user, isLoading])

        if (isLoading) {
                return null
        }

        return <>{children}</>
}

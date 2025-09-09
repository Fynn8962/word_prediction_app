import { Tabs } from "expo-router";
import Ionicons from '@expo/vector-icons/Ionicons';


export default function TabsLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: "#B3EBF2",
        headerStyle: {
          backgroundColor: "#25292e",
        },
        headerShadowVisible: false,
        headerTintColor: "#fff",
        tabBarStyle: {
          backgroundColor: "#25292e"
        }
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          headerTitle: "Word Prediction",
          tabBarIcon: ({focused, color}) => <Ionicons name={focused ? "home-sharp" : "home-outline"} 
          color={color}
          size={30} />
        }}
      />
      <Tabs.Screen
        name="about"
        options={{
          headerTitle: "About",
          tabBarIcon: ({focused, color}) => <Ionicons name={focused ? "information-circle" : "information-circle-outline"} 
          color={color}
          size={30} />
        }}
      />
    </Tabs>
  );
}

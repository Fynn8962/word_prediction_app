import { Tabs } from "expo-router";
import Ionicons from '@expo/vector-icons/Ionicons';


export default function TabsLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: "#ffffffff",
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
          title: "Home",
          headerTitle: "Word Prediction",
          tabBarIcon: ({focused, color}) => <Ionicons name={focused ? "home-sharp" : "home-outline"} 
          color={color}
          size={30} />
        }}
      />
      <Tabs.Screen
        name="info"
        options={{
          headerTitle: "Info",
          tabBarIcon: ({focused, color}) => <Ionicons name={focused ? "information-circle" : "information-circle-outline"} 
          color={color}
          size={30} />
        }}
      />
    </Tabs>
  );
}

import { Stack } from "expo-router";
import { View } from "react-native";
import { Logo } from "../components/Logo";

export default function Layout() {
  return (
    <View className="flex-1 bg-black">
      <Stack
        screenOptions={{
          headerStyle: {
            backgroundColor: "#000",
          },
          headerTintColor: "#fff",
          headerTitleAlign: "center",
          headerTitle: () => <Logo />,
        }}
      />
    </View>
  );
}

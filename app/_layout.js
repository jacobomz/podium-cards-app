import { Stack } from "expo-router";
import { View } from "react-native";
import { Logo } from "../components/Logo";
import { Utils } from "../lib/Utils";

export default function Layout() {
  return (
    <View className="flex-1 bg-black">
      <Stack
        screenOptions={{
          headerStyle: {
            backgroundColor: Utils.MainColor,
          },
          headerTintColor: "#fff",
          headerTitleAlign: "center",
          headerTitle: () => <Logo />,
        }}
      />
    </View>
  );
}

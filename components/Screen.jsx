import { View } from "react-native";

export function Screen({ children }) {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "#000",
        paddingTop: 4,
      }}
    >
      {children}
    </View>
  );
}

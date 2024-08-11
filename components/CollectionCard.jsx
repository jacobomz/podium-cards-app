import { Text, View } from "react-native";
import { RightArrowIcon } from "./Icons";
import { Utils } from "../lib/Utils";

export function CollectionCard({ props }) {
  return (
    <View
      style={{
        width: "90%",
        backgroundColor: Utils.SecondaryColor,
        flexDirection: "row",
        marginVertical: 15,
        borderRadius: 20,
        maxHeight: 80,
      }}
    >
      <View style={{ width: "23%", alignitem: "center" }}>{props.icon}</View>
      <View
        style={{
          width: "60%",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Text
          style={{
            color: "white",
            fontSize: 20,
            fontFamily: "GeistSemiBold",
            alignSelf: "flex-start",
            marginBottom: 5,
          }}
        >
          {props.title}
        </Text>
        <Text
          style={{
            color: "white",
            fontSize: 16,
            fontFamily: "GeistRegular",
            alignSelf: "flex-start",
          }}
        >
          {props.completedMessage}
        </Text>
      </View>
      <View style={{ alignItems: "center", justifyContent: "center" }}>
        <RightArrowIcon style={{ alignSelf: "flex-end" }} />
      </View>
    </View>
  );
}

const { View, Image, Text } = require("react-native");

export default function SelectCard(props) {
  return (
    <View id={props.order} style={{ flexDirection: "column", maxWidth: "33%" }}>
      <Image
        source={require("../assets/seleccionacarta.png")}
        style={{ height: 160, width: 108 }}
      />
      <Text
        style={{
          alignSelf: "center",
          fontFamily: "GeistSemiBold",
          color: "white",
          marginTop: 10,
          fontSize: 16,
        }}
      >
        {props.driverName}
      </Text>
    </View>
  );
}

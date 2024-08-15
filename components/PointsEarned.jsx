import { StyleSheet, Text, View } from "react-native";

export default function PointsEarned(props) {
  return (
    <View
      id={props.order}
      style={{
        flexDirection: "row",
        alignItems: "flex-start",
        justifyContent: "space-between",
        width: "100%",
      }}
    >
      <View style={{ width: "40%" }}>
        <Text
          style={[
            styles.text,
            {
              alignSelf: "flex-start",
              marginLeft: 20,
            },
          ]}
        >
          {props.name}
        </Text>
      </View>

      <View style={{ width: "30%" }}>
        <Text
          style={[
            styles.text,
            {
              alignSelf: "center",
            },
          ]}
        >
          {props.rarity}
        </Text>
      </View>

      <View style={{ width: "30%" }}>
        <Text
          style={[
            styles.text,
            {
              alignSelf: "flex-end",
              marginRight: 20,
              marginBottom: props.lastMargin,
            },
          ]}
        >
          {props.points} pts
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  text: {
    fontFamily: "GeistSemiBold",
    marginTop: 10,
    color: "white",
    fontSize: 15,
  },
});

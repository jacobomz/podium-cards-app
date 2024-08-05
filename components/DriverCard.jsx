import { Link } from "expo-router";
import { useEffect, useRef } from "react";
import {
  Text,
  View,
  Image,
  StyleSheet,
  Animated,
  Pressable,
} from "react-native";
import { styled } from "nativewind";

export function DriverCard({ driver, index }) {
  const StyledPressable = styled(Pressable);

  return (
    <Link href={`/${driver.driver_number}`} asChild>
      <StyledPressable className="active:opacity-70 border border-black active:border-white/50 mb-2 bg-gray-500/10 rounded-xl p-4">
        <View
          key={driver.driver_number}
          style={[
            styles.card,
            {
              backgroundColor: driver.team_colour,
            },
          ]}
        >
          <Text style={[styles.boldFormulaText, { fontSize: 22 }]}>
            {driver.driver_number}
          </Text>
          <Image
            source={{ uri: driver.headshot_url }}
            style={[styles.driverPic, { width: "25%" }]}
          />
          <View style={{ width: "35%", marginHorizontal: 5 }}>
            <Text style={[styles.regularFormulaText, { textAlign: "center" }]}>
              {driver.first_name}
            </Text>
            <Text style={[styles.boldFormulaText, { textAlign: "center" }]}>
              {driver.last_name}
            </Text>
          </View>
          <View
            style={{
              flex: 1,
              alignItems: "center",
              justifyContent: "top",
              width: "35%",
              marginHorizontal: 5,
            }}
          >
            <Text style={[styles.boldFormulaText, { textAlign: "center" }]}>
              {driver.team_name}
            </Text>
          </View>
        </View>
      </StyledPressable>
    </Link>
  );
}

export function AnimatedDriverCard({ driver, index }) {
  const opacity = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(opacity, {
      toValue: 1,
      duration: 500,
      delay: index * 250,
      useNativeDriver: true,
    }).start();
  }, [opacity, index]);

  return (
    <Animated.View style={{ opacity }}>
      <DriverCard driver={driver} index={index} />
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  card: {
    padding: 10,
    borderRadius: 10,
    marginHorizontal: 10,
    marginVertical: 5,
    flexDirection: "row",
    alignItems: "center",
  },
  boldFormulaText: {
    color: "#fff",
    fontFamily: "FormulaBold",
  },
  regularFormulaText: {
    color: "#fff",
    fontFamily: "FormulaRegular",
  },
  driverPic: {
    width: 100,
    height: 100,
    borderRadius: 10,
  },
});

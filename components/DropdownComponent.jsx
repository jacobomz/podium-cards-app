import React, { useState } from "react";
import { StyleSheet } from "react-native";
import { Dropdown } from "react-native-element-dropdown";
import { Utils } from "../lib/Utils";
import useLoadFonts from "../hooks/useLoadFonts";

const data = [
  { label: "2024", value: "1" },
  { label: "2025", value: "2" },
];

export default function DropdownComponent(props) {
  const [value, setValue] = useState(null);
  const [isFocus, setIsFocus] = useState(false);
  const { loaded, error } = useLoadFonts();

  if (!loaded && !error) {
    return null;
  }
  return (
    <Dropdown
      {...props}
      style={[
        styles.dropdown,
        styles.container,
        isFocus && { borderColor: "blue" },
        { marginBottom: 35 },
      ]}
      placeholderStyle={styles.placeholderAndSelectedStyle}
      selectedTextStyle={styles.placeholderAndSelectedStyle}
      inputSearchStyle={styles.inputSearchStyle}
      iconStyle={styles.iconStyle}
      data={data}
      search
      maxHeight={300}
      labelField="label"
      valueField="value"
      placeholder={!isFocus ? "Seleccione una temporada" : "..."}
      searchPlaceholder="Search..."
      value={value}
      onFocus={() => setIsFocus(true)}
      onBlur={() => setIsFocus(false)}
      onChange={(item) => {
        setValue(item.value);
        setIsFocus(false);
      }}
    />
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: Utils.SecondaryColor,
    width: "90%",
    marginHorizontal: 16,
  },
  dropdown: {
    height: 45,
    borderColor: "gray",
    borderRadius: 50,
    paddingHorizontal: 8,
  },
  icon: {
    marginRight: 5,
  },
  label: {
    position: "absolute",
    backgroundColor: "white",
    left: 22,
    top: 8,
    zIndex: 999,
    paddingHorizontal: 8,
    fontSize: 14,
  },
  placeholderAndSelectedStyle: {
    color: "white",
    fontSize: 14,
    marginLeft: 8,
    fontFamily: "FormulaRegular",
  },
  inputSearchStyle: {
    height: 40,
    fontSize: 16,
  },
});

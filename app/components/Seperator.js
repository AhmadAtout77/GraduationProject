import React from "react";
import { View, StyleSheet } from "react-native";
import defaultStyles from "../config/styles";

function Seperator(props) {
  return <View style={[styles.Seperator, props.style]}></View>;
}

const styles = StyleSheet.create({
  Seperator: {
    width: "100%",
    height: 0.7,
    backgroundColor: defaultStyles.colors.white,
  },
});

export default Seperator;

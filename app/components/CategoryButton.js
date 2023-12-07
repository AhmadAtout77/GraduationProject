import React from "react";
import { View, StyleSheet, TouchableOpacity } from "react-native";
import defaultStyles from "../config/styles";
import AppText from "./AppText";
import { MaterialCommunityIcons } from "@expo/vector-icons";

function CategoryButton({ style, name, title, onPress }) {
  return (
    <TouchableOpacity style={[styles.Button, style]} onPress={onPress}>
      <View>
        <AppText style={styles.text}>{title}</AppText>
      </View>
      <View style={styles.iconContainer}>
        <MaterialCommunityIcons
          name={name}
          style={styles.icon}
          size={50}
        ></MaterialCommunityIcons>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  Button: {
    borderRadius: 20,
    backgroundColor: defaultStyles.colors.white,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 1,
    borderBlockColor: defaultStyles.colors.black,
  },
  text: {
    fontSize: 25,
    color: defaultStyles.colors.black,
    left: 30,
  },
  icon: {
    color: defaultStyles.colors.primary,
    left: 50,
  },
  iconContainer: {
    flex: 1,
    flexDirection: "row-reverse",
  },
});

export default CategoryButton;

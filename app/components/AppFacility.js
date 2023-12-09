import React from "react";
import { View, StyleSheet } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import AppText from "./AppText";
import defaultStyles from "../config/styles";
import colors from "../config/colors";
import { TouchableOpacity } from "react-native";

function AppFacility({ icon, text, selected, onPress, style }) {
  return (
    <TouchableOpacity onPress={onPress}>
      <View
        style={[
          styles.container,
          selected ? styles.selectedContainer : null,
          style,
        ]}
      >
        <View style={{ flex: 0.2, alignItems: "center" }}>
          <MaterialCommunityIcons
            name={icon}
            size={25}
            style={[styles.icon, selected ? styles.selectedIcon : null]}
          ></MaterialCommunityIcons>
        </View>
        <View style={{ flex: 0.8, alignItems: "center" }}>
          <AppText style={[styles.text, selected ? styles.selectedText : null]}>
            {text}
          </AppText>
        </View>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 5,
    borderWidth: 1,
    borderRadius: 10,
    borderColor: colors.primary,
    width: 180,
    justifyContent: "center",
    marginVertical: 10,
  },
  selectedContainer: {
    backgroundColor: colors.primary,
  },
  icon: {
    color: defaultStyles.colors.primary,
    marginRight: 5,
  },
  selectedIcon: {
    color: defaultStyles.colors.white,
  },
  text: {
    fontSize: 15,
    fontWeight: "bold",
    color: colors.black,
  },
  selectedText: {
    color: colors.white,
  },
});

export default AppFacility;

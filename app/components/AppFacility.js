import React from "react";
import { View, StyleSheet } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import AppText from "./AppText";
import defaultStyles from "../config/styles";
import colors from "../config/colors";
import { TouchableOpacity } from "react-native";

function AppFacility({ icon, text }) {
  return (
    <TouchableOpacity>
      <View style={styles.container}>
        <MaterialCommunityIcons
          name={icon}
          size={25}
          style={styles.icon}
        ></MaterialCommunityIcons>
        <AppText style={styles.text}>{text}</AppText>
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
    width: 170,
    justifyContent: "center",
    marginVertical: 10,
  },
  icon: {
    color: defaultStyles.colors.primary,
    marginRight: 5,
  },
  text: {
    fontSize: 15,
  },
});
export default AppFacility;

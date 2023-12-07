import React from "react";
import { View, StyleSheet } from "react-native";
import AppButton from "./AppButton";
import AppText from "./AppText";
import colors from "../config/colors";
import { TouchableOpacity } from "react-native";
function Appbooking({ viewUser }) {
  return (
    <View style={styles.container}>
      <View style={styles.details}>
        <TouchableOpacity style={styles.username} onPress={viewUser}>
          <AppText style={{ color: colors.primary }}>Username</AppText>
        </TouchableOpacity>
        <View style={styles.dates}>
          <AppText>11/11/2022</AppText>
          <AppText style={{ color: colors.primary }}>|</AppText>
          <AppText>30/11/2022</AppText>
        </View>
      </View>
      <View style={styles.buttons}>
        <AppButton
          title={"remove"}
          textStyle={{ fontSize: 13 }}
          style={styles.button}
        ></AppButton>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    height: 100,
    flexDirection: "row",
    marginVertical: 10,
  },
  details: {
    flex: 0.7,
    flexDirection: "row",
  },
  buttons: {
    flex: 0.3,
    justifyContent: "center",
    alignItems: "center",
  },
  button: {
    width: "90%",
    height: 40,
    padding: 0,
  },
  username: {
    flex: 0.5,
    justifyContent: "center",
    alignItems: "center",
  },
  dates: {
    flex: 0.5,
    justifyContent: "center",
    alignItems: "center",
  },
});
export default Appbooking;

// booked user
// start date
// end date

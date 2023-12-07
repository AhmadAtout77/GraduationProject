import React from "react";
import { View, StyleSheet } from "react-native";
import AppScreen from "../components/AppScreen";
import AppText from "../components/AppText";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import ProfilePicture from "../components/ProfilePicture";
import defaultStyles from "../config/styles";
import colors from "../config/colors";
import AppButton from "../components/AppButton";

function UserProfileScreen(props) {
  return (
    <AppScreen>
      <View style={styles.header}>
        <AppText style={styles.headerText}>Profile</AppText>
      </View>
      <View style={styles.pfpContainer}>
        <ProfilePicture
          image={require("../assets/profile.jpg")}
          style={styles.pfp}
        ></ProfilePicture>
      </View>
      <View style={styles.UsernameContainer}>
        <AppText> Ahmad Atout</AppText>
      </View>
      <View style={styles.settingsContainer}>
        <View style={styles.phoneContainer}>
          <MaterialCommunityIcons
            size={30}
            name="phone"
            color={colors.primary}
          ></MaterialCommunityIcons>
          <AppText>00972568557091</AppText>
        </View>
        <View style={styles.emailContainer}>
          <MaterialCommunityIcons
            size={30}
            name="email"
            color={colors.primary}
          ></MaterialCommunityIcons>
          <AppText>ahmadatout77@gmail.com</AppText>
        </View>
        <AppButton
          title={"contaict"}
          style={{ width: 300, marginTop: 100 }}
        ></AppButton>
      </View>
    </AppScreen>
  );
}
const styles = StyleSheet.create({
  header: {
    alignItems: "center",
    justifyContent: "center",
    height: 90,
  },
  headerText: {
    fontSize: 30,
    fontWeight: "bold",
  },
  pfpContainer: {
    alignItems: "center",
  },
  pfp: {
    height: 140,
    width: 140,
    borderRadius: 70,
  },
  settingsContainer: {
    backgroundColor: defaultStyles.colors.white,
    borderTopRightRadius: 40,
    borderTopLeftRadius: 40,
    flex: 1,
    alignItems: "center",
  },
  UsernameContainer: {
    height: 70,
    justifyContent: "center",
    alignItems: "center",
  },
  phoneContainer: {
    height: 100,
    alignItems: "center",
    justifyContent: "space-around",
    marginTop: 10,
  },
  emailContainer: {
    height: 100,
    alignItems: "center",
    justifyContent: "space-around",
  },
});

export default UserProfileScreen;

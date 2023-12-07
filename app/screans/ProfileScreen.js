import React from "react";
import { View, StyleSheet, TouchableOpacity } from "react-native";
import AppScreen from "../components/AppScreen";
import AppText from "../components/AppText";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import ProfilePicture from "../components/ProfilePicture";
import defaultStyles from "../config/styles";
import Seperator from "../components/Seperator";

function ProfileScreen({ navigation }) {
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
        <TouchableOpacity
          style={styles.settingContainer}
          onPress={() => navigation.navigate("List", { screen: "Welcome" })}
        >
          <View style={styles.icon1Container}>
            <MaterialCommunityIcons
              name="plus"
              style={styles.icon}
              size={25}
            ></MaterialCommunityIcons>
          </View>
          <View style={styles.textContainer}>
            <AppText style={styles.setting}>Add property</AppText>
          </View>
          <View style={styles.icon2Container}>
            <MaterialCommunityIcons
              name="chevron-right"
              style={styles.icon}
              size={25}
            ></MaterialCommunityIcons>
          </View>
        </TouchableOpacity>
        <Seperator style={styles.Seperator} />
        <TouchableOpacity
          style={styles.settingContainer}
          onPress={() => navigation.navigate("Listings")}
        >
          <View style={styles.icon1Container}>
            <MaterialCommunityIcons
              name="format-list-bulleted"
              style={styles.icon}
              size={25}
            ></MaterialCommunityIcons>
          </View>
          <View style={styles.textContainer}>
            <AppText style={styles.setting}>My Listings</AppText>
          </View>
          <View style={styles.icon2Container}>
            <MaterialCommunityIcons
              name="chevron-right"
              style={styles.icon}
              size={25}
            ></MaterialCommunityIcons>
          </View>
        </TouchableOpacity>
        <Seperator style={styles.Seperator} />
        <TouchableOpacity
          style={styles.settingContainer}
          onPress={() => navigation.navigate("ActiveBookings")}
        >
          <View style={styles.icon1Container}>
            <MaterialCommunityIcons
              name="book-outline"
              style={styles.icon}
              size={25}
            ></MaterialCommunityIcons>
          </View>
          <View style={styles.textContainer}>
            <AppText style={styles.setting}>Active bookings</AppText>
          </View>
          <View style={styles.icon2Container}>
            <MaterialCommunityIcons
              name="chevron-right"
              style={styles.icon}
              size={25}
            ></MaterialCommunityIcons>
          </View>
        </TouchableOpacity>
        <Seperator style={styles.Seperator} />
        <TouchableOpacity style={styles.settingContainer}>
          <View style={styles.icon1Container}>
            <MaterialCommunityIcons
              name="cog-outline"
              style={styles.icon}
              size={25}
            ></MaterialCommunityIcons>
          </View>
          <View style={styles.textContainer}>
            <AppText style={styles.setting}>Settings</AppText>
          </View>
          <View style={styles.icon2Container}>
            <MaterialCommunityIcons
              name="chevron-right"
              style={styles.icon}
              size={25}
            ></MaterialCommunityIcons>
          </View>
        </TouchableOpacity>
        <Seperator style={styles.Seperator} />
        <TouchableOpacity
          onPress={() => {
            navigation.popToTop();
          }}
          style={styles.settingContainer}
        >
          <View style={styles.icon1Container}>
            <MaterialCommunityIcons
              name="logout"
              style={styles.icon}
              size={25}
            ></MaterialCommunityIcons>
          </View>
          <View style={styles.textContainer}>
            <AppText style={styles.setting}>Log Out</AppText>
          </View>
          <View style={styles.icon2Container}>
            <MaterialCommunityIcons
              name="chevron-right"
              style={styles.icon}
              size={25}
            ></MaterialCommunityIcons>
          </View>
        </TouchableOpacity>
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
  setting: {
    fontWeight: "bold",
  },
  settingContainer: {
    alignItems: "center",
    flex: 0.2,
    flexDirection: "row",
    width: "80%",
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
  icon1Container: {
    flexDirection: "row",
    flex: 0.15,
  },
  textContainer: {
    flexDirection: "row",
    flex: 0.7,
  },
  icon2Container: {
    flexDirection: "row-reverse",
    flex: 0.15,
  },
  icon: { color: defaultStyles.colors.primary },
  Seperator: {
    width: "80%",
  },
});

export default ProfileScreen;

import React from "react";
import { Image, ImageBackground, StyleSheet, View } from "react-native";
import AppScreen from "../components/AppScreen";
import AppText from "../components/AppText";
import defaultStyles from "../config/styles";
import AppButton from "../components/AppButton";

function WelcomeScreen({ navigation }) {
  return (
    <AppScreen>
      <ImageBackground style={styles.container}>
        <Image
          source={require("../assets/Logo.png")}
          style={styles.logo}
        ></Image>

        <AppText style={styles.name}>
          Pal<AppText style={[styles.name, styles.name2]}>Stay</AppText>
        </AppText>
        <AppButton
          title={"LOGIN"}
          style={styles.logbutton}
          onPress={() => navigation.navigate("LogIn")}
        ></AppButton>
        <AppButton
          title={"SIGNUP"}
          style={styles.signbutton}
          color="black"
          onPress={() => navigation.navigate("SignUp")}
        ></AppButton>
      </ImageBackground>
    </AppScreen>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "flex-end",
    flex: 1,
  },
  logo: {
    position: "absolute",
    top: 100,
    width: 150,
    height: 150,
  },
  name: {
    fontSize: 50,
    fontWeight: "bold",
    color: defaultStyles.colors.secondary,
    marginBottom: 200,
  },
  name2: {
    color: defaultStyles.colors.primary,
  },
  logbutton: {
    height: 60,
    width: "90%",
  },
  signbutton: {
    height: 60,
    marginBottom: 40,
    width: "90%",
  },
});

export default WelcomeScreen;

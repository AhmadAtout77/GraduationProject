import React from "react";
import { View, StyleSheet } from "react-native";
import AppScreen from "../../components/AppScreen";
import { Image } from "react-native";
import AppText from "../../components/AppText";
import defaultStyles from "../../config/styles";
import AppButton from "../../components/AppButton";

function WelcomeScreen({ navigation }) {
  return (
    <AppScreen>
      <View style={styles.image}>
        <Image
          style={{ width: "100%", height: "100%" }}
          source={require("../../assets/Cartoon.jpg")}
        ></Image>
      </View>
      <View style={styles.header}>
        <AppText style={styles.headerText}>
          No listing fees. No commision, No, really.
        </AppText>
      </View>
      <View style={styles.paragragh}>
        <AppText style={styles.paragraghText}>
          List your place for free today on PalStay and earn money with zero
          commision on bookings.
        </AppText>
      </View>
      <View style={styles.buttonContainer}>
        <AppButton
          style={styles.button}
          title={"List your property now"}
          onPress={() => navigation.navigate("Categories")}
        ></AppButton>
      </View>
    </AppScreen>
  );
}

const styles = StyleSheet.create({
  image: {
    width: "100%",
    height: "30%",
  },
  header: {
    width: "80%",
    paddingTop: 35,
    paddingLeft: 20,
  },
  paragragh: {
    padding: 20,
  },
  headerText: {
    fontSize: 25,
    fontWeight: "bold",
  },
  paragraghText: {
    color: defaultStyles.colors.medium,
  },
  buttonContainer: {
    flex: 1,
    flexDirection: "column-reverse",
    alignItems: "center",
    paddingBottom: 30,
  },
  button: {
    width: "90%",
    height: 60,
  },
});
export default WelcomeScreen;

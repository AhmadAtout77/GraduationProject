import React, { useEffect } from "react";
import { StyleSheet, View, Image, BackHandler } from "react-native";
import AppScreen from "../components/AppScreen";
import CategoryButton from "../components/CategoryButton";
import AppText from "../components/AppText";
import defaultStyles from "../config/styles";

function HomeScreen({ navigation }) {
  return (
    <AppScreen>
      <View style={styles.header}>
        <Image
          source={require("../assets/Logo.png")}
          style={styles.logo}
        ></Image>
        <AppText style={styles.name}>
          Pal<AppText style={[styles.name, styles.name2]}>Stay</AppText>
        </AppText>
      </View>
      <View style={styles.catContainer}>
        <CategoryButton
          style={styles.category}
          title="Homes&Apts"
          name="home-group"
          onPress={() => navigation.navigate("filter")}
        ></CategoryButton>
        <CategoryButton
          style={styles.category}
          title="Offices"
          name="chair-rolling"
          onPress={() => navigation.navigate("filter")}
        ></CategoryButton>
        <CategoryButton
          style={styles.category}
          title="Hotels"
          name="bed"
          onPress={() => navigation.navigate("filter")}
        ></CategoryButton>
      </View>
    </AppScreen>
  );
}

const styles = StyleSheet.create({
  catContainer: {
    width: "100%",
    alignItems: "center",
  },
  category: {
    height: 70,
    width: "90%",
    marginVertical: 5,
  },
  header: {
    width: "100%",
    left: "2.5%",
    height: 70,
    alignItems: "center",
    flexDirection: "row",
  },
  logo: {
    width: 50,
    height: 50,
  },
  name: {
    fontSize: 20,
    fontWeight: "bold",
    color: defaultStyles.colors.secondary,
    left: 5,
  },
  name2: {
    color: defaultStyles.colors.primary,
  },
});

export default HomeScreen;

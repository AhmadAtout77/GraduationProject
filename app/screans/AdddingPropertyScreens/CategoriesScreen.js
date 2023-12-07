import React from "react";
import { View, StyleSheet } from "react-native";
import AppScreen from "../../components/AppScreen";
import CategoryButton from "../../components/CategoryButton";
import AppText from "../../components/AppText";

function CategoriesScreen({ navigation }) {
  return (
    <AppScreen style={{ justifyContent: "center", alignItems: "center" }}>
      <View style={styles.headerContainer}>
        <AppText style={styles.header}>What are you listing?</AppText>
      </View>

      <View style={styles.catContainer}>
        <CategoryButton
          style={styles.category}
          title="Homes&Apts"
          name="home-group"
          onPress={() => navigation.navigate("PickCity")}
        ></CategoryButton>
        <CategoryButton
          style={styles.category}
          title="Offices"
          name="chair-rolling"
          onPress={() => navigation.navigate("PickCity")}
        ></CategoryButton>
        <CategoryButton
          style={styles.category}
          title="Hotels"
          name="bed"
          onPress={() => navigation.navigate("PickCity")}
        ></CategoryButton>
      </View>
    </AppScreen>
  );
}

const styles = StyleSheet.create({
  header: {
    fontSize: 30,
    textAlign: "center",
  },
  headerContainer: {
    flex: 0.3,
    justifyContent: "center",
  },
  catContainer: {
    width: "100%",
    flex: 1,
    alignItems: "center",
  },
  category: {
    height: 100,
    width: "90%",
    marginVertical: 15,
  },
});
export default CategoriesScreen;

import React from "react";
import { FlatList, StyleSheet, View } from "react-native";
import AppScreen from "../components/AppScreen";
import defaultStyles from "../config/styles";
import MyListing from "../components/MyListing";
import AppButton from "../components/AppButton";
import colors from "../config/colors";
import AppText from "../components/AppText";

const properties = [
  {
    id: 1,
    images: [
      require("../assets/Appartment.jpg"),
      require("../assets/Appartment.jpg"),
      require("../assets/Appartment.jpg"),
    ],
  },
  {
    id: 2,
    images: [
      require("../assets/Appartment.jpg"),
      require("../assets/Appartment.jpg"),
      require("../assets/Appartment.jpg"),
    ],
  },
  {
    id: 3,
    images: [
      require("../assets/Appartment.jpg"),
      require("../assets/Appartment.jpg"),
      require("../assets/Appartment.jpg"),
    ],
  },
  {
    id: 4,
    images: [
      require("../assets/Appartment.jpg"),
      require("../assets/Nablus.jpg"),
      require("../assets/Appartment.jpg"),
    ],
  },
  {
    id: 5,
    images: [
      require("../assets/Appartment.jpg"),
      require("../assets/Appartment.jpg"),
      require("../assets/Appartment.jpg"),
    ],
  },
];

function MyListingsScreen({ navigation }) {
  return (
    <AppScreen style={styles.container}>
      <View>
        <View style={styles.notification}>
          <AppText style={{ color: colors.white, fontWeight: "bold" }}>
            3
          </AppText>
        </View>
        <AppButton
          title={"Booking Requests"}
          style={styles.requestsButton}
          textStyle={{ color: colors.primary }}
        ></AppButton>
      </View>
      <FlatList
        data={properties}
        keyExtractor={(property) => property.id.toString()}
        renderItem={({ item }) => (
          <MyListing
            viewBookings={() => navigation.navigate("PropertyBookings")}
            EditDetails={() => navigation.navigate("EditDetails")}
            style={styles.item}
            property={item}
          />
        )}
        initialNumToRender={5}
      />
    </AppScreen>
  );
}
const styles = StyleSheet.create({
  item: {
    width: "95%",
  },
  container: {
    backgroundColor: defaultStyles.colors.light,
  },
  requestsButton: {
    width: "80%",
    alignSelf: "center",
    backgroundColor: "white",
    borderWidth: 1,
    borderColor: colors.primary,
    height: 60,
    borderRadius: 15,
    zIndex: 1,
  },
  notification: {
    width: 30,
    height: 30,
    backgroundColor: colors.primary,
    borderRadius: 15,
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    right: "15%",
    top: "30%",
    zIndex: 2,
  },
});

export default MyListingsScreen;

import React from "react";
import { FlatList, StyleSheet } from "react-native";
import AppScreen from "../components/AppScreen";
import defaultStyles from "../config/styles";
import MyListing from "../components/MyListing";

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
});

export default MyListingsScreen;

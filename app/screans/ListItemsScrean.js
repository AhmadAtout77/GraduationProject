import React from "react";
import { FlatList, StyleSheet, View } from "react-native";
import AppScreen from "../components/AppScreen";
import ListedProberty from "../components/ListedProberty";
import defaultStyles from "../config/styles";

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

function ListItemsScrean({ navigation }) {
  return (
    <AppScreen>
      <View style={styles.container}>
        <FlatList
          data={properties}
          keyExtractor={(property) => property.id.toString()}
          renderItem={({ item }) => (
            <ListedProberty
              viewDetails={() => navigation.navigate("Details")}
              style={styles.item}
              property={item}
            />
          )}
          initialNumToRender={5}
        />
      </View>
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

export default ListItemsScrean;

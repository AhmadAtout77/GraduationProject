import React from "react";
import AppScreen from "../components/AppScreen";
import { FlatList, StyleSheet, View } from "react-native";
import Appbooking from "../components/AppBooking";
import colors from "../config/colors";

function PropertyBookingsScreen({ navigation }) {
  const reviews = [
    {
      id: 1,
    },
    {
      id: 2,
    },
    {
      id: 3,
    },
    {
      id: 4,
    },
    {
      id: 5,
    },
  ];
  const ItemSeparator = () => <View style={styles.separator} />;
  return (
    <AppScreen>
      <FlatList
        data={reviews}
        keyExtractor={(review) => review.id.toString()}
        renderItem={({ item }) => (
          <Appbooking viewUser={() => navigation.navigate("UserProfile")} />
        )}
        initialNumToRender={5}
      />
    </AppScreen>
  );
}

const styles = StyleSheet.create({
  separator: {
    backgroundColor: colors.primary,
    height: 1,
  },
});
export default PropertyBookingsScreen;

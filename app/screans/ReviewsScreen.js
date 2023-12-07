import React from "react";
import AppScreen from "../components/AppScreen";
import { FlatList } from "react-native";
import AppReview from "../components/AppReview";

function ReviewsScreen({ navigation }) {
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
  return (
    <AppScreen>
      <FlatList
        data={reviews}
        keyExtractor={(review) => review.id.toString()}
        renderItem={({ item }) => (
          <AppReview viewUser={() => navigation.navigate("reviewUser")} />
        )}
        initialNumToRender={5}
      />
    </AppScreen>
  );
}

export default ReviewsScreen;

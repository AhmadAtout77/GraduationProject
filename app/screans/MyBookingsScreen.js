import React from "react";
import AppScreen from "../components/AppScreen";
import { FlatList } from "react-native";
import AppMyBooking from "../components/AppMyBooking";

function MyBookingsScreen({ navigation }) {
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
  return (
    <AppScreen>
      <FlatList
        data={properties}
        keyExtractor={(property) => property.id.toString()}
        renderItem={({ item }) => (
          <AppMyBooking
            viewProperty={() => navigation.navigate("Details")}
            reviewProperty={() => navigation.navigate("giveReview")}
            property={item}
          />
        )}
        initialNumToRender={5}
      />
    </AppScreen>
  );
}

export default MyBookingsScreen;

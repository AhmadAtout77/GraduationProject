import React from "react";
import AppScreen from "../components/AppScreen";
import { FlatList } from "react-native";
import AppMyBooking from "../components/AppMyBooking";
import AppBookingRequest from "../components/AppBookingRequest";

function BookingRequestsScreen({ navigation }) {
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
          <AppBookingRequest
            viewUser={() => navigation.navigate("UserProfile")}
            property={item}
            confirm={() => {}}
            cancel={() => {}}
          />
        )}
        initialNumToRender={5}
      />
    </AppScreen>
  );
}

export default BookingRequestsScreen;

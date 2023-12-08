import React from "react";
import { ScrollView } from "react-native";
import AppScreen from "../components/AppScreen";
import CityCard from "../components/CityCard";

function MapPickerScreen({ navigation }) {
  return (
    <AppScreen>
      <ScrollView>
        <CityCard
          image={require("../assets/Jerusalem.jpg")}
          name="Jerusalem"
          onPress={() =>
            navigation.navigate("MapView", {
              latitude: 31.7683,
              longitude: 35.2137,
            })
          }
        ></CityCard>
        <CityCard
          image={require("../assets/Nablus.jpg")}
          name="Nablus"
          onPress={() =>
            navigation.navigate("MapView", {
              latitude: 32.2227,
              longitude: 35.2621,
            })
          }
        ></CityCard>
        <CityCard
          image={require("../assets/Tulkarem.jpg")}
          name="Tulkarem"
          onPress={() =>
            navigation.navigate("MapView", {
              latitude: 32.3194,
              longitude: 35.024,
            })
          }
        ></CityCard>
        <CityCard
          image={require("../assets/Beithlahem.jpg")}
          name="Beitlahem"
          onPress={() =>
            navigation.navigate("MapView", {
              latitude: 31.7054,
              longitude: 35.2024,
            })
          }
        ></CityCard>
        <CityCard
          image={require("../assets/Ramallah.jpg")}
          name="Ramallah"
          onPress={() =>
            navigation.navigate("MapView", {
              latitude: 31.9038,
              longitude: 35.2034,
            })
          }
        ></CityCard>
        <CityCard
          image={require("../assets/Jericho.jpg")}
          name="Jericho"
          onPress={() =>
            navigation.navigate("MapView", {
              latitude: 31.8611,
              longitude: 35.4618,
            })
          }
        ></CityCard>
        <CityCard
          image={require("../assets/Jenin.jpg")}
          name="Jenin"
          onPress={() =>
            navigation.navigate("MapView", {
              latitude: 32.4646,
              longitude: 35.2939,
            })
          }
        ></CityCard>
        <CityCard
          image={require("../assets/Hebron.jpg")}
          name="Herbron"
          onPress={() =>
            navigation.navigate("MapView", {
              latitude: 31.5326,
              longitude: 35.0998,
            })
          }
        ></CityCard>
        <CityCard
          image={require("../assets/Qalqiliah.jpg")}
          name="Qalqiliah"
          onPress={() =>
            navigation.navigate("MapView", {
              latitude: 32.196,
              longitude: 34.9815,
            })
          }
        ></CityCard>
        <CityCard
          image={require("../assets/Salfit.jpg")}
          name="Salfit"
          onPress={() =>
            navigation.navigate("MapView", {
              latitude: 32.0851,
              longitude: 35.1808,
            })
          }
        ></CityCard>
        <CityCard
          image={require("../assets/Tubas.jpg")}
          name="Tubas"
          onPress={() =>
            navigation.navigate("MapView", {
              latitude: 32.3211,
              longitude: 35.37,
            })
          }
        ></CityCard>
      </ScrollView>
    </AppScreen>
  );
}

export default MapPickerScreen;

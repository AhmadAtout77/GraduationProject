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
          onPress={() => navigation.navigate("MapView")}
        ></CityCard>
        <CityCard
          image={require("../assets/Nablus.jpg")}
          name="Nablus"
          onPress={() => navigation.navigate("MapView")}
        ></CityCard>
        <CityCard
          image={require("../assets/Tulkarem.jpg")}
          name="Tulkarem"
          onPress={() => navigation.navigate("MapView")}
        ></CityCard>
        <CityCard
          image={require("../assets/Beithlahem.jpg")}
          name="Beitlahem"
          onPress={() => navigation.navigate("MapView")}
        ></CityCard>
        <CityCard
          image={require("../assets/Ramallah.jpg")}
          name="Ramallah"
          onPress={() => navigation.navigate("MapView")}
        ></CityCard>
        <CityCard
          image={require("../assets/Jericho.jpg")}
          name="Jericho"
          onPress={() => navigation.navigate("MapView")}
        ></CityCard>
        <CityCard
          image={require("../assets/Jenin.jpg")}
          name="Jenin"
          onPress={() => navigation.navigate("MapView")}
        ></CityCard>
        <CityCard
          image={require("../assets/Hebron.jpg")}
          name="Herbron"
          onPress={() => navigation.navigate("MapView")}
        ></CityCard>
        <CityCard
          image={require("../assets/Qalqiliah.jpg")}
          name="Qalqiliah"
          onPress={() => navigation.navigate("MapView")}
        ></CityCard>
        <CityCard
          image={require("../assets/Salfit.jpg")}
          name="Salfit"
          onPress={() => navigation.navigate("MapView")}
        ></CityCard>
      </ScrollView>
    </AppScreen>
  );
}

export default MapPickerScreen;

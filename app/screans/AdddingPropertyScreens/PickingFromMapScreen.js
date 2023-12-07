import React, { useState } from "react";
import AppScreen from "../../components/AppScreen";
import { View, StyleSheet } from "react-native";
import MapView, { Marker } from "react-native-maps";
import AppText from "../../components/AppText";
import AppButton from "../../components/AppButton";

function PickingFromMapScreen({ navigation }) {
  const [center, setCenter] = useState({
    latitude: 37.78825,
    longitude: -122.4322,
  });

  const handleContinuePress = () => {
    navigation.navigate("AddPictures");
  };

  return (
    <AppScreen>
      <View style={styles.headerContainer}>
        <AppText style={styles.header}>Where is your property located?</AppText>
      </View>
      <View style={styles.container}>
        <MapView
          style={styles.map}
          initialRegion={{
            latitude: center.latitude,
            longitude: center.longitude,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}
          provider="google"
          onRegionChange={(region) => setCenter(region)}
        >
          <Marker coordinate={center} />
        </MapView>
      </View>
      <View style={styles.buttonContainer}>
        <AppButton
          style={styles.button}
          title="Continue"
          onPress={handleContinuePress}
        />
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
    justifyContent: "center",
    marginVertical: 30,
  },
  container: {
    justifyContent: "center",
    alignItems: "center",
    height: 450,
  },
  map: {
    borderRadius: 175,
    width: 350,
    height: 350,
  },
  buttonContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  button: {
    width: "90%",
  },
});

export default PickingFromMapScreen;

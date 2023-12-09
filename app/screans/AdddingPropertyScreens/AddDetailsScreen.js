import React, { useState } from "react";
import {
  View,
  StyleSheet,
  ScrollView,
  Modal,
  TouchableOpacity,
} from "react-native";
import AppScreen from "../../components/AppScreen";
import AppTextInput from "../../components/AppTextInput";
import colors from "../../config/colors";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import AppText from "../../components/AppText";
import AppFacility from "../../components/AppFacility";
import AppButton from "../../components/AppButton";
import { useNavigation } from "@react-navigation/native";

function AddDetailsScreen() {
  const [open, setOpen] = useState(false);
  const navigation = useNavigation();

  function handleOnpress() {
    setOpen(!open);
  }

  const [selectedFacilities, setSelectedFacilities] = useState([]);

  const handleFacilitySelect = (text) => {
    // Toggle the selected state for the clicked facility
    setSelectedFacilities((prevSelectedFacilities) => {
      const isFacilitySelected = prevSelectedFacilities.includes(text);

      if (isFacilitySelected) {
        // Facility is already selected, remove it from the list
        return prevSelectedFacilities.filter((facility) => facility !== text);
      } else {
        // Facility is not selected, add it to the list
        return [...prevSelectedFacilities, text];
      }
    });
  };

  const handleOnPress = () => {
    navigation.popToTop();
    navigation.popToTop();
    setOpen(!open);
  };

  const facilityData = [
    { icon: "power-socket", text: "Electricity", selected: false },
    { icon: "water", text: "Water", selected: false },
    { icon: "gas-cylinder", text: "Gas", selected: false },
    { icon: "air-conditioner", text: "Air Conditioning", selected: false },
    { icon: "thermometer", text: "Heating", selected: false },
    { icon: "fire", text: "Fireplace", selected: false },
    { icon: "television", text: "TV Cable", selected: false },
    { icon: "wifi", text: "Wi-Fi", selected: false },
    { icon: "stove", text: "Stove", selected: false },
    { icon: "toaster-oven", text: "Oven", selected: false },
    { icon: "fridge", text: "Refrigerator", selected: false },
    { icon: "microwave", text: "Microwave", selected: false },
    { icon: "dishwasher", text: "Dishwasher", selected: false },
    { icon: "washing-machine", text: "Washer", selected: false },
    { icon: "tumble-dryer", text: "Dryer", selected: false },
    { icon: "car", text: "Parking", selected: false },
    { icon: "parking", text: "Covered Parking", selected: false },
    { icon: "security", text: "Security system", selected: false },
    { icon: "balcony", text: "Balcony", selected: false },
    { icon: "inbox", text: "Storage room", selected: false },
    { icon: "dog", text: "Pet-friendly policy", selected: false },
    { icon: "elevator", text: "Elevator", selected: false },
    {
      icon: "wheelchair-accessibility",
      text: "Wheelchair accessibility",
      selected: false,
    },
  ];

  return (
    <AppScreen>
      <ScrollView>
        <View style={styles.fieldsContainer}>
          <View style={styles.field}>
            <MaterialCommunityIcons
              size={25}
              name="currency-usd"
              style={styles.icon}
            ></MaterialCommunityIcons>
            <AppTextInput
              placeholder="payment/month"
              style={styles.input}
            ></AppTextInput>
          </View>
          <View style={styles.field}>
            <AppText
              style={{
                fontWeight: "bold",
                color: colors.primary,
                marginRight: 10,
              }}
            >
              m2
            </AppText>
            <AppTextInput
              placeholder="area"
              style={styles.input}
            ></AppTextInput>
          </View>
          <View style={styles.field}>
            <MaterialCommunityIcons
              style={styles.icon}
              size={25}
              name="bed"
            ></MaterialCommunityIcons>
            <AppTextInput
              placeholder="number of bedrooms"
              style={styles.input}
            ></AppTextInput>
          </View>
          <View style={styles.field}>
            <MaterialCommunityIcons
              size={25}
              name="toilet"
              style={styles.icon}
            ></MaterialCommunityIcons>
            <AppTextInput
              placeholder="number of bathrooms"
              style={styles.input}
            ></AppTextInput>
          </View>
        </View>
        <View style={styles.descriptionContainer}>
          <AppTextInput
            style={styles.descriptionInput}
            placeholder="enter a brief description of your property..."
            multiline
          ></AppTextInput>
        </View>
        <View style={styles.faciliteisContainer}>
          <AppText style={{ fontWeight: "bold", margin: 20 }}>
            Select the facilities available in your property:-
          </AppText>
          <View style={styles.facilities}>
            {facilityData.map((facility) => (
              <AppFacility
                key={facility.text}
                icon={facility.icon}
                text={facility.text}
                selected={selectedFacilities.includes(facility.text)}
                onPress={() => handleFacilitySelect(facility.text)}
              />
            ))}
          </View>
        </View>
        <View style={styles.button}>
          <AppButton
            onPress={handleOnpress}
            style={{ width: "90%" }}
            title={"List"}
          ></AppButton>
        </View>
      </ScrollView>
      <Modal animationType="slide" transparent={true} visible={open}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <AppText
              style={{
                fontWeight: "bold",
                color: colors.primary,
                textAlign: "center",
              }}
            >
              Your property was listed successfully
            </AppText>
            <TouchableOpacity onPress={handleOnPress}>
              <AppText style={{ marginTop: 10 }}>Close</AppText>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </AppScreen>
  );
}
const styles = StyleSheet.create({
  fieldsContainer: {
    backgroundColor: colors.white,
    marginTop: 20,
    borderRadius: 20,
    paddingVertical: 10,
  },
  field: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  input: { width: 210 },
  icon: {
    color: colors.primary,
    marginRight: 10,
  },
  descriptionContainer: {
    alignItems: "center",
    backgroundColor: colors.white,
    marginTop: 20,
    borderRadius: 20,
  },
  descriptionInput: { width: "80%", height: 200 },
  faciliteisContainer: {
    backgroundColor: colors.white,
    marginTop: 20,
    marginBottom: 20,
    borderRadius: 20,
  },
  facilities: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    padding: 10,
  },
  button: {
    alignItems: "center",
    marginBottom: 20,
  },
  centeredView: {
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    width: "90%",
    padding: 35,
    alignItems: "center",
    shadowColor: colors.primary,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
});
export default AddDetailsScreen;

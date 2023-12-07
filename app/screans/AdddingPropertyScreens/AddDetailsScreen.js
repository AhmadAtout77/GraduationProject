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

  const handleOnPress = () => {
    navigation.popToTop();
    navigation.popToTop();
    setOpen(!open);
  };
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
            <AppFacility icon={"home"} text={"home"}></AppFacility>
            <AppFacility icon={"home"} text={"home"}></AppFacility>
            <AppFacility icon={"home"} text={"home"}></AppFacility>
            <AppFacility icon={"home"} text={"home"}></AppFacility>
            <AppFacility icon={"home"} text={"home"}></AppFacility>
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
    alignItems: "center",
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

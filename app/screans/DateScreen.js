import React from "react";
import { TouchableOpacity } from "react-native";
import { View, StyleSheet } from "react-native";
import AppText from "../components/AppText";
import { useState } from "react";
import { Modal } from "react-native";
import DatePicker from "react-native-modern-datepicker";
import { getFormatedDate } from "react-native-modern-datepicker";

function dateScreen(props) {
  const today = new Date();
  const startDate = getFormatedDate(
    today.setDate(today.getDate() + 1),
    "YYYY/MM/DD"
  );

  const [open, setOpen] = useState(false);
  const [date, setDate] = useState("");

  function handleOnpress() {
    setOpen(!open);
  }

  function handleChange(propDate) {
    setDate(propDate);
    if (propDate === date && date != "2012/12/20") {
      console.log(date);
    }
  }

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={handleOnpress}>
        <AppText>Open</AppText>
      </TouchableOpacity>

      <Modal animationType="slide" transparent={true} visible={open}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <DatePicker
              mode="calendar"
              minimumDate={startDate}
              selected={date}
              onSelectedChange={handleChange}
            />

            <TouchableOpacity onPress={handleOnpress}>
              <AppText>Close</AppText>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    alignSelf: "center",
    marginTop: 300,
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
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
});
export default dateScreen;

import React, { useState } from "react";
import { View, StyleSheet, Image, Modal, TouchableOpacity } from "react-native";
import colors from "../config/colors";
import AppText from "../components/AppText";
import AppButton from "../components/AppButton";
import AppPicker from "../components/AppPicker";
import DatePicker from "react-native-modern-datepicker";
import { getFormatedDate } from "react-native-modern-datepicker";

function FilterSearchScreen({ navigation }) {
  const today = new Date();
  const startDate = getFormatedDate(
    today.setDate(today.getDate() + 1),
    "YYYY/MM/DD"
  );

  const [open, setOpen] = useState(false);
  const [date, setDate] = useState("");
  const [openEnd, setOpenEnd] = useState(false);
  const [dateEnd, setDateEnd] = useState("");
  const [start, setStart] = useState("start date");
  const [end, setEnd] = useState("end date");
  function handleOnpress() {
    setOpen(!open);
  }
  function handleOnpressEnd() {
    setOpenEnd(!openEnd);
  }

  function handleChange(propDate) {
    setDate(propDate);
    if (propDate === date && date != "2012/12/20") {
      setStart(date);
    }
  }
  function handleChangeEnd(propDate) {
    setDateEnd(propDate);
    if (propDate === dateEnd && dateEnd != "2012/12/20") {
      setEnd(dateEnd);
    }
  }

  const numbers = [
    {
      label: "1",
      value: 1,
    },
    {
      label: "2",
      value: 2,
    },
    {
      label: "3",
      value: 3,
    },
    {
      label: "4",
      value: 4,
    },
    {
      label: "5",
      value: 5,
    },
  ];
  const [item, setItem] = useState(numbers[0]);
  return (
    <View style={{ backgroundColor: colors.light, height: "100%" }}>
      <View style={styles.header}></View>
      <View style={styles.Container}>
        <AppText style={{ fontWeight: "bold", fontSize: 30 }}>Rooms</AppText>
        <View style={styles.filterContainer}>
          <View style={styles.dates}>
            <TouchableOpacity style={styles.date} onPress={handleOnpress}>
              <AppText>{start}</AppText>
            </TouchableOpacity>
            <TouchableOpacity style={styles.date} onPress={handleOnpressEnd}>
              <AppText>{end}</AppText>
            </TouchableOpacity>
          </View>
          <View style={styles.dates}>
            <View style={styles.date}></View>
            <View style={styles.date}></View>
          </View>
          <View style={styles.rooms}>
            <AppText style={{ marginLeft: 60 }}>Number of rooms:</AppText>

            <AppPicker
              selectedItem={item}
              onSelectItem={(item) => {
                setItem(item);
              }}
              style={{ height: 60, width: 70, margin: 10 }}
              icon={"menu-down"}
              items={numbers}
            ></AppPicker>
          </View>
        </View>
        <View style={styles.logoContainer}>
          <Image
            style={{ width: 120, height: 120 }}
            source={require("../assets/Logo.png")}
          ></Image>
        </View>
      </View>

      <AppButton
        style={styles.button}
        title={"search"}
        onPress={() => navigation.navigate("List")}
      ></AppButton>
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
      <Modal animationType="slide" transparent={true} visible={openEnd}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <DatePicker
              mode="calendar"
              minimumDate={startDate}
              selected={dateEnd}
              onSelectedChange={handleChangeEnd}
            />

            <TouchableOpacity onPress={handleOnpressEnd}>
              <AppText>Close</AppText>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: colors.primary,
    height: 200,
    borderRadius: 15,
    width: "100%",
    position: "absolute",
  },
  filterContainer: {
    height: 300,
    width: "100%",
    alignSelf: "center",
    borderRadius: 15,
    backgroundColor: colors.white,
    justifyContent: "center",
  },
  Container: {
    alignSelf: "center",
    width: "93%",
    height: 300,
    marginTop: 130,
  },
  dates: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
    marginTop: 10,
  },
  rooms: {
    flexDirection: "row",
    marginTop: 50,
    height: 60,
    alignItems: "center",
  },
  date: {
    backgroundColor: "white",
    height: 50,
    flex: 0.45,
    borderRadius: 25,
    backgroundColor: colors.light,
    justifyContent: "center",
    alignItems: "center",
  },
  button: {
    position: "absolute",
    bottom: 25,
    width: "80%",
    alignSelf: "center",
    height: 50,
  },
  logoContainer: { alignSelf: "center", marginTop: 50 },
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
export default FilterSearchScreen;

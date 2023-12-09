import React, { useState } from "react";
import { View, StyleSheet, Image, Modal, TouchableOpacity } from "react-native";
import colors from "../config/colors";
import AppText from "../components/AppText";
import AppButton from "../components/AppButton";
import AppPicker from "../components/AppPicker";
import DatePicker from "react-native-modern-datepicker";
import { getFormatedDate } from "react-native-modern-datepicker";
import AppTextInput from "../components/AppTextInput";
import AppFacility from "../components/AppFacility";

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

  const [openFacilities, setOpenFacilities] = useState(false);
  const [selectedFacilities, setSelectedFacilities] = useState([]);

  function handleOnpressFacilities() {
    setOpenFacilities(!openFacilities);
  }

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
  const cities = [
    {
      label: "Nablus",
      value: "Nablus",
    },
    {
      label: "Jerusalem",
      value: "Jerusalem",
    },
    {
      label: "Jenin",
      value: "Jenin",
    },
    {
      label: "Tulkarem",
      value: "Tulkarem",
    },
    {
      label: "Beitlahem",
      value: "Beitlahem",
    },
    {
      label: "Ramallah",
      value: "Ramallah",
    },
    {
      label: "Jericho",
      value: "Jericho",
    },
    {
      label: "Herbron",
      value: "Herbron",
    },
    {
      label: "Qalqiliah",
      value: "Qalqiliah",
    },
    {
      label: "Salfit",
      value: "Salfit",
    },
    {
      label: "Tubas",
      value: "Tubas",
    },
  ];

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
  const [item, setItem] = useState(numbers[0]);
  const [cityItem, setCityItem] = useState(cities[0]);
  return (
    <View style={{ backgroundColor: colors.light, height: "100%" }}>
      <View style={styles.header}></View>
      <View style={styles.Container}>
        <AppText style={{ fontWeight: "bold", fontSize: 30 }}>Rooms</AppText>
        <View style={styles.filterContainer}>
          <View style={{ marginTop: 10 }}>
            <View style={styles.dates}>
              <TouchableOpacity style={styles.date} onPress={handleOnpress}>
                {start === "start date" && (
                  <AppText style={{ color: colors.medium }}>{start}</AppText>
                )}
                {start != "start date" && (
                  <AppText style={{ color: colors.black }}>{start}</AppText>
                )}
              </TouchableOpacity>
              <TouchableOpacity style={styles.date} onPress={handleOnpressEnd}>
                {end === "end date" && (
                  <AppText style={{ color: colors.medium }}>{end}</AppText>
                )}
                {end != "end date" && (
                  <AppText style={{ color: colors.black }}>{end}</AppText>
                )}
              </TouchableOpacity>
            </View>
            <View style={styles.dates}>
              <View style={styles.date}>
                <AppTextInput
                  style={{ padding: 0 }}
                  placeholder="min price$/m"
                  cursorStyle={{ textAlign: "center" }}
                  keyboardType="numeric"
                ></AppTextInput>
              </View>
              <View style={styles.date}>
                <AppTextInput
                  style={{ padding: 0 }}
                  placeholder="max price$/m"
                  cursorStyle={{ textAlign: "center" }}
                  keyboardType="numeric"
                ></AppTextInput>
              </View>
            </View>
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
          <View style={styles.rooms}>
            <AppText style={{ marginLeft: 60 }}>Select location:</AppText>

            <AppPicker
              selectedItem={cityItem}
              onSelectItem={(item) => {
                setCityItem(item);
              }}
              style={{ height: 60, width: 150, margin: 10 }}
              icon={"menu-down"}
              items={cities}
            ></AppPicker>
          </View>
          <AppButton
            style={{
              width: "60%",
              alignSelf: "center",
              marginTop: 23,
              backgroundColor: colors.white,
              borderWidth: 1,
              borderColor: colors.black,
            }}
            title={"Select facilities"}
            textStyle={{
              fontSize: 15,
              textTransform: null,
              color: colors.primary,
            }}
            onPress={handleOnpressFacilities}
          ></AppButton>
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
      <Modal animationType="slide" transparent={true} visible={openFacilities}>
        <View style={styles.centeredView}>
          <View style={styles.modalViewFacilites}>
            <TouchableOpacity onPress={handleOnpressFacilities}>
              <AppText style={{ color: colors.primary }}>Close</AppText>
            </TouchableOpacity>
            <View style={styles.facilities}>
              {facilityData.map((facility) => (
                <AppFacility
                  key={facility.text}
                  icon={facility.icon}
                  text={facility.text}
                  selected={selectedFacilities.includes(facility.text)}
                  onPress={() => handleFacilitySelect(facility.text)}
                  style={{ width: 150 }}
                />
              ))}
            </View>
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
    height: 400,
    width: "100%",
    alignSelf: "center",
    borderRadius: 15,
    backgroundColor: colors.white,
  },
  Container: {
    alignSelf: "center",
    width: "93%",
    height: 300,
    marginTop: 110,
  },
  dates: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
    marginTop: 10,
  },
  rooms: {
    flexDirection: "row",
    marginTop: 30,
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
    bottom: 5,
    width: "80%",
    alignSelf: "center",
    height: 50,
  },
  logoContainer: { alignSelf: "center", marginTop: 15 },
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
  modalViewFacilites: {
    margin: 10,
    backgroundColor: "white",
    borderRadius: 20,
    width: "90%",
    padding: 5,
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
  facilities: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    padding: 10,
  },
});
export default FilterSearchScreen;

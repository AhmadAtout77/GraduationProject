import React from "react";
import { View, StyleSheet } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import defaultStyles from "../config/styles";
import AppText from "./AppText";
import { TouchableWithoutFeedback } from "react-native";
import { Modal } from "react-native";
import { useState } from "react";
import AppScreen from "./AppScreen";
import { Button } from "react-native";
import { FlatList } from "react-native";
import PickerItem from "./PickerItem";

function AppPicker({ icon, name, style, items, onSelectItem, selectedItem }) {
  const [modalVisable, setModalVisable] = useState(false);
  return (
    <>
      <TouchableWithoutFeedback onPress={() => setModalVisable(true)}>
        <View style={[styles.container, style]}>
          {icon && (
            <MaterialCommunityIcons
              name={icon}
              size={20}
              color={defaultStyles.colors.medium}
              style={styles.icon}
            />
          )}

          <AppText style={{ alignItems: "center", justifyContent: "center" }}>
            {selectedItem.label}
          </AppText>
        </View>
      </TouchableWithoutFeedback>
      <Modal visible={modalVisable} animationType="slide">
        <AppScreen>
          <Button title="close" onPress={() => setModalVisable(false)}></Button>
          <FlatList
            data={items}
            keyExtractor={(item) => item.value.toString()}
            renderItem={({ item }) => (
              <PickerItem
                label={item.label}
                onPress={() => {
                  setModalVisable(false);
                  onSelectItem(item);
                }}
              />
            )}
            contentContainerStyle={{ alignItems: "center" }}
          ></FlatList>
        </AppScreen>
      </Modal>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: defaultStyles.colors.light,
    borderRadius: 25,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 10,
  },
  icon: {
    marginRight: 1,
    color: defaultStyles.colors.primary,
  },
});

export default AppPicker;

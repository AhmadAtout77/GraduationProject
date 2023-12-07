import React from "react";
import { View, StyleSheet, Image, TouchableOpacity } from "react-native";
import defaultStyles from "../config/styles";
import AppText from "./AppText";

function CityCard({ image, name, onPress }) {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <View style={styles.imageContainer}>
        <Image source={image} style={styles.image}></Image>
      </View>
      <View style={styles.nameContainer}>
        <AppText style={styles.name}>{name}</AppText>
      </View>
    </TouchableOpacity>
  );
}
const styles = StyleSheet.create({
  container: {
    left: 20,
    width: "90%",
    height: 150,
    flexDirection: "row",
    marginVertical: 10,
  },
  imageContainer: {
    flex: 0.6,
  },
  nameContainer: {
    flex: 0.4,
    borderTopRightRadius: 20,
    borderBottomRightRadius: 20,
    backgroundColor: defaultStyles.colors.white,
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    flex: 1,
    width: "100%",
    borderTopLeftRadius: 20,
    borderBottomLeftRadius: 20,
  },
  name: {
    fontSize: 20,
  },
});
export default CityCard;

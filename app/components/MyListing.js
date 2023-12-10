import React, { useState } from "react";
import { StyleSheet, View, Image, Text, TouchableOpacity } from "react-native";
import Swiper from "react-native-swiper";
import defaultStyles from "../config/styles";
import AppButton from "./AppButton";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import AppText from "./AppText";
import colors from "../config/colors";

function MyListing({ style, property, viewBookings, EditDetails }) {
  return (
    <View style={[styles.container, style]}>
      <View style={styles.swiper}>
        <Swiper
          showsButtons={false}
          loop={false}
          activeDotColor={defaultStyles.colors.primary}
        >
          {property.images.map((item, index) => (
            <View style={{ overflow: "hidden" }} key={index}>
              <Image
                source={item}
                style={styles.image}
                resizeMode="cover"
              ></Image>
            </View>
          ))}
        </Swiper>
      </View>
      <View style={styles.details}>
        <View style={styles.text}>
          <View style={styles.title}>
            <AppText
              numberOfLines={2}
              ellipsizeMode="tail"
              style={{ fontSize: 16, fontWeight: "bold" }}
            >
              Appartment in Nablus with an Amazing view
            </AppText>
          </View>
          <View style={styles.propertyDetails}>
            <View style={styles.item}>
              <AppText style={{ fontSize: 15, color: colors.primary }}>
                29m2
              </AppText>
            </View>
            <View style={styles.item}>
              <MaterialCommunityIcons
                name="map-marker"
                size={15}
                color={colors.primary}
              ></MaterialCommunityIcons>
              <AppText style={{ fontSize: 15 }}>Nablus</AppText>
            </View>
            <View style={styles.item}>
              <AppText style={{ fontSize: 15, color: colors.primary }}>
                230$/m
              </AppText>
            </View>
          </View>
        </View>
        <View style={styles.button}>
          <TouchableOpacity style={{ marginBottom: 10 }} onPress={viewBookings}>
            <AppText
              style={{
                fontSize: 15,
                color: colors.primary,
                fontWeight: "bold",
              }}
            >
              View Bookings
            </AppText>
          </TouchableOpacity>
          <TouchableOpacity onPress={EditDetails}>
            <AppText
              style={{
                fontSize: 15,
                color: colors.primary,
                fontWeight: "bold",
              }}
            >
              Edit Details
            </AppText>
          </TouchableOpacity>
          <AppButton
            title={"delete"}
            style={styles.buttons}
            textStyle={styles.textStyle}
          ></AppButton>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: 320,
    backgroundColor: defaultStyles.colors.white,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    alignSelf: "center",
    marginTop: 15,
    marginBottom: 15,
    overflow: "hidden",
  },
  swiper: {
    height: 200,
  },
  image: {
    width: "100%",
    height: "100%",
  },
  details: {
    flexDirection: "row",
    flex: 1,
  },
  text: {
    flex: 0.7,
    padding: 5,
  },
  button: {
    flex: 0.3,
    justifyContent: "center",
    alignItems: "center",
  },
  buttons: {
    width: 100,
    height: 30,
    padding: 0,
  },
  textStyle: {
    fontSize: 13,
  },
  title: {
    paddingRight: 7,
  },
  propertyDetails: {
    flex: 1,

    flexDirection: "row",
  },
  item: {
    flex: 0.3333,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
});
export default MyListing;

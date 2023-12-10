import React from "react";
import { StyleSheet, View, Image, TouchableOpacity } from "react-native";
import Swiper from "react-native-swiper";
import defaultStyles from "../config/styles";
import AppButton from "./AppButton";
import AppText from "./AppText";
import colors from "../config/colors";

function AppBookingRequest({ style, property, viewUser, confirm, cancel }) {
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
              style={{
                fontSize: 16,
                marginTop: 5,
                color: colors.primary,
                fontWeight: "bold",
              }}
              numberOfLines={2}
              ellipsizeMode="tail"
            >
              Appartment in Nablus with Amazing View
            </AppText>
          </View>
          <View style={styles.info}>
            <View style={styles.price}>
              <AppText>11/11-2022</AppText>
              <AppText style={{ color: colors.primary }}>|</AppText>
              <AppText>30/11/2022</AppText>
            </View>
            <View style={styles.rating}>
              <AppText style={{ fontSize: 20, color: colors.primary }}>
                200$/m
              </AppText>
              <TouchableOpacity onPress={viewUser}>
                <AppText
                  style={{ textDecorationLine: "underline", fontSize: 15 }}
                >
                  AhmadAtout3e8v
                </AppText>
              </TouchableOpacity>
            </View>
          </View>
        </View>
        <View style={styles.button}>
          <AppButton
            title={"confirm"}
            style={[styles.buttons, { backgroundColor: colors.black }]}
            textStyle={styles.textStyle}
            onPress={confirm}
          ></AppButton>
          <AppButton
            title={"Cancel"}
            style={styles.buttons}
            textStyle={styles.textStyle}
            onPress={cancel}
          ></AppButton>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "95%",
    height: 350,
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
    height: 50,
    marginLeft: 10,
  },
  info: {
    flex: 1,
    flexDirection: "row",
  },
  price: { flex: 0.5, justifyContent: "center", alignItems: "center" },
  rating: { flex: 0.5, justifyContent: "center", alignItems: "center" },
});
export default AppBookingRequest;

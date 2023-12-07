import React from "react";
import {
  StyleSheet,
  View,
  Image,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import Swiper from "react-native-swiper";
import defaultStyles from "../config/styles";
import AppButton from "../components/AppButton";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import AppFacility from "../components/AppFacility";
import AppText from "../components/AppText";
import MapView from "react-native-maps";
import ProfilePicture from "../components/ProfilePicture";

function PropertyDetailsScreen({ property, navigation }) {
  return (
    <View>
      <ScrollView>
        <View style={styles.photosContainer}>
          <Swiper
            showsButtons={false}
            loop={false}
            activeDotColor={defaultStyles.colors.primary}
          >
            <View style={{ overflow: "hidden" }}>
              <Image
                source={require("../assets/Appartment.jpg")}
                resizeMode="cover"
                style={styles.image}
              ></Image>
            </View>
            <View style={{ overflow: "hidden" }}>
              <Image
                source={require("../assets/Appartment.jpg")}
                resizeMode="cover"
                style={styles.image}
              ></Image>
            </View>
            <View style={{ overflow: "hidden" }}>
              <Image
                source={require("../assets/Appartment.jpg")}
                resizeMode="cover"
                style={styles.image}
              ></Image>
            </View>
          </Swiper>
        </View>
        {/* //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// */}
        <View style={styles.header}>
          <AppText style={styles.headerText}>
            Appartment in Nablus with an amazing view
          </AppText>

          <View style={{ flexDirection: "row" }}>
            <View
              style={{
                flex: 0.5,
              }}
            >
              <View style={styles.location}>
                <MaterialCommunityIcons
                  style={styles.icon}
                  name="map-marker"
                ></MaterialCommunityIcons>
                <AppText style={styles.text}>dsfdsfdsfd</AppText>
              </View>
              <View style={styles.category}>
                <MaterialCommunityIcons
                  style={styles.icon}
                  name="domain"
                ></MaterialCommunityIcons>
                <AppText style={styles.text}>fdsfsdf</AppText>
              </View>
            </View>
            <View
              style={{
                flex: 0.5,
                alignItems: "flex-end",
              }}
            >
              <AppText style={styles.reviews}>9.8 Exceptional</AppText>
              <AppText
                style={[styles.reviews, { color: defaultStyles.colors.black }]}
              >
                29 reviews
              </AppText>
            </View>
          </View>
        </View>
        {/* /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// */}
        <View style={styles.details}>
          <View
            style={{
              flex: 0.3333,
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "row",
            }}
          >
            <AppText>
              320
              <AppText style={{ color: defaultStyles.colors.primary }}>
                {" "}
                m2
              </AppText>
            </AppText>
          </View>
          <View style={styles.detail}>
            <AppText>2</AppText>
            <MaterialCommunityIcons
              size={20}
              name="toilet"
              style={styles.detailIcon}
            ></MaterialCommunityIcons>
          </View>
          <View style={styles.detail}>
            <AppText>3</AppText>
            <MaterialCommunityIcons
              size={20}
              name="bed-queen"
              style={styles.detailIcon}
            ></MaterialCommunityIcons>
          </View>
        </View>
        {/* //////////////////////////////////////////////////////////////////////////////////////////////////////////////////// */}
        <View style={styles.buttonsContainer}>
          <AppText style={{ fontWeight: "bold" }}>29$/m</AppText>
          <AppButton
            title={"Video"}
            style={{ width: 230, height: 50 }}
          ></AppButton>
        </View>
        {/* ///////////////////////////////////////////////////////////////////////////////////////////////////////// */}
        <View style={styles.mapContainer}>
          <MapView
            initialRegion={{
              latitude: 37.78825,
              longitude: -122.4324,
              latitudeDelta: 0.0922,
              longitudeDelta: 0.0421,
            }}
            provider="google"
            style={{ flex: 1 }}
          ></MapView>
        </View>
        {/* /////////////////////////////////////////////////////////////////////////////////////////////////////////// */}
        <View style={styles.facilities}>
          <AppText style={{ fontWeight: "bold", marginBottom: 5 }}>
            Facilities:-
          </AppText>
          <AppFacility
            icon={"air-conditioner"}
            text={"Air Conditioning"}
          ></AppFacility>
          <AppFacility
            icon={"air-conditioner"}
            text={"Air Conditioning"}
          ></AppFacility>
          <AppFacility
            icon={"air-conditioner"}
            text={"Air Conditioning"}
          ></AppFacility>
          <AppFacility
            icon={"air-conditioner"}
            text={"Air Conditioning"}
          ></AppFacility>
          <AppFacility
            icon={"air-conditioner"}
            text={"Air Conditioning"}
          ></AppFacility>
        </View>
        {/* //////////////////////////////////////////////////////////////////////////////////////////////////////// */}
        <View style={styles.description}>
          <AppText style={{ fontWeight: "bold" }}>Description:-</AppText>
          <AppText style={{ fontSize: 15, marginTop: 7 }}>
            fsdfsdfdsfsdfdsfdsf fsdfsdfdsfsdfdsfdsfdsfdsfds facilitiesfsdfdsf
            sfdsfsdfdsf dsfdsfdsfdfdsfdsf sdfsdfdsfdsf
            sfsdfdsfdfdsdddddddddddddddddddddddddddddddddddddddddddddddddddgdf
          </AppText>
        </View>
        {/* /////////////////////////////////////////////////////////////////////////////////////////////////// */}
        <View style={styles.reviewsContainer}>
          <View style={{ flexDirection: "row" }}>
            <View style={{ flex: 0.5 }}>
              <AppText style={{ fontWeight: "bold" }}> Reviews:-</AppText>
            </View>
            <TouchableOpacity
              onPress={() => navigation.navigate("reviews")}
              style={{ flex: 0.5, alignItems: "flex-end" }}
            >
              <AppText
                style={{ fontSize: 15, color: defaultStyles.colors.primary }}
              >
                See All Reviews..
              </AppText>
            </TouchableOpacity>
          </View>
          <View
            style={{
              flex: 1,
              alignItems: "center",
              flexDirection: "row",
            }}
          >
            <AppText
              style={{ fontSize: 35, color: defaultStyles.colors.primary }}
            >
              9.8
            </AppText>
            <View style={{ marginLeft: 7 }}>
              <AppText style={{ color: defaultStyles.colors.primary }}>
                Exceptional
              </AppText>
              <AppText style={{ fontSize: 15 }}>29 reviews</AppText>
            </View>
          </View>
        </View>
        {/* ////////////////////////////////////////////////////////////////////////////////////////////////////////////////// */}
        <View
          style={{
            backgroundColor: "white",

            marginTop: 8,
            padding: 20,
          }}
        >
          <AppText style={{ fontWeight: "bold" }}>Owner:-</AppText>
          <View
            style={{
              flexDirection: "row",
              marginTop: 20,
              alignItems: "center",
            }}
          >
            <ProfilePicture
              image={require("../assets/profile.jpg")}
              style={{
                width: 70,
                height: 70,
                borderRadius: 35,
                marginRight: 15,
              }}
            ></ProfilePicture>
            <AppText>Ahmad Atout</AppText>
          </View>
        </View>
        {/* //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// */}
        <View
          style={{
            backgroundColor: "white",
            marginTop: 7,
            height: 100,
            flex: 1,
            justifyContent: "space-around",
            alignItems: "center",
            flexDirection: "row",
          }}
        >
          <AppButton
            style={{ width: "50%", backgroundColor: "black" }}
            title={"Contact owner"}
          ></AppButton>
          <AppButton style={{ width: "40%" }} title={"Book Now"}></AppButton>
        </View>
        {/* ////////////////////////////////////////////////////////////////////////////////////////////////////////////// */}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  photosContainer: {
    height: 250,
  },
  image: {
    width: "100%",
    height: "100%",
  },
  header: {
    backgroundColor: defaultStyles.colors.white,
    width: "100%",
    padding: 20,
    marginBottom: 8,
  },
  headerText: {
    fontWeight: "bold",
    marginBottom: 10,
  },
  location: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
  },
  category: {
    flexDirection: "row",
    alignItems: "center",
  },
  text: {
    fontSize: 17,
    marginLeft: 5,
  },
  icon: {
    fontSize: 17,
    color: defaultStyles.colors.primary,
  },
  reviews: {
    fontSize: 17,
    marginBottom: 5,
    color: defaultStyles.colors.primary,
  },
  buttonsContainer: {
    width: "100%",
    backgroundColor: "white",
    flexDirection: "row",
    justifyContent: "space-around",
    marginBottom: 8,
    alignItems: "center",
  },
  mapContainer: {
    backgroundColor: "white",
    height: 200,
    paddingTop: 10,
    paddingBottom: 10,
  },
  facilities: {
    backgroundColor: "white",
    marginTop: 8,
    padding: 20,
  },
  details: {
    height: 50,
    backgroundColor: "white",
    marginBottom: 8,
    flexDirection: "row",
  },
  detail: {
    flex: 0.3333,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
  detailIcon: {
    color: defaultStyles.colors.primary,
    marginLeft: 3,
  },
  description: {
    backgroundColor: "white",
    marginTop: 8,
    padding: 20,
  },
  reviewsContainer: {
    backgroundColor: "white",
    padding: 20,
    height: 150,
    marginTop: 7,
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

export default PropertyDetailsScreen;

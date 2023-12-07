import React, { useState } from "react";
import { StyleSheet, View, Image, TouchableHighlight } from "react-native";
import Swiper from "react-native-swiper";
import defaultStyles from "../config/styles";
import AppButton from "./AppButton";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import AppText from "./AppText";
import colors from "../config/colors";

function ListedProberty({ style, property, viewDetails }) {
  const [isLiked, setIsLiked] = useState(false);

  const toggleLike = () => {
    setIsLiked(!isLiked);
  };

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
              <AppText>29$/m</AppText>
            </View>
            <View style={styles.rating}>
              <AppText style={{ fontSize: 20 }}>9.8</AppText>
              <AppText style={{ fontSize: 15, color: colors.primary }}>
                29 ratings
              </AppText>
            </View>
          </View>
        </View>
        <View style={styles.button}>
          <TouchableHighlight
            underlayColor={defaultStyles.colors.white}
            onPress={toggleLike}
          >
            <MaterialCommunityIcons
              name="heart"
              color={
                isLiked
                  ? defaultStyles.colors.primary
                  : defaultStyles.colors.lightGray
              }
              size={30}
            ></MaterialCommunityIcons>
          </TouchableHighlight>
          <AppButton
            title={"View"}
            style={styles.buttons}
            textStyle={styles.textStyle}
            onPress={viewDetails}
          ></AppButton>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: 300,
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
export default ListedProberty;

import React from "react";
import { Image, StyleSheet, View } from "react-native";
import AppText from "./AppText";
import defaultStyles from "../config/styles";
import { TouchableHighlight } from "react-native";
import Swipeable from "react-native-gesture-handler/Swipeable";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import colors from "../config/colors";

function ListItem({ title, subTitle, image, onPress, renderRightActions }) {
  return (
    <GestureHandlerRootView>
      <Swipeable renderRightActions={renderRightActions}>
        <TouchableHighlight
          underlayColor={defaultStyles.colors.lightGray}
          onPress={onPress}
        >
          <View style={styles.container}>
            <Image style={styles.image} source={image}></Image>
            <View>
              <View style={{ flex: 1, justifyContent: "center" }}>
                <AppText style={styles.title}>{title}</AppText>
                <AppText style={styles.subTitle}>{subTitle}</AppText>
              </View>
            </View>
          </View>
        </TouchableHighlight>
      </Swipeable>
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    padding: 10,
  },
  image: {
    width: 70,
    height: 70,
    borderRadius: 35,
    marginRight: 10,
    borderColor: colors.primary,
    borderWidth: 1,
  },
  title: {
    fontWeight: 500,
  },
  subTitle: {
    color: defaultStyles.colors.medium,
  },
});

export default ListItem;

import React from "react";
import Constrains from "expo-constants";
import { View, StyleSheet, StatusBar } from "react-native";
import defaultStyles from "../config/styles";

function AppScreen({ children, style }) {
  return (
    <View style={[styles.screen, style]}>
      <StatusBar barStyle="dark-content"></StatusBar>
      <View style={styles.view}>{children}</View>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    paddingTop: Constrains.statusBarHeight,
    flex: 1,
    backgroundColor: defaultStyles.colors.light,
  },
  view: {
    flex: 1,
  },
});

export default AppScreen;

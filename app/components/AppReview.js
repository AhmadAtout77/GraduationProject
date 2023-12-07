import React, { useState, useCallback } from "react";
import { View, StyleSheet, TouchableOpacity } from "react-native";
import colors from "../config/colors";
import AppText from "./AppText";
import Seperator from "./Seperator";

function AppReview({ viewUser }) {
  const [textShown, setTextShown] = useState(false);
  const [lengthMore, setLengthMore] = useState(false);
  const toggleNumberOfLines = () => {
    setTextShown(!textShown);
  };

  const onTextLayout = useCallback((e) => {
    setLengthMore(e.nativeEvent.lines.length >= 3);
  }, []);

  return (
    <View style={styles.Container}>
      <View style={{ flexDirection: "row" }}>
        <View style={{ flex: 0.5 }}>
          <TouchableOpacity onPress={viewUser}>
            <AppText style={styles.username}>Username</AppText>
          </TouchableOpacity>
          <AppText style={styles.date}>10/10/2022</AppText>
        </View>
        <View style={{ flex: 0.5, alignItems: "flex-end" }}>
          <AppText style={{ color: colors.primary }}>10.0</AppText>
          <AppText>Exceptional</AppText>
        </View>
      </View>
      <Seperator style={styles.seperator} />

      <AppText
        style={styles.comment}
        onTextLayout={onTextLayout}
        numberOfLines={textShown ? undefined : 3}
      >
        Me and my family had an amazing stay, the apartment is so good with good
        views and comfortable furniturefdgdfgfdgfdgfd gfdgdfgdfgfdfgfdgfdg
        dfgdfg
      </AppText>

      {lengthMore ? (
        <AppText
          onPress={toggleNumberOfLines}
          style={{ lineHeight: 21, marginTop: 10, color: colors.primary }}
        >
          {textShown ? "Read less..." : "Read more..."}
        </AppText>
      ) : null}
    </View>
  );
}

const styles = StyleSheet.create({
  Container: {
    backgroundColor: colors.white,
    width: "95%",
    shadowColor: "#000f",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.4,
    shadowRadius: 2,
    borderRadius: 10,
    alignSelf: "center",
    marginTop: 20,
    padding: 10,
  },
  username: { color: colors.primary },
  date: {
    fontSize: 13,
  },
  seperator: {
    backgroundColor: colors.primary,
    marginVertical: 5,
  },
  comment: {
    color: colors.dark,
  },
  seeMore: {
    color: colors.primary,
    marginTop: 5,
  },
});

export default AppReview;

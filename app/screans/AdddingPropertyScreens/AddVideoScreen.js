import React, { useState } from "react";
import AppScreen from "../../components/AppScreen";
import { View, StyleSheet } from "react-native";
import AppText from "../../components/AppText";
import AppButton from "../../components/AppButton";
import colors from "../../config/colors";
import VideoInput from "../../components/VideoInput";

function AddVideoScreen({ navigation }) {
  const [VideoUri, setVideoUri] = useState();
  const handleAdd = (uri) => {
    setVideoUri(uri);
  };

  const handleRemove = () => {
    setVideoUri(null);
  };

  return (
    <AppScreen>
      <AppText style={styles.header}>
        Upload A tour video of your property
      </AppText>
      <View>
        <VideoInput
          VideoUri={VideoUri}
          onAddVideo={handleAdd}
          onRemoveVideo={handleRemove}
        ></VideoInput>
      </View>
      {VideoUri && (
        <View style={styles.info}>
          <AppText>Video was uploaded successfully</AppText>
        </View>
      )}
      <View style={styles.button}>
        {VideoUri && (
          <AppButton
            onPress={() => navigation.navigate("Details")}
            style={{ width: "90%" }}
            title={"Continue"}
          ></AppButton>
        )}
      </View>
    </AppScreen>
  );
}

const styles = StyleSheet.create({
  header: {
    marginTop: 20,
    marginHorizontal: 20,
    fontSize: 25,
    textAlign: "center",
  },
  button: {
    position: "absolute",
    bottom: 0,
    backgroundColor: colors.light,
    height: 100,
    width: "100%",
    alignItems: "center",
  },
  info: {
    alignSelf: "center",
    width: "80%",
    height: 70,
    borderWidth: 1,
    borderRadius: 10,
    borderColor: colors.primary,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default AddVideoScreen;

import React, { useEffect } from "react";
import {
  View,
  StyleSheet,
  TouchableWithoutFeedback,
  Alert,
} from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import * as ImagePicker from "expo-image-picker";
import colors from "../config/colors";

function VideoInput({ VideoUri, onAddVideo, onRemoveVideo }) {
  useEffect(() => {
    requestPermission();
  }, []);

  const requestPermission = async () => {
    const { granted } = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (!granted) alert("You need to enable permission to access the library.");
  };

  const handlePress = () => {
    if (!VideoUri) selectVideo();
    else
      Alert.alert("Delete", "Are you sure you want to delete this Video?", [
        { text: "Yes", onPress: () => onRemoveVideo() },
        { text: "No" },
      ]);
  };

  const selectVideo = async () => {
    try {
      const result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Videos,
        quality: 0.5,
      });
      if (!result.canceled && result.assets.length > 0) {
        const firstassetUri = result.assets[0].uri;
        console.log(firstassetUri);
        onAddVideo(firstassetUri);
      }
    } catch (error) {
      console.log("Error reading a video", error);
    }
  };

  return (
    <TouchableWithoutFeedback onPress={handlePress}>
      <View style={styles.container}>
        {!VideoUri && (
          <MaterialCommunityIcons color={colors.gray} name="video" size={40} />
        )}
        {VideoUri && (
          <MaterialCommunityIcons
            color={colors.gray}
            name="trash-can"
            size={40}
          />
        )}
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    backgroundColor: colors.black,
    borderRadius: 15,
    height: 150,
    justifyContent: "center",
    marginVertical: 120,
    overflow: "hidden",
    width: 150,
    alignSelf: "center",
  },
  image: {
    height: "100%",
    width: "100%",
  },
});

export default VideoInput;

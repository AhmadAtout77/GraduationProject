import React, { useState } from "react";
import ImageInputList from "../../components/ImageInputList";
import AppScreen from "../../components/AppScreen";
import { View, StyleSheet } from "react-native";
import AppText from "../../components/AppText";
import AppButton from "../../components/AppButton";
import colors from "../../config/colors";

function PickImagesScreen({ navigation }) {
  const [imageUris, setImageUris] = useState([]);
  const handleAdd = (uri) => {
    setImageUris([...imageUris, uri]);
  };

  const handleRemove = (uri) => {
    setImageUris(imageUris.filter((imageUri) => imageUri !== uri));
  };

  return (
    <AppScreen>
      <AppText style={styles.header}>
        Upload at least 5 pictures of your property
      </AppText>
      <View>
        <ImageInputList
          imageUris={imageUris}
          onAddImage={handleAdd}
          onRemoveImage={handleRemove}
        ></ImageInputList>
      </View>
      <View style={styles.button}>
        {imageUris.length > 4 && (
          <AppButton
            onPress={() => navigation.navigate("AddVideo")}
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
});

export default PickImagesScreen;

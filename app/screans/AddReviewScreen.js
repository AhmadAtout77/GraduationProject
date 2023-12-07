import React, { useState } from "react";
import AppScreen from "../components/AppScreen";
import { View, StyleSheet } from "react-native";
import colors from "../config/colors";
import AppText from "../components/AppText";
import AppButton from "../components/AppButton";
import AppTextInput from "../components/AppTextInput";

function AddReviewScreen(props) {
  const [description, setDescription] = useState("");

  const handleDescriptionChange = (text) => {
    setDescription(text);
  };

  const isDescriptionNotEmpty = description.trim() !== "";

  return (
    <AppScreen>
      <View onPress>
        <AppText style={styles.title}>
          Give us Your honest review about your stay
        </AppText>

        <AppTextInput
          style={styles.container}
          placeholder="Enter a brief description of your experience..."
          multiline
          onChangeText={handleDescriptionChange}
        ></AppTextInput>

        <AppText
          style={{
            alignSelf: "center",
            fontSize: 17,
            textAlign: "center",
            width: 200,
            marginTop: 10,
          }}
        >
          How much would you rate your stay out of 10?
        </AppText>

        <AppTextInput
          style={{
            backgroundColor: colors.white,
            width: "17%",
            alignSelf: "center",
          }}
          cursorStyle={{ textAlign: "center" }}
          placeholder="8.7"
          maxLength={4}
        />

        {isDescriptionNotEmpty && (
          <AppButton title="Submit" style={styles.button}></AppButton>
        )}
      </View>
    </AppScreen>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    width: "90%",
    minHeight: 200,
    alignSelf: "center",
    marginTop: 50,
    borderRadius: 20,
    borderColor: colors.primary,
    borderWidth: 2,
  },
  title: {
    alignSelf: "center",
    fontSize: 25,
    textAlign: "center",
    marginTop: 20,
    width: "90%",
  },
  button: {
    alignSelf: "center",
    marginTop: 80,
    marginBottom: "auto",
    width: "90%",
  },
});

export default AddReviewScreen;

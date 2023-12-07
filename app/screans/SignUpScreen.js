import React from "react";
import { Image, StyleSheet, View } from "react-native";
import AppScreen from "../components/AppScreen";
import AppText from "../components/AppText";
import defaultStyles from "../config/styles";
import AppTextInput from "../components/AppTextInput";
import AppButton from "../components/AppButton";
import * as Yup from "yup";
import { AppForm, AppFormField, SubmitButton } from "../components/forms";

const valifdationSchema = Yup.object().shape({
  email: Yup.string().required().email().label("Email"),
  password: Yup.string().required().min(4).label("Password"),
  username: Yup.string()
    .min(8, "Username must be at least 8 characters")
    .max(20, "Username must not exceed 20 characters")
    .matches(
      /^([a-zA-Z_][a-zA-Z0-9]*)$/,
      "Username must start with a letter or underscore and may only contain letters and numbers"
    )
    .label("UserName")
    .required("Username is required"),
  phoneNumber: Yup.string()
    .required("Phone number is required")
    .max(14)
    .label("PhoneNumber"),
});
function SignUpScreen({ navigation }) {
  return (
    <AppScreen style={styles.screen}>
      <View style={styles.nameContainer}>
        <AppText style={styles.name}>
          Pal<AppText style={[styles.name, styles.name2]}>Stay</AppText>
        </AppText>
      </View>
      <View style={styles.fieldsContainer}>
        <AppForm
          initialValues={{
            email: "",
            password: "",
            phoneNumber: "",
            username: "",
          }}
          onSubmit={(values) => {
            navigation.navigate("homePage");
            console.log(values);
          }}
          validationSchema={valifdationSchema}
        >
          <View style={styles.nameInput}>
            <AppFormField
              autoCapitalize="none"
              autoCorrect={false}
              name={"username"}
              icon={"account-edit"}
              placeholder={"Enter your Username"}
              textContentType="givenName"
            ></AppFormField>
          </View>
          <View style={styles.numberInput}>
            <AppFormField
              autoCapitalize="none"
              autoCorrect={false}
              name={"phoneNumber"}
              icon={"phone"}
              placeholder={"Enter your Phone Number"}
              keyboardType="phone-pad"
            ></AppFormField>
          </View>
          <View style={styles.emailInput}>
            <AppFormField
              autoCapitalize="none"
              autoCorrect={false}
              name={"email"}
              icon={"email"}
              placeholder={"Enter your Email"}
              textContentType="emailAddress"
              keyboardType="email-address"
            ></AppFormField>
          </View>
          <View style={styles.passwordInput}>
            <AppFormField
              autoCapitalize="none"
              autoCorrect={false}
              name={"password"}
              icon={"lock"}
              placeholder={"Enter your Password"}
              textContentType="password"
            ></AppFormField>
          </View>
          <View style={styles.buttonsContainer}>
            <SubmitButton
              title={"SignUp"}
              color={"black"}
              style={{ width: "45%" }}
            ></SubmitButton>
          </View>
          <View style={styles.logContainer}>
            <Image
              style={{ width: 120, height: 120 }}
              source={require("../assets/Logo.png")}
            ></Image>
          </View>
        </AppForm>
      </View>
    </AppScreen>
  );
}

const styles = StyleSheet.create({
  screen: {
    backgroundColor: defaultStyles.colors.light,
  },
  nameContainer: {
    marginBottom: 20,
    alignItems: "center",
  },
  fieldsContainer: {
    backgroundColor: defaultStyles.colors.white,
    width: "100%",
    flex: 1,
    borderTopRightRadius: 40,
    borderTopLeftRadius: 40,
    alignItems: "center",
  },
  name: {
    color: defaultStyles.colors.secondary,
    fontSize: 40,
    fontWeight: "bold",
  },
  name2: {
    color: defaultStyles.colors.primary,
  },
  nameInput: {
    marginTop: 5,
    width: "90%",
  },
  numberInput: {
    width: "90%",
  },
  emailInput: {
    width: "90%",
  },
  passwordInput: {
    width: "90%",
  },
  buttonsContainer: {
    width: "90%",
    flexDirection: "row-reverse",
    alignItems: "center",
    justifyContent: "center",
  },
  logContainer: {
    flex: 1,
    justifyContent: "center",
  },
});
export default SignUpScreen;

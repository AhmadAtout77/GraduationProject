import React from "react";
import { Image, StyleSheet, View } from "react-native";
import AppScreen from "../components/AppScreen";
import AppText from "../components/AppText";
import defaultStyles from "../config/styles";
import * as Yup from "yup";
import { AppForm, AppFormField, SubmitButton } from "../components/forms";

const valifdationSchema = Yup.object().shape({
  email: Yup.string().required().email().label("Email"),
  password: Yup.string().required().min(4).label("Password"),
});

function LoginScreen({ navigation }) {
  return (
    <AppScreen style={styles.screen}>
      <View style={styles.nameContainer}>
        <AppText style={styles.name}>
          Pal<AppText style={[styles.name, styles.name2]}>Stay</AppText>
        </AppText>
      </View>
      <AppForm
        initialValues={{ email: "", password: "" }}
        onSubmit={(values) => {
          navigation.navigate("homePage");
          console.log(values);
        }}
        validationSchema={valifdationSchema}
      >
        <View style={styles.fieldsContainer}>
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
              secureTextEntry={true}
            ></AppFormField>
          </View>
          <View style={styles.buttonsContainer}>
            <SubmitButton
              title={"Login"}
              color={"black"}
              style={{ width: "45%" }}
            ></SubmitButton>
            <AppText style={{ color: "black", marginRight: 30 }}>
              Forgot password?
            </AppText>
          </View>
          <View style={styles.logContainer}>
            <Image
              style={{ width: 120, height: 120 }}
              source={require("../assets/Logo.png")}
            ></Image>
          </View>
        </View>
      </AppForm>
    </AppScreen>
  );
}

const styles = StyleSheet.create({
  screen: {
    backgroundColor: defaultStyles.colors.light,
  },
  nameContainer: {
    marginTop: 20,
    marginBottom: 50,
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
  emailInput: {
    marginTop: 50,
    width: "90%",
  },
  passwordInput: {
    width: "90%",
  },
  buttonsContainer: {
    width: "90%",
    flexDirection: "row-reverse",
    alignItems: "center",
  },
  logContainer: {
    flex: 1,
    justifyContent: "center",
  },
});
export default LoginScreen;

import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import WelcomeScreen from "../screans/WelcomeScreen";
import LoginScreen from "../screans/LoginScreen";
import SignUpScreen from "../screans/SignUpScreen";
import defaultStyles from "../config/styles";

import AppNavigator from "./AppNavigator";

const Stack = createNativeStackNavigator();
const AuthNavigator = () => (
  <Stack.Navigator
    screenOptions={{
      headerTintColor: defaultStyles.colors.primary,
    }}
  >
    <Stack.Screen
      name="Welcome"
      component={WelcomeScreen}
      options={{ headerShown: false }}
    ></Stack.Screen>
    <Stack.Screen name="LogIn" component={LoginScreen}></Stack.Screen>
    <Stack.Screen name="SignUp" component={SignUpScreen}></Stack.Screen>
    <Stack.Screen
      name="homePage"
      component={AppNavigator}
      options={{ headerShown: false }}
    ></Stack.Screen>
  </Stack.Navigator>
);

export default AuthNavigator;

import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import defaultStyles from "../config/styles";
import ProfileScreen from "../screans/ProfileScreen";
import ListPropertyNavigator from "./ListPropertyNavigator";
import MyListingsNavigator from "./MyListingsNavigator";
import MyBookingsNavigator from "./MyBookingsNavigator";

const Stack = createNativeStackNavigator();
const ProfileNavigator = () => (
  <Stack.Navigator
    screenOptions={{
      headerTintColor: defaultStyles.colors.primary,
    }}
  >
    <Stack.Screen
      name="Profile"
      component={ProfileScreen}
      options={{ headerShown: false }}
    ></Stack.Screen>
    <Stack.Screen
      name="List"
      component={ListPropertyNavigator}
      options={{ headerShown: false }}
    ></Stack.Screen>
    <Stack.Screen
      name="Listings"
      component={MyListingsNavigator}
      options={{ headerShown: false }}
    ></Stack.Screen>
    <Stack.Screen
      name="ActiveBookings"
      component={MyBookingsNavigator}
      options={{ headerShown: false }}
    ></Stack.Screen>
  </Stack.Navigator>
);

export default ProfileNavigator;

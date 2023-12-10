import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import defaultStyles from "../config/styles";
import MyListingsScreen from "../screans/MyListingsScreen";
import PropertyBookingsScreen from "../screans/PropertyBookingsScreen";
import UserProfileScreen from "../screans/UserProfileScreen";
import EditPropertyDetailsScreen from "../screans/EditPropertyDetailsScreen";

const Stack = createNativeStackNavigator();
const MyListingsNavigator = () => (
  <Stack.Navigator
    screenOptions={{
      headerTintColor: defaultStyles.colors.primary,
    }}
  >
    <Stack.Screen
      name="MyListings"
      component={MyListingsScreen}
      options={{ headerShown: false }}
    ></Stack.Screen>
    <Stack.Screen
      name="EditDetails"
      component={EditPropertyDetailsScreen}
      options={{ headerShown: false }}
    ></Stack.Screen>
    <Stack.Screen
      name="PropertyBookings"
      component={PropertyBookingsScreen}
      options={{ headerShown: false }}
    ></Stack.Screen>
    <Stack.Screen
      name="UserProfile"
      component={UserProfileScreen}
      options={{ headerShown: false }}
    ></Stack.Screen>
  </Stack.Navigator>
);

export default MyListingsNavigator;

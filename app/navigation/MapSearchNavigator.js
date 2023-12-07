import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import defaultStyles from "../config/styles";
import PropertyDetailsScreen from "../screans/PropertyDetailsScreen";
import MapPickerScreen from "../screans/MapPickerScreen";
import ExploreScreen from "../screans/ExploreScreen";
import ReviewsScreen from "../screans/ReviewsScreen";
import UserProfileScreen from "../screans/UserProfileScreen";

const Stack = createNativeStackNavigator();
const MapSearchnavigator = () => (
  <Stack.Navigator
    screenOptions={{
      headerTintColor: defaultStyles.colors.primary,
    }}
  >
    <Stack.Screen
      name="CityPicker"
      component={MapPickerScreen}
      options={{ headerShown: false }}
    ></Stack.Screen>
    <Stack.Screen name="MapView" component={ExploreScreen}></Stack.Screen>
    <Stack.Screen
      name="Details"
      component={PropertyDetailsScreen}
      options={{ headerShown: false }}
    ></Stack.Screen>
    <Stack.Screen
      name="reviews"
      component={ReviewsScreen}
      options={{ headerShown: false }}
    ></Stack.Screen>
    <Stack.Screen
      name="reviewUser"
      component={UserProfileScreen}
      options={{ headerShown: false }}
    ></Stack.Screen>
  </Stack.Navigator>
);

export default MapSearchnavigator;

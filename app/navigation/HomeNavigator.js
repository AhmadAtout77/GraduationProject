import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import defaultStyles from "../config/styles";
import PropertyDetailsScreen from "../screans/PropertyDetailsScreen";
import ListItemsScrean from "../screans/ListItemsScrean";
import HomeScreen from "../screans/HomeScreen";
import FilterSearchScreen from "../screans/FilterSearchScreen";
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
      name="Home"
      component={HomeScreen}
      options={{ headerShown: false }}
    ></Stack.Screen>
    <Stack.Screen
      name="filter"
      component={FilterSearchScreen}
      options={{ headerShown: false }}
    ></Stack.Screen>
    <Stack.Screen
      name="List"
      component={ListItemsScrean}
      options={{ headerShown: false }}
    ></Stack.Screen>
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

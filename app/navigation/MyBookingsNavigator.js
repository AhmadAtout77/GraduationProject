import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import defaultStyles from "../config/styles";
import MyBookingsScreen from "../screans/MyBookingsScreen";
import PropertyDetailsScreen from "../screans/PropertyDetailsScreen";
import AddReviewScreen from "../screans/AddReviewScreen";
import ReviewsScreen from "../screans/ReviewsScreen";
import UserProfileScreen from "../screans/UserProfileScreen";
import ChatScreen from "../screans/ChatScreen";
const Stack = createNativeStackNavigator();
const MyBookingsNavigator = () => (
  <Stack.Navigator
    screenOptions={{
      headerTintColor: defaultStyles.colors.primary,
    }}
  >
    <Stack.Screen
      name="MyBookings"
      component={MyBookingsScreen}
      options={{ headerShown: false }}
    ></Stack.Screen>

    <Stack.Screen
      name="giveReview"
      component={AddReviewScreen}
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
    <Stack.Screen
      name="userChat"
      component={ChatScreen}
      options={{ headerShown: false }}
    ></Stack.Screen>
  </Stack.Navigator>
);

export default MyBookingsNavigator;

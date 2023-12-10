import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import defaultStyles from "../config/styles";
import WelcomeScreen from "../screans/AdddingPropertyScreens/WelcomeScreen";
import CategoriesScreen from "../screans/AdddingPropertyScreens/CategoriesScreen";
import PickCityScreen from "../screans/AdddingPropertyScreens/PickCityScreen";
import PickingFromMapScreen from "../screans/AdddingPropertyScreens/PickingFromMapScreen";
import PickImagesScreen from "../screans/AdddingPropertyScreens/PickImagesScreen";
import AddVideoScreen from "../screans/AdddingPropertyScreens/AddVideoScreen";
import AddDetailsScreen from "../screans/AdddingPropertyScreens/AddDetailsScreen";
import ChatScreen from "../screans/ChatScreen";
const Stack = createNativeStackNavigator();
const ListPropertyNavigator = () => (
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
    <Stack.Screen
      name="Categories"
      component={CategoriesScreen}
      options={{ headerShown: false }}
    ></Stack.Screen>
    <Stack.Screen
      name="PickCity"
      component={PickCityScreen}
      options={{ headerShown: false }}
    ></Stack.Screen>
    <Stack.Screen
      name="Location"
      component={PickingFromMapScreen}
      options={{ headerShown: false }}
    ></Stack.Screen>
    <Stack.Screen
      name="AddPictures"
      component={PickImagesScreen}
      options={{ headerShown: false }}
    ></Stack.Screen>
    <Stack.Screen
      name="AddVideo"
      component={AddVideoScreen}
      options={{ headerShown: false }}
    ></Stack.Screen>
    <Stack.Screen
      name="Details"
      component={AddDetailsScreen}
      options={{ headerShown: false }}
    ></Stack.Screen>
    <Stack.Screen
      name="userChat"
      component={ChatScreen}
      options={{ headerShown: false }}
    ></Stack.Screen>
  </Stack.Navigator>
);

export default ListPropertyNavigator;

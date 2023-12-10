import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import defaultStyles from "../config/styles";
import ChatScreen from "../screans/ChatScreen";
import MessegesScrean from "../screans/MessegesScrean";

const Stack = createNativeStackNavigator();
const ChatNavigator = () => (
  <Stack.Navigator
    screenOptions={{
      headerTintColor: defaultStyles.colors.primary,
    }}
  >
    <Stack.Screen
      name="chatList"
      component={MessegesScrean}
      options={{ headerShown: false }}
    ></Stack.Screen>
    <Stack.Screen
      name="chat"
      component={ChatScreen}
      options={{ headerShown: false }}
    ></Stack.Screen>
  </Stack.Navigator>
);

export default ChatNavigator;

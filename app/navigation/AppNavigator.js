import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import MessegesScrean from "../screans/MessegesScrean";
import ProfileNavigator from "./ProfileNavigator";
import MapSearchnavigator from "./MapSearchNavigator";
import colors from "../config/colors";
import WishListNavigator from "./WishListNavigator";
import HomeNavigator from "./HomeNavigator";
const Tab = createBottomTabNavigator();

const properties = [
  {
    id: 1,
    images: [
      require("../assets/Appartment.jpg"),
      require("../assets/Appartment.jpg"),
      require("../assets/Appartment.jpg"),
    ],
  },
  {
    id: 2,
    images: [
      require("../assets/Appartment.jpg"),
      require("../assets/Appartment.jpg"),
      require("../assets/Appartment.jpg"),
    ],
  },
  {
    id: 3,
    images: [
      require("../assets/Appartment.jpg"),
      require("../assets/Appartment.jpg"),
      require("../assets/Appartment.jpg"),
    ],
  },
  {
    id: 4,
    images: [
      require("../assets/Appartment.jpg"),
      require("../assets/Nablus.jpg"),
      require("../assets/Appartment.jpg"),
    ],
  },
  {
    id: 5,
    images: [
      require("../assets/Appartment.jpg"),
      require("../assets/Appartment.jpg"),
      require("../assets/Appartment.jpg"),
    ],
  },
];

const AppNavigator = () => (
  <Tab.Navigator
    screenOptions={{
      headerTintColor: colors.primary,
    }}
  >
    <Tab.Screen
      name="home"
      component={HomeNavigator}
      options={{
        tabBarIcon: ({ color, size }) => (
          <MaterialCommunityIcons name="home" color={color} size={size} />
        ),
        headerShown: false,
      }}
    ></Tab.Screen>
    <Tab.Screen
      name="wishlist"
      component={WishListNavigator}
      options={{
        tabBarIcon: ({ color, size }) => (
          <MaterialCommunityIcons name="heart" color={color} size={size} />
        ),
        headerShown: false,
      }}
    ></Tab.Screen>
    <Tab.Screen
      name="map"
      component={MapSearchnavigator}
      options={{
        tabBarIcon: ({ color, size }) => (
          <MaterialCommunityIcons name="map" color={color} size={size} />
        ),
        headerShown: false,
      }}
    ></Tab.Screen>
    <Tab.Screen
      name="chat"
      component={MessegesScrean}
      options={{
        tabBarIcon: ({ color, size }) => (
          <MaterialCommunityIcons name="chat" color={color} size={size} />
        ),
        headerShown: false,
      }}
    ></Tab.Screen>
    <Tab.Screen
      name="profile"
      component={ProfileNavigator}
      options={{
        tabBarIcon: ({ color, size }) => (
          <MaterialCommunityIcons
            name="face-man-profile"
            color={color}
            size={size}
          />
        ),
        headerShown: false,
      }}
    ></Tab.Screen>
  </Tab.Navigator>
);

export default AppNavigator;

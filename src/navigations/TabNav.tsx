import { StyleSheet } from "react-native";
import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "../screens/Home";
import Notification from "../screens/Notification";
import Profile from "../screens/Profile";
import { Ionicons } from "@expo/vector-icons";
import { BottomTabsParams } from "./config";
import Activities from "../screens/Activities";
import Places from "../screens/Places";
import Meals from "../screens/Meals";

const Tab = createBottomTabNavigator<BottomTabsParams>();

const TabNav = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: "#515AA3",
        tabBarInactiveTintColor: "#A3A3A3",
        tabBarShowLabel: false,
      }}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          title: "Meaningful Stories",
          tabBarIcon: ({ size, color }) => <Ionicons name="home" size={size} color={color} />,
        }}
      />
      <Tab.Screen
        name="Activities"
        component={Activities}
        options={{
          tabBarIcon: ({ size, color }) => <Ionicons name="body" size={size} color={color} />,
        }}
      />
      <Tab.Screen
        name="Places"
        component={Places}
        options={{
          tabBarIcon: ({ size, color }) => <Ionicons name="location" size={size} color={color} />,
        }}
      />
      <Tab.Screen
        name="Meals"
        component={Meals}
        options={{
          title: "Delicious Home Cooking",
          tabBarIcon: ({ size, color }) => <Ionicons name="restaurant" size={size} color={color} />,
        }}
      />
    </Tab.Navigator>
  );
};

export default TabNav;

const styles = StyleSheet.create({});

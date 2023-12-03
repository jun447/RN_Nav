import { StyleSheet, Text, View } from "react-native";
import React from "react";
import Home from "../Screens/Home";
import Fav from "../Screens/Fav";
import Profile from "../Screens/Profile";
import Search from "../Screens/Search";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { FontAwesome, Ionicons } from "@expo/vector-icons";

const TabNavigation = () => {
  const Tab = createBottomTabNavigator();

  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: "#e91e63",
        tabBarInactiveTintColor: "gray",
      }}
    >
      <Tab.Screen name="Home" component={Home} options={{
        tabBarLabel: 'Home',
        tabBarIcon: ({ color, size }) => (
          <Ionicons name="home" color={color} size={size} />
        )
      }} />
      <Tab.Screen name="Favourite" component={Fav} options={{
        tabBarLabel: 'Fav',
        tabBarIcon: ({ color, size }) => (
          <Ionicons name="heart-outline" color={color} size={size} />
        )
      }} />
      
      <Tab.Screen name="Search" component={Search} options={{
        tabBarLabel: 'Search',
        tabBarIcon: ({ color, size }) => (
          <Ionicons name="search" color={color} size={size} />
        )
      }} />
      <Tab.Screen name="Profile" component={Profile} options={{
        tabBarLabel: 'Me',
        tabBarIcon: ({ color, size }) => (
          <FontAwesome name="user-circle" color={color} size={size} />
        )
      }} />

    </Tab.Navigator>
  );
};

export default TabNavigation;

const styles = StyleSheet.create({});

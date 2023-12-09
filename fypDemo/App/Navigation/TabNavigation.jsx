// import { StyleSheet, Text, View } from "react-native";
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
        tabBarLabel: 'Earn Money',
        tabBarIcon: ({ color, size }) => (
          <Ionicons name="home" color={color} size={size} />
        )
      }} />
      <Tab.Screen name="My Task" component={Fav} options={{
        tabBarLabel: 'My Tasks',
        tabBarIcon: ({ color, size }) => (
          <Ionicons name="heart-outline" color={color} size={size} />
        )
      }} />
      
      <Tab.Screen name="Post" component={Search} options={{
        tabBarLabel: 'Post',
        tabBarIcon: ({ color, size }) => (
          <Ionicons name="search" color={color} size={size} />
        )
      }} />
      <Tab.Screen name="Messages" component={Profile} options={{
        tabBarLabel: 'Chat',
        tabBarIcon: ({ color, size }) => (
          <FontAwesome name="user-circle" color={color} size={size} />
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


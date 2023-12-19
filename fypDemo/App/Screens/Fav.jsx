import {
  StyleSheet,
  View,
  Pressable,
  Text,
  Image,
  FlatList,
} from "react-native";
import React from "react";
import { Button } from "react-native-paper";
import {
  Ionicons,
  FontAwesome,
  MaterialCommunityIcons,
} from "@expo/vector-icons";

const data = [
  { icon: "md-home", text: "Home" },
  { icon: "md-settings", text: "Settings" },
  { icon: "md-person", text: "Profile" },
  { icon: "md-chatbubbles", text: "Chat" },
  { icon: "md-calendar", text: "Calendar" },
  { icon: "md-camera", text: "Camera" },
  { icon: "md-mic", text: "Microphone" },
  { icon: "md-globe", text: "World" },
  { icon: "md-rocket", text: "Rocket" },
  { icon: "md-heart", text: "Heart" },
  { icon: "md-star", text: "Star" },
  { icon: "md-book", text: "Book" },
  // Add more items as needed
];

const Fav = ({navigation}) => {
  return (
    // {/* <ScrollView> */}
    <View style={styles.container}>
      <View style={styles.navBar}>
        <View style={styles.logo}>
          <Image
            style={styles.img2}
            source={require("../../assets/logo.jpg")}
          />
          <Text style={styles.logoText}>
            Work
            <Text style={[styles.logoText, styles.logoText2]}>{" Whiz"}</Text>
          </Text>
        </View>
        <View style={styles.menu}>
          <Pressable
            onPress={() =>
              navigation.navigate("Profile", console.log("Fav Pressed"))
            }
            style={styles.button}
          >
            <Image
              style={styles.img}
              source={require("../../assets/Settings.jpg")}
            />
          </Pressable>
        </View>
      </View>
      <View style={styles.threButns}>
        <Text style={styles.mainText}>My Tasks</Text>
      </View>
      <View style={styles.poster}>
        <Button
          icon={() => <FontAwesome name="dollar" size={24} color="white" />}
          mode="contained"
          buttonColor="#316B8C"
          onPress={() => console.log("Pressed")}
        >
          Earn Money
        </Button>
        <Button
          icon={() => (
            <MaterialCommunityIcons
              name="briefcase-upload"
              size={24}
              color="white"
            />
          )}
          mode="contained"
          buttonColor="#316B8C"
          onPress={() => console.log("Pressed")}
        >
          Post a Job
        </Button>
      </View>
      <View style={styles.bottomNavBar}>
        <Text style={styles.bannerText}>Need Some Service</Text>
      </View>
      <View style={styles.servicesSection}>
       
      </View>
    </View>
    // {/* </ScrollView> */}
  );
};

export default Fav;

const styles = StyleSheet.create({
  gridContainer: {
    flex: 1,
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    backgroundColor: "#fff",
    gap: 10,
  },
  gridItem: {
    width: "21%",
    height: "19%",
    // padding: 8,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5F5F5",
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  gridItemText: {
    color: "#555",
    fontSize: 12,
    fontWeight: "700",
    textAlign: "center",
  },
  bannerText: {
    color: "#555",
    textShadowColor: "rgba(0, 0, 0, 0.25)",
    textShadowOffset: { width: 0, height: 4 },
    textShadowRadius: 4,
    fontSize: 32,
    fontStyle: "italic",
    fontWeight: "700",
    lineHeight: 35,
    textAlign: "center",
  },
  img: {
    width: 50,
    height: 50,
    resizeMode: "contain",
  },
  img2: {
    width: 50,
    height: 50,
    resizeMode: "contain",
  },
  logoText: {
    color: "#316B8C",
    textShadowColor: "rgba(0, 0, 0, 0.25)",
    textShadowOffset: { width: 0, height: 4 },
    textShadowRadius: 4,
    fontSize: 35,
    fontStyle: "italic",
    fontWeight: "700",
    lineHeight: 35,
  },
  logoText2: {
    color: "#1E2643",
  },
  mainText: {
    color: "#F5F5F5",
    textShadowColor: "rgba(0, 0, 0, 0.25)",
    textShadowOffset: { width: 0, height: 4 },
    textShadowRadius: 4,
    fontSize: 32,
    fontStyle: "italic",
    fontWeight: "700",
    lineHeight: 45,
    textAlign: "center",
    borderRadius: 100,
    width: "97%",
    backgroundColor: "rgba(44, 139, 139, 0.85)",
  },
  container: {
    flex: 1,
    borderColor: "violet",
    borderWidth: 2,
    backgroundColor: "#fff",
  },
  // NavBar Started
  navBar: {
    flex: 0.14,
    // borderColor: "blue",
    // borderWidth: 1,
    flexDirection: "row",
    // backgroundColor: "#B1ABAB",
  },
  logo: {
    flex: 0.8,
    // borderColor: "red",
    // borderWidth: 1,
    alignItems: "center",
    flexDirection: "row",
    gap: 40,
  },
  menu: {
    flex: 0.2,
    // borderColor: "yellow",
    // borderWidth: 1,
    alignItems: "center",
    justifyContent: "center",
    // backgroundColor: "blue",
  },
  // NavBar Ended
  threButns: {
    flex: 0.1,
    // borderColor: "red",
    // borderWidth: 5,
    alignItems: "center",
    justifyContent: "center",
   
  },
  poster: {
    flex: 0.09,
    borderColor: "green",
    borderWidth: 5,
    backgroundColor: "yellow",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },
  servicesSection: {
    flex: 0.6,
    borderColor: "orange",
    borderWidth: 5,
    backgroundColor: "blue",
  },
  bottomNavBar: {
    flex: 0.1,
    borderColor: "purple",
    borderWidth: 3,
    backgroundColor: "pink",
  },
});

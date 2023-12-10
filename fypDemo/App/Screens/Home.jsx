import { StyleSheet, View, Pressable, Text, Image } from "react-native";
import React from "react";

const Home = ({ navigation }) => {
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
        <Text style={styles.mainText} >Welcome to Work Whiz</Text>
      </View>
      <View style={styles.poster}></View>
      <View style={styles.servicesSection}></View>
      <View style={styles.bottomNavBar}></View>
    </View>
    // {/* </ScrollView> */}
  );
};

const styles = StyleSheet.create({
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
    lineHeight: 35,
    textAlign: "center",
  },
  container: {
    flex: 1,
    // borderColor: "violet",
    // borderWidth: 5,
    backgroundColor: "#fff",
  },
  // NavBar Started
  navBar: {
    flex: 0.1,
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
    backgroundColor: 'rgba(44, 139, 139, 0.85)',
    justifyContent: "center"
  },
  poster: {
    flex: 0.2,
    borderColor: "green",
    borderWidth: 5,
    backgroundColor: "yellow",
  },
  servicesSection: {
    flex: 0.5,
    borderColor: "orange",
    borderWidth: 5,
    backgroundColor: "blue",
  },
  bottomNavBar: {
    flex: 0.105,
    borderColor: "purple",
    borderWidth: 3,
    backgroundColor: "pink",
  },
});

export default Home;

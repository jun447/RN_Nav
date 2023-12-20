import {
  StyleSheet,
  View,
  Pressable,
  // Text,
  Image,
  FlatList,
} from "react-native";
import React from "react";
// import reac from 'react-native-paper'
import {
  Button,
  Searchbar,
  Avatar,
  Divider,
  Text,
  Chip,
} from "react-native-paper";
import {
  Ionicons,
  FontAwesome,
  MaterialCommunityIcons,
} from "@expo/vector-icons";
const Fav = ({ navigation }) => {
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
        <Searchbar
          placeholder="Search Tasks"
          elevation={5}
          style={{
            width: "97%",
            // backgroundColor: "rgba(44, 139, 139, 0.85)"
          }}
        />
      </View>
      {/* <View style={styles.bottomNavBar}>
        <Text style={styles.bannerText}>Need Some Service</Text>
      </View> */}
      <View style={styles.servicesSection}>
        <View style={styles.task}>
          <View style={styles.taskImage}>
            <Avatar.Image size={50} source={require("../../assets/user.png")} />
          </View>
          <View style={styles.part2}>
            <View style={styles.aboveText}>
              <Ionicons name="ios-list" size={24} color="black" />
              <Text variant="labelLarge">Need Carpenter For Bed</Text>
            </View>
            <Divider bold={true} />
            <View style={styles.lowerText}>
              <Ionicons name="location" size={24} color="black" />
              <Text variant="labelLarge">Township, Lahore</Text>
            </View>
            <Divider bold={true} />
          </View>
          <View style={styles.part3}>
            {/* create button and price tag below */}

            <Button
              mode="contained"
              buttonColor="#316B8C"
              onPress={() => console.log("Pressed")}
            >
              Open
            </Button>

            <Chip onPress={() => console.log("Pressed")}>Price</Chip>
          </View>
        </View>
        <View style={styles.task}>
          <View style={styles.taskImage}>
            <Avatar.Image size={50} source={require("../../assets/user.png")} />
          </View>
          <View style={styles.part2}>
            <View style={styles.aboveText}>
              <Ionicons name="ios-list" size={24} color="black" />
              <Text variant="labelLarge">Need Carpenter For Bed</Text>
            </View>
            <Divider bold={true} />
            <View style={styles.lowerText}>
              <Ionicons name="location" size={24} color="black" />
              <Text variant="labelLarge">Township, Lahore</Text>
            </View>
            <Divider bold={true} />
          </View>
          <View style={styles.part3}>
            {/* create button and price tag below */}

            <Button
              mode="contained"
              buttonColor="#316B8C"
              onPress={() => console.log("Pressed")}
            >
              Open
            </Button>

            <Chip onPress={() => console.log("Pressed")}>Price</Chip>
          </View>
        </View>
        <View style={styles.task}>
          <View style={styles.taskImage}>
            <Avatar.Image size={50} source={require("../../assets/user.png")} />
          </View>
          <View style={styles.part2}>
            <View style={styles.aboveText}>
              <Ionicons name="ios-list" size={24} color="black" />
              <Text variant="labelLarge">Need Carpenter For Bed</Text>
            </View>
            <Divider bold={true} />
            <View style={styles.lowerText}>
              <Ionicons name="location" size={24} color="black" />
              <Text variant="labelLarge">Township, Lahore</Text>
            </View>
            <Divider bold={true} />
          </View>
          <View style={styles.part3}>
            {/* create button and price tag below */}

            <Button
              mode="contained"
              buttonColor="#316B8C"
              onPress={() => console.log("Pressed")}
            >
              Open
            </Button>

            <Chip onPress={() => console.log("Pressed")}>Price</Chip>
          </View>
        </View>
        <View style={styles.task}>
          <View style={styles.taskImage}>
            <Avatar.Image size={50} source={require("../../assets/user.png")} />
          </View>
          <View style={styles.part2}>
            <View style={styles.aboveText}>
              <Ionicons name="ios-list" size={24} color="black" />
              <Text variant="labelLarge">Need Carpenter For Bed</Text>
            </View>
            <Divider bold={true} />
            <View style={styles.lowerText}>
              <Ionicons name="location" size={24} color="black" />
              <Text variant="labelLarge">Township, Lahore</Text>
            </View>
            <Divider bold={true} />
          </View>
          <View style={styles.part3}>
            {/* create button and price tag below */}

            <Button
              mode="contained"
              buttonColor="#316B8C"
              onPress={() => console.log("Pressed")}
            >
              Open
            </Button>

            <Chip onPress={() => console.log("Pressed")}>Price</Chip>
          </View>
        </View>
        <View style={styles.task}>
          <View style={styles.taskImage}>
            <Avatar.Image size={50} source={require("../../assets/user.png")} />
          </View>
          <View style={styles.part2}>
            <View style={styles.aboveText}>
              <Ionicons name="ios-list" size={24} color="black" />
              <Text variant="labelLarge">Need Carpenter For Bed</Text>
            </View>
            <Divider bold={true} />
            <View style={styles.lowerText}>
              <Ionicons name="location" size={24} color="black" />
              <Text variant="labelLarge">Township, Lahore</Text>
            </View>
            <Divider bold={true} />
          </View>
          <View style={styles.part3}>
            {/* create button and price tag below */}

            <Button
              mode="contained"
              buttonColor="#316B8C"
              onPress={() => console.log("Pressed")}
            >
              Open
            </Button>

            <Chip onPress={() => console.log("Pressed")}>Price</Chip>
          </View>
        </View>
        <View style={styles.task}>
          <View style={styles.taskImage}>
            <Avatar.Image size={50} source={require("../../assets/user.png")} />
          </View>
          <View style={styles.part2}>
            <View style={styles.aboveText}>
              <Ionicons name="ios-list" size={24} color="black" />
              <Text variant="labelLarge">Need Carpenter For Bed</Text>
            </View>
            <Divider bold={true} />
            <View style={styles.lowerText}>
              <Ionicons name="location" size={24} color="black" />
              <Text variant="labelLarge">Township, Lahore</Text>
            </View>
            <Divider bold={true} />
          </View>
          <View style={styles.part3}>
            {/* create button and price tag below */}

            <Button
              mode="contained"
              buttonColor="#316B8C"
              onPress={() => console.log("Pressed")}
            >
              Open
            </Button>

            <Chip onPress={() => console.log("Pressed")}>Price</Chip>
          </View>
        </View>
      </View>
    </View>
    // {/* </ScrollView> */}
  );
};

export default Fav;

const styles = StyleSheet.create({
  servicesSection: {
    flex: 0.7,
    // borderColor: "orange",
    // borderWidth: 2,
    // backgroundColor: "blue",
  },
  aboveText: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
  lowerText: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
  task: {
    // flex: 0.3,
    // borderColor: "red",
    borderWidth: 1,
    // backgroundColor: "pink",
    flexDirection: "row",
    // justifyContent:'center',
    alignItems: "center",
    // flexWrap: "wrap",
  },
  taskImage: {
    flex: 0.14,
    // borderColor: "red",
    // borderWidth: 2,
    // backgroundColor: "green",
  },
  part2: {
    flex: 0.58,
    // borderColor: "red",
    // borderWidth: 2,
    // backgroundColor: "yellow",
  },
  part3: {
    flex: 0.28,
    // borderColor: "red",
    // borderWidth: 2,
    // backgroundColor: "orange",
  },
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
    // borderColor: "green",
    // borderWidth: 5,
    // backgroundColor: "yellow",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },
  bottomNavBar: {
    flex: 0.1,
    borderColor: "purple",
    borderWidth: 3,
    backgroundColor: "pink",
  },
});

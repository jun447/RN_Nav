import { SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Home = () => {
  return (

      // {/* <ScrollView> */}
    <View style={styles.container} >
      <View style={styles.navBar} >  
        <View style={styles.logo}>

        </View>
        <View style={styles.menu}>

        </View>
      </View>
      <View style={styles.threButns}>
                 
      </View>
      <View style={styles.poster}>

      </View>
      <View style={styles.servicesSection}>

      </View>
      <View style={styles.bottomNavBar}>

      </View>
      
    </View>
    // {/* </ScrollView> */}
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderColor: "violet",
    borderWidth: 5,
    backgroundColor: "#fff",
  },
  // NavBar Started
  navBar: {
    flex: 0.1,
    borderColor: "blue",
    borderWidth: 1,
    flexDirection: "row",
    // backgroundColor: "red",
  },
  logo: {
    flex: 0.5,
    borderColor: "red",
    borderWidth: 1,
    backgroundColor: "pink",
  },
  menu: { 
    flex: 0.5,
    borderColor: "yellow",
    borderWidth: 1,
    backgroundColor: "blue",
  },
// NavBar Ended
  threButns: {
    flex: 0.1,
    borderColor: "red",
    borderWidth: 5,
    backgroundColor: "green",
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

export default Home
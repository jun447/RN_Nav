import { StyleSheet, Image, View, TextInput } from 'react-native'
import React from 'react'

const Header = () => {
  return (
    <View style={styles.container}  >
      <Image source={require('./../../../assets/logo.png')} 
      style={styles.logo} />
      <View style={styles.searchContainer}>
        <TextInput placeholder="Seach" style={styles.searchBar} />
      </View>
      <Image source={require('./../../../assets/user.png')} 
      style={styles.userImage}
      />
    </View>
  )
}

export default Header

const styles = StyleSheet.create({
  container: {
    
    backgroundColor: '#fff',
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 6,
    // borderColor: '#000',
    // borderWidth: 4,
    // justifyContent: 'end',
  },
  logo:{
        width: 50,
        height: 50,
        resizeMode: 'contain',
        margin: 20,
        flex:0.1,
        padding: 2
    },
    searchContainer:{
      flex: 0.8,
    },
    searchBar:{
        fontSize: 16,
        color: '#333',
        padding: 10,
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 50,
        paddingLeft: 30,
        
    },
    userImage:{
        width: 40,
        height: 40,
        resizeMode: 'contain',
        margin: 20,
        flex:0.1,
        padding: 1
    }
  
})
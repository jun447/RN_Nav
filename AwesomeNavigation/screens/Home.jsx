import { Pressable, StyleSheet, Text, View} from 'react-native'
import React ,{useState} from 'react'

const Home = ({navigation}) => {
 const [myGpa, setMyGpa] = useState(3.5)


  return (
    <View>
      <Text>Home</Text>
      {/* create pressable to go to about screen */}
      <Pressable 
        onPress={() => navigation.navigate('About',{takeData: 'Hello from Ghori',myNumbr: 321,value:myGpa})}
        style={styles.button}
      >
        <Text>Go to About</Text>
      </Pressable>
      {/* create pressable to console MyGpa variable */}
      <Pressable 
        onPress={() => { console.log(myGpa); setMyGpa(myGpa+1); }}
        style={styles.button}
      >
        <Text>Console MyGpa</Text>
        <Text>{myGpa}</Text>
      </Pressable>
    </View>
  )
}

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    backgroundColor: '#DDDDDD',
    padding: 10,
    margin: 10
  }
})

export default Home
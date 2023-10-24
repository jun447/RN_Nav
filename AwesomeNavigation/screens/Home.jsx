import { FlatList, Pressable, StyleSheet, Text, View} from 'react-native'
import React ,{useState} from 'react'


const myDummyData = [
  
  {
    "key": 1,
    "name": "Item 1",
    "description": "This is the first item"
  },
  {
    "key": 2,
    "name": "Item 2",
    "description": "This is the second item"
  },
  {
    "key": 3,
    "name": "Item 3",
    "description": "This is the third item"
  },
  {
    "key": 4,
    "name": "Item 4",
    "description": "This is the third item"
  
  }
  ,
  {
    "key": 5,
    "name": "Item 5",
    "description": "This is the third item"
  }
  ,
  {
    "key": 6,
    "name": "Item 5",
    "description": "This is the third item"
  }
  ,
  {
    "key": 7,
    "name": "Item 5",
    "description": "This is the third item"
  }
  ,
  {
    "key": 8,
    "name": "Item 5",
    "description": "This is the third item"
  }
  ,
  {
    "key": 9,
    "name": "Item 5",
    "description": "This is the third item"
  }

] 


const Home = ({navigation}) => {
 const [myGpa, setMyGpa] = useState(3.5)
 

  return (
    <View>
      <Text>Home</Text>
      {/* create pressable to go to about screen */}
      <Pressable 
        onPress={() => navigation.navigate('About',{takeData: 'Hello From Ghori',myNumbr: 321,value:myGpa})}
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
      <View>
        <FlatList
          data={myDummyData}
          renderItem={({item}) => (
            <View>
              <Text style={styles.itemTitle} >{item.name}</Text>
              <Text style={styles.item}>{item.description}</Text>
            </View>
          )}
         keyExtractor={item => item.key}
        />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    backgroundColor: '#DDDDDD',
    padding: 10,
    margin: 10
  },
  item: {
    backgroundColor: 'pink',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  itemTitle: {
    fontSize: 32,
  },
})

export default Home
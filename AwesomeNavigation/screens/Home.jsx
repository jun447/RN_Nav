import { FlatList, Pressable, StyleSheet, Text, View,ScrollView} from 'react-native'
import React ,{useEffect, useState} from 'react'


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

// use effect to run when component is mounted

const Home = ({navigation}) => {
  const [myGpa, setMyGpa] = useState(3.5)
  const [font, setFont] = useState(20)
  const [data, setData] = useState([])

  // useEffect to get data from API
  useEffect(() => {
    fetch('https://reactnative.dev/movies.json')
    .then((response) => response.json() )
    .then((json) => {console.log(json); setData(json);})
    .catch((error) => console.error(error))
    .finally(() => console.log("API call finished"));
  },[]);






  // define some global setinhgs in useEffect
  useEffect(() => {
    global.setting = {
      font: 20,
      color: 'red',
      fontWeight: 'bold',
    };
  });
  // global.setting = {
  //       font: 20,
       
  //       fontWeight: 'bold',
  // };
  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      setFont(font + 10);
      console.log(`Home screen is focused with Font = ${font}`);
      console.log("Home screen is focused with Global = ",global.setting);
    });
    return unsubscribe;
  }, [navigation, font]);

  return (
    <View>
     <Text style={[styles.txt, {fontSize: font, color: global.setting ? global.setting.color : 'blue' }]}>Home</Text>
      {/* create pressable to go to about screen */}
      <Pressable 
        onPress={() => navigation.navigate('About',{takeData: 'Hello From Ghori',myNumbr: 321,value:myGpa})}
        style={styles.button}
      >
        <Text>Go to About</Text>
      </Pressable>
      <Pressable 
        onPress={() => navigation.navigate('LUSE',
              // {takeData: 'Hello From Ghori',myNumbr: 321,value:myGpa}
        )}
        style={styles.button}
      >
        <Text>Go to LUSE</Text>
      </Pressable>
      {/* create pressable to console MyGpa variable */}
      <Pressable 
        onPress={() => { console.log(myGpa); setMyGpa(myGpa+1); }}
        style={styles.button}
      >
        <Text>Console MyGpa</Text>
        <Text>{myGpa}</Text>
      </Pressable>
      <Pressable
        onPress={() => navigation.navigate('Login')}
        style={styles.button}
      >
        <Text>Go to Login</Text>
      </Pressable>

      <View>
        <ScrollView>
          <FlatList
            data={data.movies}
            renderItem={({item}) => (
              <View>
                <Text style={styles.itemTitle} >{item.title}</Text>
                <Text style={styles.item}>{item.releaseYear}</Text>
              </View>
            )}
            keyExtractor={item => item.id}
          />
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
        </ScrollView>
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
  txt: {
    color: 'red',
    fontWeight: 'bold',
    fontStyle: 'italic',
    textAlign: 'center',
  }
})

export default Home
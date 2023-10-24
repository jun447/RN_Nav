import { StyleSheet, Text, View ,SectionList} from 'react-native'
import React from 'react'

const data = [
  {
    title: 'A',
    data: [
      { key: 1, name: 'Apple' },
      { key: 2, name: 'Apricot' },
      { key: 3, name: 'Avocado' },
    ],
  },
  {
    title: 'B',
    data: [
      { key: 4, name: 'Banana' },
      { key: 5, name: 'Blueberry' },
    ],
  },
  {
    title: 'C',
    data: [
      { key: 6, name: 'Cherry' },
      { key: 7, name: 'Coconut' },
      { key: 8, name: 'Cranberry' },
    ],
  },
];

const About = ({navigation,route}) => {
  const {takeData} = route.params
  const {myNumbr} = route.params
  const {value} = route.params
  return (
    <>
    <View style={styles.container}>
      <Text>About</Text>
      <Text>{takeData}</Text>
      <Text>{myNumbr}</Text>
      <Text>  {value}</Text>
    </View>
    <View style={styles.container1}>
       <SectionList
        sections={data}
        keyExtractor={(item) => item.key}
        renderItem={({ item }) => (
          <Text style={styles.item}>
            {item.name}
          </Text>
        )}
        renderSectionHeader={({ section: { title } }) => (
          <Text style={styles.header}>
            {title}
          </Text>
        )}
       
       />
    </View>
    </>
  )
}

export default About

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    backgroundColor: 'orange',
    padding: 10
  },
  container1: {
    // flex: 1,
    backgroundColor: 'red',
    padding: 10
  },
  item: {
    backgroundColor: 'lightblue',
    padding: 10,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  header: {
    fontSize: 32,
    backgroundColor: 'lightgreen',
  },
  title: {
    fontSize: 24,
  },
})
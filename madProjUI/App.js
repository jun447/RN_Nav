import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import Signup from './components/Signup';
import Login from './components/Login';

export default function App() {
  return (
    // <SafeAreaView style={styles.container}>
    <>
      {/* <Signup /> */}
      {/* <Text>Open up App.js to start working on your app!</Text> */}
      <Login />
    </>
    /* </SafeAreaView> */
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    borderColor: 'red',
    borderWidth: 1,
  },
});

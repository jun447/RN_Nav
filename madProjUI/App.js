import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import Signup from './components/Signup';
import Login from './components/Login';
import Welcome from './components/Welcome';
import Home from './components/Home';

export default function App() {
  return (
    // <SafeAreaView style={styles.container}>
    <>
      {/* <Signup /> */}
      {/* <Text>Open up App.js to start working on your app!</Text> */}
      {/* <Login /> */}
      {/* <Welcome /> */}
      <Home />
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

import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import Signup from './components/Signup';

export default function App() {
  return (
    // <SafeAreaView style={styles.container}>
    <>
      <Signup />
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

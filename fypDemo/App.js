import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { useFonts } from 'expo-font';
import TabNavigation from './App/Navigation/TabNavigation';

export default function App() {
  const [fontsLoaded] = useFonts({
    'railway': require('./assets/Fonts/Raleway-Regular.ttf'),
    'railway-bold': require('./assets/Fonts/Raleway-SemiBold.ttf'),
  });
  return (
    <View style={styles.container}>
      <NavigationContainer>
        <TabNavigation />
      </NavigationContainer>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
});

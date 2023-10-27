import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
// import navigation container , native-stack
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Home from './screens/Home';
import About from './screens/About';
import { SafeAreaView } from 'react-native-safe-area-context';
import LUSE from './screens/LUSE';
import Login from './screens/Login';



export default function App() {

  const stack = createNativeStackNavigator();

  return (
    
    <NavigationContainer >
      <stack.Navigator>
        <stack.Screen 
        name="Home" 
        component={Home} 
        options={{
          title: 'Home',
          headerStyle: {
            backgroundColor: 'orange',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}
        />
        <stack.Screen 
        name="About" 
        component={About} 
        />
        <stack.Screen
        name="LUSE"
        component={LUSE}
        />
        <stack.Screen
          name="Login"
          component={Login}
        />
      </stack.Navigator>
    </NavigationContainer>
   
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'red',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

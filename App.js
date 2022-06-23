import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View} from 'react-native';
import Create from './src/screens/create';
import Edit from './src/screens/edit';
import Home from './src/screens/home';
import Signin from './src/screens/signIn';
import Signup from './src/screens/signUp';

export default function App() {
  const Stack = createNativeStackNavigator();
  const user = false
  return (
    <NavigationContainer>
      <Stack.Navigator>
        {
          user? <>
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name="Create" component={Create} />
            <Stack.Screen name="Edit" component={Edit} />
          </>:<>
            <Stack.Screen name="Signin" component={Signin}/>
            <Stack.Screen name="Signup" component={Signup} />
          </>
        }
      </Stack.Navigator>
    </NavigationContainer>
  );
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });

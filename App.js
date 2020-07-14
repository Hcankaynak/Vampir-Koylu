import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import HomeScreen from './Screens/HomeScreen'
import NewGame from './Screens/NewGame'
import HowTo from './Screens/HowTo'
import Settings from './Screens/Settings'
import GameSettings from './Screens/GameSettings';
import Game from './Screens/Game';
export default function App() {

  const Stack = createStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ title: 'Tekmen Sahil',headerStyle: {
            backgroundColor: '#f4511e',
          },
          headerTintColor: '#fff',
          headerTitleAlign: 'center',
          headerTitleStyle: {
            fontWeight: 'bold',
          }, }}
        />
        <Stack.Screen name="Yeni Oyun" component={NewGame}  />
        <Stack.Screen name="Nasıl Oynanır" component={HowTo}  />
        <Stack.Screen name="Ayarlar" component={Settings}  />
        <Stack.Screen name="Oyun Ayarları" component={GameSettings}  />
        <Stack.Screen name="Oyun" component={Game}  />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

// Importação das Telas (Vamos criá-las a seguir)
import HomeScreen from '../screens/HomeScreen';
import ExplorationScreen from '../screens/ExplorationScreen';
// import InventoryScreen from '../screens/InventoryScreen'; 

const Stack = createStackNavigator();

export default function Routes() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerShown: false, // Escondemos o header para manter a imersão no RPG
          cardStyle: { backgroundColor: '#0D0D0D' } // Fundo padrão metálico/escuro
        }}
      >
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Exploration" component={ExplorationScreen} />
        {/* <Stack.Screen name="Inventory" component={InventoryScreen} /> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
}
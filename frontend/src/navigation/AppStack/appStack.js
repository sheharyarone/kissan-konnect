// src/navigation/AppStack.js
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../../screens/home/homeScreen';

const Stack = createStackNavigator();

const AppStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={HomeScreen} />
      {/* Add more screens here */}
    </Stack.Navigator>
  );
};

export default AppStack;

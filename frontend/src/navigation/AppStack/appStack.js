// src/navigation/AppStack.js
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../../screens/home/homeScreen';
import SearchScreen from '../../screens/search/searchScreen';
import UploadScreen from '../../screens/upload/uploadScreen';

const Stack = createStackNavigator();

const AppStack = () => {
  return (
  <Stack.Navigator>
    <Stack.Screen name="Home" component={HomeScreen} />
    <Stack.Screen name="UploadScreen" component={UploadScreen} />
    <Stack.Screen name="SearchScreen" component={SearchScreen} />
  </Stack.Navigator>
  );
};

export default AppStack;

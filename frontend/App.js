// src/App.js
import React, { useState, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import AuthStack from './src/navigation/AuthStack/authStack';
import AppStack from './src/navigation/AppStack/appStack';
import HomeScreen from './src/screens/home/homeScreen';


const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  // Example logic: In real apps, replace this with authentication logic
  useEffect(() => {
    const checkAuthentication = () => {
      // You can use AsyncStorage, Redux, or Context to check if the user is logged in
      // setIsAuthenticated(true/false);
    };
    checkAuthentication();
  }, []);

  return (
    <NavigationContainer>
      {isAuthenticated ? <AppStack /> : <AuthStack />}
    </NavigationContainer>  );
};

export default App;

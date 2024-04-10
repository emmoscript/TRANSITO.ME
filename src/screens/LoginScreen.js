import React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native'; // Import NavigationContainer

const LoginScreen = () => {
  return (
    <NavigationContainer>  {/* Wrap LoginScreen with NavigationContainer */}
      <View>
        <Text>LoginScreen</Text>
      </View>
    </NavigationContainer>
  );
};

export default LoginScreen;

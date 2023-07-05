import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Registration from './src/LoginPage';
import SignUpPage from './src/SignUpPage';

const Stack = createNativeStackNavigator();
const Auth = () => {
  return (
    
    <NavigationContainer>
      <Stack.Navigator screenOptions={{
        headerShown: false,
      }}>
        <Stack.Screen name='LoginPage' component={Registration} />
        <Stack.Screen name='SignUpPage' component={SignUpPage} />
      </Stack.Navigator>
   </NavigationContainer>
  )
}

export default Auth

const styles = StyleSheet.create({})
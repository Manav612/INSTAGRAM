
// ------******* shree ganpati bapa moreya *******  //

import { Button, StyleSheet, Text, TextInput, View } from "react-native";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator  } from "@react-navigation/native-stack";



import Chat from "./Chat";
import Comments from "./Comments";
import SharePost from "./SharePost";
import SavePost from "./SavePost";
import ShareProfile from "./ShareProfile";



const Stack = createNativeStackNavigator();

const NavigationStack = () => {
  return (
      <NavigationContainer>
        <Stack.Navigator screenOptions={{headerShown:false}}>
         <Stack.Screen name='Chat' component={Chat} />
         <Stack.Screen name='Comments' component={Comments} />
         <Stack.Screen name='SharePost' component={SharePost} />
         <Stack.Screen name='SavePost' component={SavePost} />
         <Stack.Screen name='ShareProfile' component={ShareProfile} />
         
        </Stack.Navigator>
      </NavigationContainer>
    
  )
}

export default NavigationStack;

const styles = StyleSheet.create({});

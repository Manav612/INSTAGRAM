
// ------******* shree ganpati bapa moreya *******  //

import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import {createDrawerNavigator} from '@react-navigation/drawer'
import { NavigationContainer } from '@react-navigation/native'
const Drawer = createDrawerNavigator();
const DrawerPage = () => {
  return (
    
   <NavigationContainer>
   <Drawer.Navigator initialRouteName='Login'>
    <Drawer.Screen name='SettingsPrivacy' component={SettingsPrivacy} />
    <Drawer.Screen name='YourActivity' component={YourActivity} />
    <Drawer.Screen name='Archive' component={Archive} />
    <Drawer.Screen name='Saved' component={Saved} />
    <Drawer.Screen name='CloseFrd' component={CloseFrd} />
    <Drawer.Screen name='Fav' component={Fav} />
   </Drawer.Navigator>
   </NavigationContainer>
   
  )
}

export const  SettingsPrivacy = ()=>{
    return(
        <View>
            <Text>
            Settings and privacy
            </Text>
        </View>
    )
}
export const YourActivity = ()=>{
    return(
        <View>
            <Text>
            your activity
            </Text>
        </View>
    )
}
export const Archive = ()=>{
    return(
        <View>
            <Text>
            Archive
            </Text>
        </View>
    )
}
export const  Saved = ()=>{
    return(
        <View>
            <Text>
            Saved
            </Text>
        </View>
    )
}
export const  CloseFrd = ()=>{
    return(
        <View>
            <Text>
            CloseFrd
            </Text>
        </View>
    )
}
export const  Fav = ()=>{
    return(
        <View>
            <Text>
            Fav
            </Text>
        </View>
    )
}
export default DrawerPage

const styles = StyleSheet.create({})



import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Image } from "react-native";
import InstaFeed from "./InstaFeed";

import { NavigationContainer } from "@react-navigation/native";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import {createDrawerNavigator} from '@react-navigation/drawer'
import SignUpPage from "./SignUpPage";
import Registration from "./LoginPage";
import EditProfile from "./EditProfile";
import Reels from "./Reels";
import AddPost from "./AddPost";
import Profile from "./Profile";
import Search from "./Search";
import Chat from "./Chat";
import { SettingsPrivacy } from "./DrawerPage";
import { YourActivity } from "./DrawerPage";
import { Archive } from "./DrawerPage";
import { Saved } from "./DrawerPage";
import { CloseFrd } from "./DrawerPage";
import { Fav } from "./DrawerPage";
import {Ionicons } from "@expo/vector-icons";
import { Octicons } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native-gesture-handler";
import { Header } from "react-native/Libraries/NewAppScreen";
import Auth from "../Auth";

const Stack = createNativeStackNavigator();
const BottomTab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();
const DrawerPage = () => {
  return (
    <><>
      
    </><Drawer.Navigator
      screenOptions={{
        headerShown: false,
        drawerPosition: 'right'
      }}>
        <Drawer.Screen name='Profile1' component={Profile} />
        <Drawer.Screen name='SettingsPrivacy' component={SettingsPrivacy} />
        <Drawer.Screen name='YourActivity' component={YourActivity} />
        <Drawer.Screen name='Archive' component={Archive} />
        <Drawer.Screen name='Saved' component={Saved} />
        <Drawer.Screen name='CloseFrd' component={CloseFrd} />
        <Drawer.Screen name='Fav' component={Fav} />
      </Drawer.Navigator></>
  )
}

function Tabb() {
  return (
    <BottomTab.Navigator
      screenOptions={({ route }) => ({
        tabBarShowLabel: false,
        headerShown: false,
        tabBarIcon: ({ focused, size, colour }) => {
          let iconName;
          if (route.name === "Home") {
            iconName = focused ? "home" : "home-outline"
          } else if (route.name === "Search") {
            iconName = focused ? "search" : "search-outline"
          } else if (route.name === "AddPost") {
            iconName = focused ? "add" : "add-outline"
          } else if (route.name === "Reels") {
            iconName = focused ? "musical-notes" : "musical-notes-outline"
          }
          return (route.name === "Profile") ?<Image source={require("../assets/manav.png")} style={{ height: 30, width: 30, borderRadius: 50,borderColor:'black',borderWidth:2}} />: <Ionicons name={iconName} size={size} colour={colour} />
        }
      })
      }>
      <BottomTab.Screen name='Home' component={InstaFeed} />
      <BottomTab.Screen name='Search' component={Search} />
      <BottomTab.Screen name="AddPost" component={AddPost}/>
      <BottomTab.Screen name="Reels" component={Reels} />
      <BottomTab.Screen name='Profile' component={DrawerPage} />
    </BottomTab.Navigator>

  )
}

const Root = () => {
  return (
    <NavigationContainer>
    
      <Stack.Navigator screenOptions={{
        headerShown: false,
      }}>

        
        {/* <Stack.Screen name='LoginPage' component={Registration} />
        <Stack.Screen name='SignUpPage' component={SignUpPage} /> */}
        {/* <Stack.Screen name="Auth" component={Auth}/> */}
        <Stack.Screen name='Tabb' component={Tabb} />
        <Stack.Screen name='Chat' component={Chat} />
        <Stack.Screen name='EditProfile' component={EditProfile} />

      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default Root

const styles = StyleSheet.create({})
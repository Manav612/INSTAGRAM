import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Image } from "react-native";
import InstaFeed from "./src/InstaFeed";

import { NavigationContainer } from "@react-navigation/native";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import {createDrawerNavigator} from '@react-navigation/drawer'
import SignUpPage from "./src/SignUpPage";
import Registration from "./src/LoginPage";
import Reels from "./src/Reels";
import AddPost from "./src/AddPost";
import Profile from "./src/Profile";
import Search from "./src/Search";
import Chat from "./src/Chat";
import { SettingsPrivacy } from "./src/DrawerPage";
import { YourActivity } from "./src/DrawerPage";
import { Archive } from "./src/DrawerPage";
import { Saved } from "./src/DrawerPage";
import { CloseFrd } from "./src/DrawerPage";
import { Fav } from "./src/DrawerPage";
import {Ionicons } from "@expo/vector-icons";
import { Octicons } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native-gesture-handler";
import { Header } from "react-native/Libraries/NewAppScreen";
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
          return (route.name === "Profile") ?<Image source={require("./assets/manav.png")} style={{ height: 30, width: 30, borderRadius: 50,borderColor:'black',borderWidth:2}} />: <Ionicons name={iconName} size={size} colour={colour} />
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

export default function App() {
  return (
    <NavigationContainer>
    
      <Stack.Navigator screenOptions={{
        headerShown: false,
      }}>

        
        <Stack.Screen name='LoginPage' component={Registration} />
        <Stack.Screen name='SignUpPage' component={SignUpPage} />

        <Stack.Screen name='Tabb' component={Tabb} />
        <Stack.Screen name='Chat' component={Chat} />

      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,

  },
});


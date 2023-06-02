import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator  } from "@react-navigation/native-stack";
import { Ionicons } from "@expo/vector-icons";
import { View,Text,Image } from 'react-native';
import {NavigationContainer} from '@react-navigation/native'
import InstaFeed from './InstaFeed';
import Reels from './Reels';
import AddPost from './AddPost';
import Profile from './Profile';
import Search from './Search';
import Chat from './Chat';
import { AntDesign } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Octicons } from "@expo/vector-icons";


const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();


    <Stack.Navigator>
    <Stack.Screen name="Home" component={Chat} />
    </Stack.Navigator>



function BottomTabNavigation() {
   
  return (
    <NavigationContainer>
    <Tab.Navigator screenOptions={{headerShown:false}}>
      <Tab.Screen  name="Home"
        component={InstaFeed}
        
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="home" color="black" size={30} />
          ),}} />
           
          
      <Tab.Screen name="Search" component={Search} 
         options={{
          tabBarLabel: 'account-search',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="account-search" size={30} color="black" />
          ),}}
      />
      <Tab.Screen name="AddPost" component={AddPost} 
         options={{
          tabBarLabel: 'AddPost',
          tabBarIcon: ({ color, size }) => (
            <Octicons name="diff-added" size={30} color="black" />
          ),}}
      />
      <Tab.Screen name="Reels" component={Reels} 
         options={{
          tabBarLabel: 'Reels',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons
                name="movie-play-outline"
                size={30}
                color="black"
              />
          ),}}
      />
      <Tab.Screen name="Profile" component={Profile} 
       options={{
          tabBarLabel: 'Reels',
          tabBarIcon: ({ color, size }) => (
            
            <Image 
    source={require('../assets/manav.png')}  
    style={{width: 30, height: 30,borderRadius:50}} 
/>
          ),}} />
    </Tab.Navigator>
    </NavigationContainer>
  );
}


export default BottomTabNavigation;



// ------******* shree ganpati bapa moreya *******  //

import { StyleSheet, Text, View ,Image} from 'react-native'
import React from 'react'
import {Ionicons } from "@expo/vector-icons";
import {createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'
import { FlatList, ScrollView, TextInput } from "react-native-gesture-handler";

const ProfilePosts = [
    {
      id: 1,
      RandomName: "Manav",
      photo: require("../assets/Manav2.jpg"),
    },
    {
      id: 2,
      RandomName: "Sujal",
      photo: require("../assets/sujal.jpg"),
    },
    {
      id: 3,
      RandomName: "Dev",
      photo: require("../assets/dev.jpg"),
    },
    {
      id: 4,
      RandomName: "Kevin",
      photo: require("../assets/kevin.jpg"),
    },
    {
      id: 5,
      RandomName: "Sahil",
      photo: require("../assets/sahil.png"),
    },
    {
      id: 6,
      RandomName: "Dioneapps",
      photo: require("../assets/d.jpg"),
    },
    {
      id: 7,
      RandomName: "Expo",
      photo: require("../assets/Expo.jpg"),
    },
    {
      id: 8,
      RandomName: "Coding",
      photo: require("../assets/coding.jpg"),
    },
    {
      id: 9,
      RandomName: "avatar1",
      photo: require("../assets/avatar1.jpg"),
    },
    {
      id: 10,
      RandomName: "avatar2",
      photo: require("../assets/avatar2.jpg"),
    },
    {
      id: 11,
      RandomName: "avatar3",
      photo: require("../assets/avatar3.jpg"),
    },
    {
      id: 12,
      RandomName: "avatar4",
      photo: require("../assets/avatar4.jpg"),
    },
    {
      id: 13,
      RandomName: "img1",
      photo: require("../assets/img1.jpg"),
    },
    {
      id: 14,
      RandomName: "img2",
      photo: require("../assets/img2.jpg"),
    },
    {
      id: 15,
      RandomName: "img3",
      photo: require("../assets/img3.jpg"),
    },
    {
      id: 16,
      RandomName: "img4",
      photo: require("../assets/img4.jpg"),
    },
    {
      id: 17,
      RandomName: "img5",
      photo: require("../assets/img5.jpg"),
    },
    {
      id: 18,
      RandomName: "manav",
      photo: require("../assets/manav.png"),
    },
  ];
const TopTabPage = () => {
   
const Tab = createMaterialTopTabNavigator(); 
    return(
        
   <Tab.Navigator
    screenOptions={({ route }) => ({
        tabBarShowLabel: false,
        headerShown: false,
        tabBarIcon: ({ focused, size, colour }) => {
          let iconName;
          if (route.name === "Home") {
            iconName = focused ? "grid" : "grid-outline"
          } else if (route.name === "Video") {
            iconName = focused ? "videocam" :"videocam-outline"
          } else if (route.name === "Saved") {
            iconName = focused ? "bookmark" : "bookmark-outline"
          }
          return <Ionicons name={iconName} size={25} colour={colour} />
        }
      })
      }
   >

    <Tab.Screen name='Home' component={Home}/>
    <Tab.Screen name='Video' component={Video}/>
    <Tab.Screen name='Saved' component={Saved}/>
   </Tab.Navigator>
    )
   
  
}
   
const Home = ()=>{
    return(
        <View>
            <FlatList
        data={ProfilePosts}
        numColumns={3}
        renderItem={({item}) =>{
          return(
          <Image source={item.photo}  resizeMode="stretch" style={{ width: 135, height: 150 ,margin:2}} />
          )
        }        
        }
     />
        </View>
    )
}
const Video = ()=>{
    return(
        <View>
            <FlatList
        data={ProfilePosts}
        numColumns={3}
        renderItem={({item}) =>{
          return(
          <Image source={item.photo}  resizeMode="stretch" style={{ width: 135, height: 150 ,margin:2}} />
          )
        }        
        }
     />
        </View>
    )
}
const Saved = ()=>{
    return(
        <View>
           <FlatList
        data={ProfilePosts}
        numColumns={3}
        renderItem={({item}) =>{
          return(
          <Image source={item.photo}  resizeMode="stretch" style={{width: 135, height: 150 ,margin:2 }} />
          )
        }        
        }
     />
        </View>
    )
}
  

export default TopTabPage

const styles = StyleSheet.create({})
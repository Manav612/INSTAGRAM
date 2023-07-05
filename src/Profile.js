import { StyleSheet, Text, View, Image } from "react-native";
import React, { useEffect } from "react";
import { Entypo } from "@expo/vector-icons";
import { Octicons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import EditProfile from "./EditProfile";
import { FlatList, ScrollView, TextInput } from "react-native-gesture-handler";
import { TouchableOpacity } from 'react-native-gesture-handler'
import TopTabPage from "./TopTabPage";
import { useRoute } from "@react-navigation/native";
import { SafeAreaView } from "react-native-safe-area-context";

const Profile = ({ navigation }) => {
  const route =useRoute();
  // useEffect(()=>{
    
    const name = route.params?.pk
    console.log('====>',name)
  // })
  return (
    <>
      <SafeAreaView>
    <View style={{ margin: 10 }}>
      <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
        <Text style={{ fontSize: 20 }}>
          <Entypo name="lock" size={24} color="black" />
          @_manav_06
          <AntDesign name="down" size={20} color="black" />
        </Text>
        <Text>
          <Octicons name="diff-added" size={30} color="black" />
          <TouchableOpacity onPress={() => navigation.openDrawer()}>
            <Entypo name="menu" size={30} color="black" />
          </TouchableOpacity>

        </Text>
      </View>

      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-around",
          alignItems: "center",
        }}
      >
        <View style={{ marginLeft: 15, marginTop: 20 }}>
          <Image
            source={require("../assets/manav.png")}
            style={{ width: 80, height: 80, borderRadius: 50 }}
          />
        </View>
        <View style={{ alignItems: "center" }}>
          <Text>10</Text>
          <Text>Post</Text>
        </View>
        <View style={{ alignItems: "center" }}>
          <Text>120</Text>
          <Text>Followers</Text>
        </View>
        <View style={{ alignItems: "center" }}>
          <Text>160</Text>
          <Text>Following</Text>
        </View>
      </View>

      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          margin: 5,
        }}
      >
        <Text style={{ fontSize: 15, marginTop: 5 }} >{name}</Text>
      </View>
      <View style={{ flexDirection: "row" }}>
        <View style={{ width: "50%", marginRight: 5 }}>
        <TouchableOpacity ></TouchableOpacity>
          <TouchableOpacity onPress={()=>navigation.navigate('EditProfile')} style={{ borderWidth: 1, borderRadius: 10 }}>
            <Text  style={{ textAlign: "center" }}>Edit Profile</Text>
          </TouchableOpacity>
        
        </View>

        <View style={{ width: "50%" }}>
          <TouchableOpacity style={{ borderWidth: 1, borderRadius: 10 }}>
            <Text style={{ textAlign: "center" }}>Shared Profile</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
    </SafeAreaView>
    
    <TopTabPage/>
    
    </>
  );
};

export default Profile;

const styles = StyleSheet.create({});

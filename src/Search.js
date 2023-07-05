import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { FlatList, ScrollView, TextInput } from "react-native-gesture-handler";
import { AntDesign } from "@expo/vector-icons";
import { SafeAreaView } from "react-native-safe-area-context";
const searchPost = [
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

const Search = () => {

  const [SearchTerm, setsearchTerm] = useState("");
  const [searchedArray, setSearchedArray] = useState([]);

  // const CLearText = ()=>{
  //  setClear('')
  // }
  const searchFilterFunction = (text) => {
    // Check if searched text is not blank
    if (text) {
      // Inserted text is not blank
      // Filter the masterDataSource
      // Update FilteredDataSource
      const newData = searchPost.filter(function (item) {
        const itemData = item.RandomName
          ? item.RandomName.toUpperCase()
          : "".toUpperCase();
        const textData = text.toUpperCase();
        return itemData.indexOf(textData) > -1;
      });
      setSearchedArray(newData);
      setsearchTerm(text);
    } else {
      // Inserted text is blank
      // Update FilteredDataSource with masterDataSource
      setSearchedArray(searchPost);
      setsearchTerm(text);
    }
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
    <View style={{ flex: 1 }}>
      <View
        style={{
          borderWidth: 1,
          borderRadius: 20,
          height: 50,
          margin: 5,
          flexDirection: "row",
        }}
      >
        <AntDesign
          name="search1"
          size={30}
          color="black"
          style={{ top: 10, left: 5 }}
        />

        <TextInput
          placeholder="Search Name"
          style={{ textAlign: "center", width: "90%" }}
          onChangeText={(text) => searchFilterFunction(text)}
          value={SearchTerm}
        ></TextInput>
        <TouchableOpacity onPress={()=> {setsearchTerm('')}}>
        <AntDesign
          name="close"
          size={30}
          color="black"
          style={{ right: 25, top: 10 }}
        />
        </TouchableOpacity>
        
      </View>
      
      <FlatList
        data={SearchTerm.length == 0 ? searchPost : searchedArray}
        
        numColumns={3}
        renderItem={(item) => {
          return (
            <View style={{ margin: 2 }}>
              <Text>{item.item.RandomName}</Text>
              <Image
                source={item.item.photo}
                key={item.id}
                resizeMode="stretch"
                style={{ width: 135, height: 200 }}
              />
            </View>
          );
        }}
      />
    </View>
    </SafeAreaView>
  );
};

export default Search;

const styles = StyleSheet.create({});

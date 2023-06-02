import { StyleSheet, Text, View,TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from "react";
import { AntDesign } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Octicons } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";

const LikeArea = () => {
    const [click, setClick] = useState(true);
    const [Count,setCount] = useState(0);
  return (
    <><View
          style={{
              flexDirection: "row",
              justifyContent: "space-between",
              width: "100%",
          }}
      >
          <View
              style={{
                  flexDirection: "row",
                  margin: 2,
                  width: "30%",
                  justifyContent: "space-around",
                  alignSelf: "flex-start",
              }}
          >

              {click ? (
                  <Entypo
                      name="heart"
                      size={30}
                      color="black"
                      onPress={() => setClick(!click)}
                      onPressIn={() => setCount(Count + 1)} />
              ) : (
                  <Entypo
                      name="heart"
                      size={30}
                      color="red"
                      onPress={() => setClick(!click)} />
              )}

              <TouchableOpacity onPress={() => navigation.navigate('Comments')}>
                  <FontAwesome name="comment-o" size={30} color="black" />
              </TouchableOpacity>

              <TouchableOpacity onPress={() => navigation.navigate('SharePost')}>
                  <Entypo name="direction" size={30} color="black" />
              </TouchableOpacity>
          </View>
          <View style={{ margin: 5 }}>
              <TouchableOpacity onPress={() => navigation.navigate('SavePost')}>
                  <MaterialIcons name="save-alt" size={24} color="black" />
              </TouchableOpacity>
          </View>
      </View><View style={{ marginLeft: 10 }}>

              <Text style={{ fontWeight: "500" }}>{Count}Likes</Text>

              <Text style={{ color: "gray" }}>18 May 2023</Text>
          </View></>
  )
}

export default LikeArea

const styles = StyleSheet.create({})
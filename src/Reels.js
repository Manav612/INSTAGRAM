import { Dimensions, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Feather } from '@expo/vector-icons';
import ReelComponent from './ReelComponent';
const Reels = () => {
 
  const windowwidth = Dimensions.get('window').width
  const windowheight = Dimensions.get('window').height

  return (
    <View style={{backgroundColor:'white',width:windowwidth,height:windowheight,position:'relative',backgroundColor:'black'}}>
    <View style={{flexDirection:'row',justifyContent:'space-between',position:'absolute',top:0,right:0,left:0,zIndex:1,padding:10}}>
      <Text style={{color:'white',fontSize:25,fontWeight:500}}>Reels</Text>
      <Feather name="camera" size={30} color="white" />
      </View>
      <ReelComponent/>
    </View>
  )
}

export default Reels

const styles = StyleSheet.create({})
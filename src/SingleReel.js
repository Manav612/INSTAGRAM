import { Dimensions, StyleSheet, Text, View } from 'react-native'
import React, { useRef, useState } from 'react'
import { Video, ResizeMode } from 'expo-av';
import { TouchableOpacity } from 'react-native-gesture-handler';
// import { log } from 'react-native-reanimated';

const SingleReel = ({item,index,currentIndex}) => {
    const windowwidth = Dimensions.get('window').width;
    const windowheight = Dimensions.get('window').height;

    const videoRef = useRef(null)
    const [mute,setmute]=useState(true)
    const onBuffer = buffer =>{
        console.log('buffring',buffer);
    }
    const onError = error =>{
        console.log('error',error);
    }

  return (
    <View>
   
   <TouchableOpacity onPress={()=>setmute(!mute)} style={{width:windowwidth,height:windowheight,position:'relative'}}>

    <Video
        videoRef={videoRef}
        onBuffer={onBuffer}
        onError={onError}
        isLooping
        repeat={true}
        shouldPlay={true}
        resizeMode='cover'
        paused={false}
        source={item.video}
        isMuted={mute}
        style={{width: '100%', height: '100%'}}
    />
   
   </TouchableOpacity>

    </View>

  )
}

export default SingleReel

const styles = StyleSheet.create({})
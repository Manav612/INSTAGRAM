import { StyleSheet, Text, TouchableOpacity, TextInput,View,Button } from 'react-native'
import React, { useState } from 'react'



const EditProfile = ({navigation}) => {
    // const navigation =useNavigation
    const [editName,setEditName]=useState('')
   // console.log(editName)
  return (
    <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
         
            <TextInput
              placeholder="send a message"
              onChangeText={(text) => setEditName(text)}
              value={editName}
             
            />
            <TouchableOpacity     
            onPress={()=>{
                navigation.navigate('Profile1',{
                  pk:"Manav Shah",
                    })

                    }}
          
              >
                <Text>Send</Text>
              </TouchableOpacity>
              
     
        
    </View>
  )
}

export default EditProfile

const styles = StyleSheet.create({})
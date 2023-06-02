import {
  KeyboardAvoidingView,
  StatusBar,
  ScrollView,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import { TextInput } from "react-native-gesture-handler";
import { SafeAreaView } from "react-native-safe-area-context";
const Chat = () => {
  const [msg, setmsg] = useState("");
  const [send,setsend]=useState([]);

  const sendmsg = ()=>{
    setsend((olditem)=>{
      return[...olditem,msg]
    })
    setmsg('')
  }
  return (
    
    <SafeAreaView style={{ flex: 1 }}>
      <KeyboardAvoidingView
        //    behavior={Platform.OS === 'ios' ? 'padding' : null}
        style={{ flex: 1 }}
      >
        <StatusBar style="light" />
        <View style={{ flex: 1 }}>
         
            <Text
              style={{
                fontSize: 25,
                fontStyle: "italic",
                textAlign: "center",
                fontWeight: "600",
              }}
            >
              Chating
            </Text>

           <View style={{}}>
              {
                send.map((manav)=>{
                  return(
                  <Text>{manav}</Text>
                  )
                })
              }
           </View>
            
          <View
            style={{
              justifyContent: "center",
              alignItems: "center",
              borderWidth: 1,
              width: "80%",
              padding: 10,
              position: "absolute",
              backgroundColor: "yellow",
              bottom: 10,
              borderRadius: 20,
              margin: 5,
            }}
          >
            <TextInput
              placeholder="send a message"
              onChangeText={(text) => setmsg(text)}
              value={msg}
            />
            </View>
            <View style={{position:'absolute',bottom:30,right:30,}}>
            <TouchableOpacity onPress={sendmsg}>
              <Text>Send</Text>
              
            </TouchableOpacity>
          </View>   

         
          
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default Chat;

const styles = StyleSheet.create({});

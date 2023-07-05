// import {
//     ImageBackground,
//     ScrollView,
//     StyleSheet,
//     Text,
//     TextInput,
//     TouchableOpacity,
//     View,
//     KeyboardAvoidingView
//   } from "react-native";
//   import { AntDesign } from "@expo/vector-icons";
//   import { Entypo } from '@expo/vector-icons';
//   import React, { useState } from "react";
//   import { StatusBar } from "expo-status-bar";
//   import { SafeAreaView } from "react-native-safe-area-context";
//   import { Dimensions } from "react-native";
//   const windowWidth = Dimensions.get("window").width;
//   const windowHeight = Dimensions.get("window").height;
  
//   const SignUpPage = ({navigation}) => {

//     const [userName, setUserName] = useState();
//     const [email, setemail] = useState();
//     const [password, setpassword] = useState();
//     const [confirmPass, setConfirmpassword] = useState();
//     const [eye,seteye]=useState(true);
  
//     return (
//       <SafeAreaView style={styles.container}>
//       <KeyboardAvoidingView style={styles.container}>
//       <ScrollView style={styles.container}>
//         <StatusBar style="auto" backgroundColor="#fff" />
//         <ImageBackground
//           source={require("../assets/Vector.png")}
//           style={{ width: windowWidth, height: windowHeight / 3 }}
//           resizeMode="stretch"
//         >
//           <View
//             style={{
//               alignItems: "center",
//               justifyContent: "center",
//               top: 0,
//               bottom: 0,
//               left: 0,
//               right: 0,
//               position: "absolute",
//             }}
//           >
//             <Text
//               style={{ textAlign: "center", fontWeight: "bold", fontSize: 20 }}
//             >
//               SignUp
//             </Text>
//           </View>
//         </ImageBackground>
      
//         <View 
//          style={{
//          flex:1,
//          height:windowHeight/1.5,
//          width:windowWidth,
//             justifyContent: "center",
//             alignItems: "center",
//           }}
//           >   
//         <View style={{width:'80%',borderBottomWidth: 1}}>
//           <TextInput
//             style={styles.inputField}
//             value={userName}
//             onChangeText={(text) => setUserName(text)}
//             placeholder="UserName"
//           />
//        </View>
//         <View style={{width:'80%',borderBottomWidth: 1}}>
//           <TextInput
//             style={styles.inputField}
//             value={email}
//             onChangeText={(text) => setemail(text)}
//             placeholder="Enter Email"
//           />
//        </View>
//          <View style={{flexDirection:'row',borderBottomWidth: 1,width:'80%'}}>
//           <TextInput
//             secureTextEntry={eye}
//             style={styles.inputField}
//             value={password}
//             onChangeText={(text) => setpassword(text)}
//             placeholder="Enter Password"
//           />
//           <Text style={{top:20}}>
//            <TouchableOpacity  onPress={()=>seteye(!eye)}>
//            <Entypo name={eye?"eye":"eye-with-line"} size={24} color="black" />
  
//               </TouchableOpacity>
//               </Text>
             
//           </View>
//          <View style={{flexDirection:'row',borderBottomWidth: 1,width:'80%'}}>
//           <TextInput
//             secureTextEntry={eye}
//             style={styles.inputField}
//             value={confirmPass}
//             onChangeText={(text) => setConfirmpassword(text)}
//             placeholder="Confirm Password"
//           />
//           <Text style={{top:20}}>
//            <TouchableOpacity  onPress={()=>seteye(!eye)}>
//            <Entypo name={eye?"eye":"eye-with-line"} size={24} color="black" />
  
//               </TouchableOpacity>
//               </Text>
             
//           </View>
  
  
//           <View style={{ margin: 30,width:'70%' }}>
//             <TouchableOpacity
//               style={{
//                 borderWidth: 1,
//                 backgroundColor: "#56BFA2",
//                 width:'100%',
//                 height: 40,
//                 borderRadius: 5,
//                 justifyContent: "center",
//               }}
//               onPress={()=>navigation.navigate('Tabb')}
//             >
//               <Text style={{ textAlign: "center", fontWeight: "bold" }}>
//                 Register Now
//               </Text>
//             </TouchableOpacity>
//           </View>
          
//         </View>
      
//         </ScrollView>
      
        
//       </KeyboardAvoidingView>
//       </SafeAreaView>
//     );
//   };
  
//   export default SignUpPage;
  
//   const styles = StyleSheet.create({
//     container: {
//       flex: 1,
//       // justifyContent:'center',
//       // alignItems: 'center',
//       backgroundColor: "white",
//     },
//     inputField: {
//       backgroundColor: "white",
//       width: "80%",
//       margin: 10,
//       padding: 10,
//       height: 40,
//     },
//     signup: {
//       alignSelf:'center',    
//    bottom: 0,
//   position: "absolute",
    
  
//     },
//     logo: {
//       flexDirection: "row",
//       justifyContent: "space-between",
//       width: windowWidth / 2,
//       marginTop: 20,
//     },
//   });
  

import {
  ImageBackground,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  KeyboardAvoidingView
} from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { Entypo } from '@expo/vector-icons';
import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { SafeAreaView } from "react-native-safe-area-context";
import { Dimensions } from "react-native";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
// import { TextInput } from 'react-native-gesture-handler';
import { firebaseConfig } from "./firebaseConfig";
import { initializeApp } from 'firebase/app';
import LoginPage from "./LoginPage";



const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;
const SignUpPage = ({navigation}) => {
  const [userName, setUserName] = useState();
    const [email,setemail]=useState('');
    const [password,setpassword]=useState('');
    const [confirmPass, setConfirmpassword] = useState();
    const [eye,seteye]=useState(true);
    const [errormessage,setErrormessage]=useState('');
    // const load=()=>{

    // }

    // useEffect(()=>{
    //     createUserWithEmailAndPassword(auth, email, password,Confirmpassword)
    //       .then((userCredential) => {
             
    //         const user = userCredential.user;
            
    //       })
    //       .catch((error) => {
    //         const errorCode = error.code;
    //         const errorMessage = error.message;
    //         setErrormessage(errorMessage)
    //       });
    //     }, [load]);
       const app = initializeApp(firebaseConfig);
         const auth = getAuth(app);

    async function add(){
      if(email == '' || password == '') {
        errormessage('plz enter email')
}
    //  console.log('====>',email,password);
  try{
      await  createUserWithEmailAndPassword(auth,email,password);
      console.log('Emaillll');

      // navigation.navigate()
      // console.log('====>',email,password);
  }
  catch(error){
          // console.log(error);
          // setErrormessage(error.Message);
          const errorMessage = error.message;
          setErrormessage(errorMessage);
          
  }
  }

    
  return (
    // <SafeAreaView style={{flex:1,justifyContent:'center',alignItems:'center'}}>
    // <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
    //      <TextInput
    //         style={styles.inputField}
    //         value={email}
    //         onChangeText={(text) => setEmail(text)}
    //         placeholder="Enter Email"
    //       />
    //        <TextInput
    //         // secureTextEntry={eye}
    //         style={styles.inputField}
    //         value={password}
    //         onChangeText={(text) => setpassword(text)}
    //         placeholder="Enter Password"
    //       />
    //        {/* <TextInput
    //         // secureTextEntry={eye}
    //         style={styles.inputField}
    //         value={confirmpassword}
    //         onChangeText={(text) => setConfirmpassword(text)}
    //         placeholder="Enter Confirm Password"
    //       /> */}
    //       <Text>{errormessage}</Text>
    //       <Button title='SignUp' onPress={()=>add()} />
          
    // </View>
    // </SafeAreaView>

    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView style={styles.container}>
      <ScrollView style={styles.container}>
        <StatusBar style="auto" backgroundColor="#fff" />
        <ImageBackground
          source={require("../assets/Vector.png")}
          style={{ width: windowWidth, height: windowHeight / 3 }}
          resizeMode="stretch"
        >
          <View
            style={{
              alignItems: "center",
              justifyContent: "center",
              top: 0,
              bottom: 0,
              left: 0,
              right: 0,
              position: "absolute",
            }}
          >
            <Text
              style={{ textAlign: "center", fontWeight: "bold", fontSize: 20 }}
            >
              SignUp
            </Text>
          </View>
        </ImageBackground>
      
        <View 
         style={{
         flex:1,
         height:windowHeight/1.5,
         width:windowWidth,
            justifyContent: "center",
            alignItems: "center",
          }}
          >   
          <Text style={{color:'red'}}>{errormessage}</Text>
        <View style={{width:'80%',borderBottomWidth: 1}}>
          <TextInput
            style={styles.inputField}
            value={userName}
            onChangeText={(text) => setUserName(text)}
            placeholder="UserName"
          />
       </View>
        <View style={{width:'80%',borderBottomWidth: 1}}>
          <TextInput
            style={styles.inputField}
            value={email}
            onChangeText={(text) => setemail(text)}
            placeholder="Enter Email"
          />
       </View>
         <View style={{flexDirection:'row',borderBottomWidth: 1,width:'80%'}}>
          <TextInput
            secureTextEntry={eye}
            style={styles.inputField}
            value={password}
            onChangeText={(text) => setpassword(text)}
            placeholder="Enter Password"
          />
          <Text style={{top:20}}>
           <TouchableOpacity  onPress={()=>seteye(!eye)}>
           <Entypo name={eye?"eye":"eye-with-line"} size={24} color="black" />
  
              </TouchableOpacity>
              </Text>
             
          </View>
         <View style={{flexDirection:'row',borderBottomWidth: 1,width:'80%'}}>
          <TextInput
            secureTextEntry={eye}
            style={styles.inputField}
            value={confirmPass}
            onChangeText={(text) => setConfirmpassword(text)}
            placeholder="Confirm Password"
          />
          <Text style={{top:20}}>
           <TouchableOpacity  onPress={()=>seteye(!eye)}>
           <Entypo name={eye?"eye":"eye-with-line"} size={24} color="black" />
  
              </TouchableOpacity>
              </Text>
             
          </View>
  
  
          <View style={{ margin: 30,width:'70%' }}>
            <TouchableOpacity
              style={{
                borderWidth: 1,
                backgroundColor: "#56BFA2",
                width:'100%',
                height: 40,
                borderRadius: 5,
                justifyContent: "center",
              }}
              onPress={() => add()}
            >
              <Text style={{ textAlign: "center", fontWeight: "bold" }}>
                Register Now
              </Text>
            </TouchableOpacity>
          </View>
          
        </View>
      
        </ScrollView>
      
        
      </KeyboardAvoidingView>
      </SafeAreaView>
  )
}

export default SignUpPage

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent:'center',
    // alignItems: 'center',
    backgroundColor: "white",
  },
  inputField: {
    backgroundColor: "white",
    width: "80%",
    margin: 10,
    padding: 10,
    height: 40,
  },
  signup: {
    alignSelf:'center',    
 bottom: 0,
position: "absolute",
  

  },
  logo: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: windowWidth / 2,
    marginTop: 20,
  },
})
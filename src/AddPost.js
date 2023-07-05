// import { Camera, CameraType } from "expo-camera";
// import { useState } from "react";
// import { Button, StyleSheet, Text, TouchableOpacity, View, Image } from "react-native";

// export default function AddPost() {
//   const [type, setType] = useState(CameraType.back);
//   const [camera, setCamera] = useState(null);
//   const [image, setImage] = useState(null);
//   const [permission, requestPermission] = Camera.useCameraPermissions();
//   const takePicture = async () => {
//     if (camera) {
//       const data = await camera.takePictureAsync(null);
//       // console.log(data);
//       setImage(data.uri)
//     }
//   }
//   if (!permission) {
//     // Camera permissions are still loading
//     return <View />;
//   }

//   if (!permission.granted) {
//     // Camera permissions are not granted yet
//     return (
//       <View style={styles.container}>
//         <Text style={{ textAlign: "center" }}>
//           We need your permission to show the camera
//         </Text>
//         <Button onPress={requestPermission} title="grant permission" />
//       </View>
//     );
//   }

//   function toggleCameraType() {
//     setType((current) =>
//       current === CameraType.back ? CameraType.front : CameraType.back
//     );
//   }

//   return (
//     <View style={styles.container}>
//       <View style={styles.Cameracontainer}>
//         <Camera ref={ref => setCamera(ref)} style={styles.fixedRatio} type={type} ratio={'1:1'} />
//       </View>

      
//       <View style={{top:65}}>
//         {image && <Image source={{ uri: image }} style={{ height: 150, width: 150 }} />}
//       </View>
      


//       <View style={styles.buttonContainer}>
//         <TouchableOpacity style={styles.button} onPress={toggleCameraType}>
//           <Text style={styles.text}>Flip Camera</Text>
//         </TouchableOpacity>

//         <TouchableOpacity style={styles.button} onPress={() => takePicture()}>
//           <Text style={styles.text}>Take Picture</Text>
//         </TouchableOpacity>

//       </View>

//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: "center",
//   },
//   Cameracontainer: {
//     flex: 1,
//     flexDirection: 'row'
//   },
//   fixedRatio: {
//     flex: 1,
//     aspectRatio: 1
//   },
//   buttonContainer: {
//     flex: 1,
//     flexDirection: "row",
//     backgroundColor: "transparent",
//     margin: 64,
//   },
//   button: {
//     flex: 1,
//     alignSelf: "flex-end",
//     alignItems: "center",
//     color: 'red'
//   },
//   text: {
//     fontSize: 18,
//     fontWeight: "bold",
//     color: 'red'
//   },

// });


import { StyleSheet, Text, View, TouchableOpacity, SafeAreaView, Alert, Image, FlatList } from 'react-native';
import React, { useState, useEffect } from 'react';
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { getFirestore, collection, addDoc, getDocs } from "firebase/firestore";
import * as ImagePicker from 'expo-image-picker';
// import { app } from '../Config';

import { firebaseConfig } from "./firebaseConfig";
import { initializeApp } from 'firebase/app';
import { TextInput } from 'react-native-gesture-handler';

const storage = getStorage(app);
const db = getFirestore(app);
const app = initializeApp(firebaseConfig);
const AddPost = () => {
  // const [image, setImage] = useState(null);

  // const [photo, setPhoto] = useState('');
  const [data, setData] = useState([]);
  const [images, setImages] = useState([]);
const [uploading, setUploading] = useState(false);
  const [photoUrls, setPhotoUrls] = useState([]);
  const[name,setname]=useState('');
  const todoRef = collection(db, "manav");
  
  useEffect(() => {
    readData();
  }, []);

  // async function AddData() {
  //   if (photo) {
  //     const docRef = await addDoc(todoRef, {
  //       Picture: photo,
  //     });
  //     console.log("uploaded");
  //   }
  // }
  async function AddData() {
    if (photoUrls.length > 0) {
      const docRef = await addDoc(todoRef, {
        Pictures: photoUrls, // Change the field name to "Pictures"
        Name:name
      });
      console.log("uploaded",photoUrls);
    }
  }
  

  async function readData() {
    try {
      const querySnapshot = await getDocs(todoRef);
      const newData = querySnapshot.docs.map((doc) => {
        return {
          id: doc.id,
          Picture: doc.data().Pictures,
          Name:doc.data().Name,
        };
      });
      setData(newData);
      console.log(newData);
    } catch (error) {
      console.log('Error:', error);
    }
  }

  // const pickImage = async () => {
  //   let result = await ImagePicker.launchImageLibraryAsync({
  //     mediaTypes: ImagePicker.MediaTypeOptions.All,
  //     allowsEditing: true,
  //     aspect: [4, 3],
  //     quality: 1,
  //   });
  //   if (!result.cancelled) {
  //     const source = { uri: result.assets[0].uri };
  //     console.log(source);
  //     setImage(source);
  //   }
  // };

  // const pickImage = async () => {
  //   let result = await ImagePicker.launchImageLibraryAsync({
  //     mediaTypes: ImagePicker.MediaTypeOptions.Images,
  //     allowsEditing: true,
  //     aspect: [4, 3],
  //     quality: 1,
  //     allowsMultipleSelection: true, // Add this line
  //   });
  
  //   if (!result.canceled) {
  //     const selectedImages = result.assets.map((asset) => ({ uri: asset.uri }));
  //     setImages(selectedImages);
  //   }
  // };

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      aspect: [4, 3],
      quality: 1,
      allowsMultipleSelection: true,
    });
  
    if (!result.canceled) {
      const selectedImages = result.assets.map((asset) => ({ uri: asset.uri }));
      setImages(selectedImages);
    }
  };
  
  // 9664596331

  // const uploadImage = async () => {
  //   setUploading(true);
  //   const response = await fetch(image.uri);
  //   const blob = await response.blob();
  //   const filename = image.uri.substring(image.uri.lastIndexOf('/') + 1);
  //   const storageRef = ref(storage, 'images/' + filename);

  //   try {
  //     await uploadBytes(storageRef, blob);
  //     const downloadURL = await getDownloadURL(storageRef);
  //     console.log(downloadURL);
  //     setPhoto(downloadURL);
  //     console.log(photo);
  //   } catch (e) {
  //     console.log(e);
  //   }
  //   setUploading(false);
  //   Alert.alert('Photo uploaded!');
  //   setImage(null);
  // };

  const uploadImage = async () => {
    setUploading(true);
  
    try {
      const uploadPromises = images.map(async (image) => {
        const response = await fetch(image.uri);
        const blob = await response.blob();
        const filename = image.uri.substring(image.uri.lastIndexOf('/') + 1);
        const storageRef = ref(storage, 'images/' + filename);
  
        await uploadBytes(storageRef, blob);
        const downloadURL = await getDownloadURL(storageRef);
        return downloadURL;
      });
  
      const urls = await Promise.all(uploadPromises);
      setPhotoUrls(urls);
      console.log('asdffdasf0',urls)
    } catch (e) {
      console.log(e);
    }
  
    setUploading(false);
    Alert.alert('Photos uploaded!');
    setImages([]);
  };
  

  const renderItem = ({ item }) => {
    console.log('sfhbhfjbdf',item)
    return(
      <View style={styles.item}>
      {/* <Text>{item}</Text> */}
      <Image source={{ uri: item.Picture[0] }} style={styles.image} />
      <Text>{item.Name}</Text>
    </View>
    )
  }
 
  
  

  return (
    <SafeAreaView  style={styles.container}>
     
      <View>

      
        <TextInput
        onChangeText={(val)=>{setname(val)}}
         placeholder='Enter Your Name' style={{ height: 50, borderRadius: 5, borderWidth: 1, margin: 5, padding: 10,justifyContent: 'center',
    alignItems: 'center',}}/>
     

      <TouchableOpacity style={styles.button} onPress={pickImage}>
        <Text style={styles.buttonText}>Pick an image</Text>
      </TouchableOpacity>

        {/* {image && <Image source={{ uri: image.uri }} style={styles.previewImage} />} */}
        {images.length > 0 && (
  <FlatList
    data={images}
    renderItem={({ item }) => (

      <Image source={item} style={styles.previewImage} />
    )}
    horizontal
    keyExtractor={(item, index) => String(index)}
  />
)}
        <TouchableOpacity style={styles.button} onPress={uploadImage}>
          <Text style={styles.buttonText}>Upload Image</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button} onPress={AddData}>
          <Text style={styles.buttonText}>Click me to upload</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button} onPress={readData}>
          <Text style={styles.buttonText}>Click me to fetch data</Text>
        </TouchableOpacity>

        <FlatList
          data={data}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop:30
  },
  button: {
    height: 50,
    borderRadius: 5,
    borderWidth: 1,
    margin: 5,
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 16,
  },
  previewImage: {
    width: 300,
    height: 300,
    alignItems: 'center',
  },
  item: {
    alignItems: 'center',
    marginBottom: 10,
  },
  image: {
    width: 300,
    height: 300,
  },
});

export default AddPost;

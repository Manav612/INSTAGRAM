import {
    StyleSheet,
    Text,
    FlatList,
    Image,
    View,
    StatusBar,
    ScrollView,
    KeyboardAvoidingView,
    TouchableOpacity,
} from "react-native";
import LikeArea from "./LikeArea";

import { AntDesign } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";

import { SafeAreaView } from "react-native-safe-area-context";
import * as ImagePicker from "expo-image-picker";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import NavigationStack from "./NavigationStack";


const Profile = [
    {
        id: 1,
        name: "manav",
        img1: require("../assets/manav.png"),
    },
    {
        id: 2,
        name: "p2",
        img1: require("../assets/avatar1.jpg"),
    },
    {
        id: 3,
        name: "p3",
        img1: require("../assets/avatar2.jpg"),
    },
    {
        id: 4,
        name: "p4",
        img1: require("../assets/avatar3.jpg"),
    },
    {
        id: 5,
        name: "p5",
        img1: require("../assets/avatar4.jpg"),
    },
    {
        id: 6,
        name: "p2",
        img1: require("../assets/avatar1.jpg"),
    },
    {
        id: 7,
        name: "p3",
        img1: require("../assets/avatar2.jpg"),
    },
    {
        id: 8,
        name: "p4",
        img1: require("../assets/avatar3.jpg"),
    },
    {
        id: 9,
        name: "p5",
        img1: require("../assets/avatar4.jpg"),
    },
];
const Post = [
    {
        id: 1,
               
        img1: require("../assets/manav.png"),
    },
    {
        id: 2,

        img1: require("../assets/avatar1.jpg"),
    },
    {
        id: 3,

        img1: require("../assets/avatar2.jpg"),
    },
    {
        id: 4,

        img1: require("../assets/avatar3.jpg"),
    },
    {
        id: 5,

        img1: require("../assets/avatar4.jpg"),
    },
    {
        id: 6,

        img1: require("../assets/avatar1.jpg"),
    },
    {
        id: 7,

        img1: require("../assets/avatar2.jpg"),
    },
    {
        id: 8,

        img1: require("../assets/avatar3.jpg"),
    },
    {
        id: 9,
        img1: require("../assets/avatar4.jpg"),
    },
];
const Item = ({ title }) => (
    <View>
        {title.id == 1 ? (
            <>
            <Image
            source={title.img1}
            style={{ width: 60, height: 60, borderRadius: 50, margin: 10,borderWidth:2,borderColor:'blue' }}
        />
            <AntDesign
                name="plus"
                size={20}
                color="black"
                style={{ position: "absolute", right: 10, bottom: 20 }}
            />
            </>
        ) :  <Image
            source={title.img1}
            style={{ width: 60, height: 60, borderRadius: 50, margin: 10,borderWidth:2,borderColor:'red' }}
        />}

        <Text style={{ alignSelf: "center" }}>{title.name}</Text>
    </View>
);

const PostName = ({ title }) => (
    <View>

        <Image
            source={title.img1}
            style={{ width: 400, height: 400 }}
        />
        <Text style={{ alignSelf: "center" }}>{title.id}</Text>
    </View>
);

const InstaFeed = ({ navigation }) => {

    const pickImage = async () => {
        // No permissions request is necessary for launching the image library
        let result = await ImagePicker.launchCameraAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            allowsEditing: true,
            aspect: [4, 3],
            quality: 1,
        });

        console.log(result);


        // if (!result.canceled) {
        //   setImage(result.assets[0].uri);
        // }
    };
    return (
        <SafeAreaView>
            <KeyboardAvoidingView style={styles.container}>
                <ScrollView style={styles.container}>
                    <StatusBar style="auto" />
                    <View>
                        <View
                            style={{
                                justifyContent: "space-between",
                                flexDirection: "row",
                                margin: 10,
                            }}
                        >
                            <TouchableOpacity onPress={() => pickImage()}>
                                <AntDesign name="camerao" size={24} color="black" />
                            </TouchableOpacity>
                            <Text
                                style={{
                                    fontSize: 20,
                                    fontWeight: "bold",
                                    fontStyle: "italic",
                                }}
                            >
                                Instagram
                            </Text>
                            <TouchableOpacity onPress={() => navigation.navigate('Chat')}>
                                <Entypo name="direction" size={24} color="black" />
                            </TouchableOpacity>
                        </View>
                        <View>
                            <FlatList
                                horizontal
                                showsHorizontalScrollIndicator={false}
                                data={Profile}
                                renderItem={({ item }) => <Item title={item} />}
                                keyExtractor={(item) => item.id}
                            />
                        </View>
                        <FlatList

                            data={Profile}
                            renderItem={({ item, id }) => {
                                return (
                                    <View>
                                        <View style={{ flexDirection: "row" }}>
                                           
                                            <Image source={item.img1} key={id} resizeMode="stretch" style={{ width: 40,
                                                    height: 40,
                                                    borderRadius: 50,
                                                    margin: 10, }} />
                                            <Text style={{ alignSelf: "center" }}>{item.id}</Text>
                                        </View>
                                        <Text
                                            style={{ position: "absolute", right: 0, top: 10, margin: 10 }}
                                        >
                                            <TouchableOpacity onPress={() => navigation.navigate('ShareProfile')}>
                                                <Entypo name="dots-three-vertical" size={24} color="black" />
                                            </TouchableOpacity>
                                        </Text>
                                        <Image source={item.img1} key={id} resizeMode="stretch" style={{ width: 410, height: 410 }} />
                                        <LikeArea />
                                    </View>
                                )
                            }
                            }
                        />





                    </View>
                </ScrollView>
            </KeyboardAvoidingView>
        </SafeAreaView>
    );
};

export default InstaFeed;

const styles = StyleSheet.create({});

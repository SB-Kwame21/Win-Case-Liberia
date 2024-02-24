import React, { useEffect, useState } from 'react';
import { View, Text, Image, StyleSheet, TextInput, TouchableOpacity, Pressable } from 'react-native';
import { AntDesign, MaterialIcons } from '@expo/vector-icons';
import * as ImagePicker from 'expo-image-picker';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Color from '../Config/Color';

const ProfileScreen = ({ navigation }) => {
    const [currentUserData, setCurrentUserData] = useState([]);
    const [image, setImage] = useState(null);

    const handleLogout = () => {
        navigation.reset({
            index: 0,
            routes: [{ name: 'SignIn' }]
        })
    };

    // Getting Image from Gallery
    const pickImage = async () => {

        // No permissions request is necessary for launching the image library
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            allowsEditing: true,
            aspect: [4, 3],
            quality: 1,
        });

        console.log(result);

        if (!result.canceled) {
            setImage(result.assets[0]?.uri);
        }
    };

    useEffect(() => {
        const getCurrentUser = async () => {
            try {
                // const fullName = await AsyncStorage.getItem("fullName")
                const userName = await AsyncStorage.getItem("userName")
                // const email = await AsyncStorage.getItem("email")              
                // const phone = await AsyncStorage.getItem("phone")
                console.log(userName)
                setCurrentUserData([userName])

            } catch (error) {
                // console.log(error.response)
            }
        }

        getCurrentUser();

    }, [])


    return (
        <View style={styles.container}>
            <View style={styles.imageBox} >
            <View style={styles.navContainer}>
         <AntDesign name="left" size={24} color={Color.white} onPress={() => navigation.navigate('Home')}/>
         <Text style={styles.pointHome}>Back</Text>
         </View>
                <Pressable onPress={pickImage}>
                    {image ? (
                        <Image
                            source={{ uri: image }}
                            style={styles.profileImage}
                        />) : (
                        <Image
                            source={require('../assets/user.png')}
                            style={styles.profileImage}
                            resizeMode="cover"
                        />
                    )}
                </Pressable>

                <Text style={styles.label}>{`${currentUserData[0]}`}</Text>
                {/* <Text style={styles.label}>{`${currentUserData[0]}`}</Text> */}
            </View>

            <View style={styles.profileOption}>
                <TouchableOpacity
                    style={styles.option}
                    onPress={() => navigation.navigate('Edit Profile', { userData: currentUserData })}
                >
                    <AntDesign name="user" size={24} color="black" />
                    <Text style={styles.optionLabel}>Edit Profile</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={styles.option}
                    onPress={handleLogout}
                >
                    <MaterialIcons name="logout" size={24} color="black" />
                    <Text style={styles.optionLabel}>Logout</Text>
                </TouchableOpacity>

            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    imageBox: {
        backgroundColor: Color.primary,
        alignItems: "center",
        justifyContent: 'center',
        padding: 15,
        borderBottomRightRadius: 20,
        borderBottomLeftRadius: 20,
        height: '45%'
    },
    navContainer: {
        // backgroundColor: '#fff',
        width: '100%',
        height: 50,
        alignItems: 'center',
        flexDirection: 'row',
        marginBottom: 125,
        },
   
        pointHome: {
        fontSize: 18,
        color : Color.white,
        marginLeft: 10,
        },
    label: {
        fontSize: 16,
        fontWeight: 'bold',
        marginBottom: 10,
        color: '#fff'
    },
    profileImage: {
        width: 100,
        height: 100,
        borderRadius: 75,
        marginBottom: 20,
    },
    profileOption: {
        paddingTop: 50,
        paddingHorizontal: 30,
        gap: 20
    },

    option: {
        flexDirection: 'row',
        alignItems: 'center',
        borderRadius: 10,
        backgroundColor: '#eee',
        padding: 15,
        // marginTop: 20,
        gap: 15
    },
    inputContainer: {
        marginBottom: 25,
    },

    value: {
        // marginBottom: 15,
    },
    input: {
        height: 40,
        width: '100%',
        borderColor: '#EEEEEE', // Input border color
        borderBottomWidth: 2,
    },
});

export default ProfileScreen;

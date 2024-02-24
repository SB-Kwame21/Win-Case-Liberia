import React, { useState, useEffect } from 'react';
import { View, Text, Image, StyleSheet, TextInput, TouchableOpacity, Pressable, Alert } from 'react-native';
import { AntDesign, MaterialIcons } from '@expo/vector-icons';
import * as ImagePicker from 'expo-image-picker';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Color from '../Config/Color';
import axios from 'axios';

const EditProfileScreen = ({ navigation }) => {
    const [userData, setUserData] = useState({
        userName: "",
        email: "",
        phone: ""
    });
    const [image, setImage] = useState(null);

    useEffect(() => {
        const getUserData = async () => {
            try {
                const userName = await AsyncStorage.getItem("userName");
                const email = await AsyncStorage.getItem("email");
                const phone = await AsyncStorage.getItem("phone");
                setUserData({ userName, email, phone });
            } catch (error) {
                console.log(error);
            }
        };
        getUserData();
    }, []);

    const pickImage = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            allowsEditing: true,
            aspect: [4, 3],
            quality: 1,
        });

        if (!result.canceled) {
            setImage(result.uri);
        }
    };
    
    
    const handleUpdateProfile = async () => {
        try {
            // Update profile logic here (e.g., make API call)
            // For demonstration, this example uses Axios
            axios.put(`${URL}/update-profile`, {
                userName: userData.userName,
                email: userData.email,
                phone: userData.phone,
                // Other fields to update if necessary
            });

            // Handle successful update
            Alert.alert('Success', 'Profile updated successfully');
            // goBack
            navigation.navigate('Profile'); // Navigate back to profile screen
        } catch (error) {
            // Handle error
            console.error('Error updating profile:', error);
            Alert.alert('Error', 'Failed to update profile');
        }
    };

    return (
        <View style={styles.container}>
                <View style={styles.navContainer}>
         <AntDesign name="left" size={24} color={Color.dark} onPress={() => navigation.navigate('Home')}/>
         <Text style={styles.pointHome}>Back</Text>
         </View>
            <TouchableOpacity style={styles.imageContainer} onPress={pickImage}>
                {image ? (
                    <Image source={{ uri: image }} style={styles.profileImage} />
                ) : (
                    <Image source={require('../assets/user.png')} style={styles.profileImage} resizeMode="cover" />
                )}
            </TouchableOpacity>

            <TextInput
                style={styles.input}
                placeholder="Username"
                value={userData.userName}
                onChangeText={text => setUserData({ ...userData, userName: text })}
            />
            <TextInput
                style={styles.input}
                placeholder="Email"
                value={userData.email}
                onChangeText={text => setUserData({ ...userData, email: text })}
            />
            <TextInput
                style={styles.input}
                placeholder="Phone"
                value={userData.phone}
                onChangeText={text => setUserData({ ...userData, phone: text })}
            />

            <TouchableOpacity style={styles.updateButton} onPress={handleUpdateProfile}>
                <Text style={styles.updateButtonText}>Update Profile</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        // justifyContent: 'center',
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
        color : Color.dark,
        marginLeft: 10,
        },
    imageContainer: {
        marginBottom: 20,
    },
    profileImage: {
        width: 100,
        height: 100,
        borderRadius: 50,
    },
    input: {
        width: '80%',
        height: 40,
        borderWidth: 1,
        borderColor: 'gray',
        borderRadius: 5,
        marginBottom: 20,
        paddingHorizontal: 10,
    },
    updateButton: {
        backgroundColor: Color.primary,
        width: '80%',
        height: 40,
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center',
    },
    updateButtonText: {
        color: 'white',
        fontSize: 16,
    },
});

export default EditProfileScreen;



import React, { useState } from 'react';
import {View, Text, ImageBackground, StyleSheet, TouchableOpacity, ScrollView, StatusBar, 
    TextInput, Alert} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { URL } from './Constants';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';

import Color from '../Config/Color';

function LawyerSignIn({ navigation }) {
    const [data, setData] = useState({
        userName: "",
        password: "",
    })

    const handleSignIn = () => {
        // Perform sign-in logic here

        // validate input
        if (!data.userName || !data.password) {
            Alert.alert(
                'Missing field', 'Email and Password are required'
            ), [{ text: 'Okay' }];

            return;
        };

        // Make a request to your API for user login
        axios.post(`${URL}/login`, {
            username: data.userName,
            password: data.password

        }, {
            headers: { 'Content-Type': 'application/json' }
        }).then((response) => {
            console.log('Response!', response.data)

            // Get Acess, Refresh Token, id
            const { access_token, refresh_token, id, username } = response.data;

            // Save the tokens to AsyncStorage for future requests
            AsyncStorage.setItem('accessToken', access_token);
            AsyncStorage.setItem('refreshToken', refresh_token);
            AsyncStorage.setItem('UserId', String(id));
            AsyncStorage.setItem('userName', username);

            // Navigate to the authenticated
            navigation.navigate('Dashboard')

        }).catch((err) => {
            // Handle login failure
            console.log('Login failed', err.response);

            // Display an error message to the user
            Alert.alert('Login Failed', 'Invalid username or password.');

        });
    };


    return (
        <ImageBackground
        style={styles.background}
        source={require("../assets/back.jpg")} 
        resizeMode="cover"
        >
            <View style= {styles.backgroundOpacity}>
         
  
            <SafeAreaView
            SafeAreaView showsVerticalScrollIndicator={false}
            style={styles.container}
        >
  
            <Text style={styles.signInText}>WinCase<Text style={{color:Color.primary}}>Lib</Text></Text>
  
            <View style={styles.form}>
             <TextInput
                 style={styles.input}
                 placeholder="Username"
                 placeholderTextColor={Color.white}
                 value={data.userName}
                 onChangeText={(val) => setData({...data, userName: val})}
                />
  
                <TextInput
                 style={styles.input}
                 placeholder="password"
                 placeholderTextColor={Color.white}
                 value={data.password}
                 onChangeText={(val) => setData({...data, password: val})}
                />
                <TouchableOpacity style={styles.addButton} onPress={handleSignIn}>
                  <Text style={styles.buttonText}>Log In</Text>
                </TouchableOpacity>
            </View>
  
            <View style={styles.option}>
                <TouchableOpacity>
                    <Text style={styles.optionText} onPress={() => navigation.navigate('LawyerSignUp')}>Create Account</Text>
                </TouchableOpacity>
  
                <TouchableOpacity>
                    <Text style={styles.optionText} onPress={() => navigation.navigate('UpdateLawyerPassword')} >Forget Password?</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
  
     
            </View>
         <StatusBar backgroundColor={Color.primary} barStyle="light-content" />
        </ImageBackground>
       );
     }
  
const styles = StyleSheet.create({
    background: {
        flex: 1,
        width: '100%',
        height: '100%',
       
    },
    navContainer: {
    width: '100%',
    height: 50,
    alignItems: 'center',
    flexDirection: 'row',
    margin: 3,
    },
    
    
    
    backgroundOpacity: {
       width: '100%',
        height: '100%',
        backgroundColor: Color.secondary,
       
    },
    
    container: {
       flex: 1,
       justifyContent: 'center',
       padding: 10,  
       paddingHorizontal: 30,  
    },
    signInText: {
       fontSize: 30,
       fontWeight: 'bold',
       color: Color.white, 
       marginBottom: 30,
       alignSelf: "center",
       color: Color.white,
    
    },
    form: {
       justifyContent: "space-between",
       alignContent: "center",
    
    },
    input: {
       height: 40,
       width: '100%',
       borderColor: Color.primary, 
       borderWidth: 1,
       borderRadius: 5,
       marginTop: 15,
       paddingHorizontal: 10,
       color: Color.white,
    
    },
    
    option: {
       flexDirection: 'row',
       justifyContent: "space-between",
    },
    
    optionText: {
       color: Color.white,
    },
    
    addButton: {
       backgroundColor: Color.primary,
       padding: 13,  
       marginTop: 30,
       width: '100%',
       alignSelf: 'center',
       marginBottom: 20,
       borderRadius: 5,
    
    },
    buttonText: {
       color: Color.white,
       fontWeight: 'bold',
       textAlign: 'center',
    },
    
    button: {
       borderRadius: 10, 
       borderWidth: 2,              
       // borderColor: '#3498db', 
       padding: 10, 
    },
    
    });

export default LawyerSignIn;



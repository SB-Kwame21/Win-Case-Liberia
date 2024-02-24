import React, { useState } from 'react';
import {View, Text, ImageBackground, SafeAreaView, StyleSheet, TouchableOpacity, ScrollView, StatusBar, 
  TextInput, Alert} from 'react-native';
  import axios from 'axios';
import { URL } from './Constants';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Color from '../Config/Color';


const LawfirmSignUp = function ({ navigation }) {
    const [data, setData] = useState({
        userName: "",
        email: "",
        phone: "",
        password: "",
        confirmPasword: "",
    })

    data.userName
    const handleSignUp = () => {
        // Validate Required Field | ensures that all fields are required to prevent errors
        if (
            !data.userName ||
            !data.email ||
            !data.phone ||
            !data.password
        ) {
            Alert.alert('Missing fields', 'You have some missing fields to fill'),
                [{ text: 'Okay' }];

            return;
        };

        // Check for password match
        if (data.password !== data.confirmPasword) {
            Alert.alert(
                'Password Mismatch', 'Password and Comfirm Password did not match',
                [{ text: 'Okay' }]
            );
            return;
        };

        // Make axios request to API only if the above condition is meet
        axios.post(`${URL}/register`,
            {
                username: data.userName,
                email: data.email,
                address: data.address,
                phone: data.phone,
                password: data.password,
            }, {
            headers: { 'Content-Type': 'application/json' }
        }
        ).then((response) => {
            console.log('Response!', response.data)

            const jsonValue = JSON.stringify(response.data)
            console.log('value', jsonValue)
            AsyncStorage.setItem('userData', jsonValue)



            // Alert Message
            Alert.alert(
                'Account Created Succefully', 'read carefully, Lets Negociate!!',
                [{ text: 'Okay' }]
            )

            // Navigate to Sign In screen
            navigation.navigate('Negotiation')

        }).catch((err) => {
            console.log('Error!', err.response.data)

            // Handle error cases
            if (err.response && err.response.data && err.response.data.message) {
                Alert.alert(
                    'Registration Error', err.response.data.message,
                    [{ text: 'Okay' }]
                )
            }
        });

    };




  return (
        <ImageBackground
        style={styles.background}
        source={require('../assets/back.jpg')}
        resizeMode="cover"
      >
        <View style={styles.backgroundOpacity}>
            <ScrollView vertical={true}  showsVerticalScrollIndicator={false}>
          <SafeAreaView style={styles.container}>
            <Text style={styles.signUpText}>Sign Up</Text>
              <View style={styles.form}>
        
              <TextInput
                 style={styles.input}
                 placeholder="username"
                 placeholderTextColor={Color.white}
                 value={data.userName}
                 onChangeText={(val) => setData({...data, userName: val})}
                />
               
               <TextInput
                 style={styles.input}
                 placeholder="email"
                 placeholderTextColor={Color.white}
                 value={data.email}
                 onChangeText={(val) => setData({...data, email: val})}
                />

                <TextInput
                 style={styles.input}
                 placeholder="phone"
                 placeholderTextColor={Color.white}
                 value={data.phone}
                 onChangeText={(val) => setData({...data, phone: val})}
                />
  
                <TextInput
                 style={styles.input}
                 placeholder="password"
                 placeholderTextColor={Color.white}
                 value={data.password}
                 onChangeText={(val) => setData({...data, password: val})}
                />
    
                <TextInput
                 style={styles.input}
                 placeholder="cofirm password"
                 placeholderTextColor={Color.white}
                 value={data.confirmPasword}
                 onChangeText={(val) => setData({...data, confirmPasword: val})}
                />
                <TouchableOpacity style={styles.addButton} onPress={handleSignUp}>
                  <Text style={styles.buttonText}>Create Account</Text>
                </TouchableOpacity>
              </View>
         
          </SafeAreaView>
          </ScrollView>
        </View>
        <StatusBar backgroundColor={Color.primary} barStyle="light-content" />
      </ImageBackground>
  )
};

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
       padding: 10,  
       paddingHorizontal: 30,  
       
    },
    signUpText: {
       fontSize: 20,
       fontWeight: 'bold',
       color: 'white', 
       marginBottom: 20,
       marginTop: 100,
       alignSelf: "center",
       color: Color.white,
    
    },



    form: {
      width: '100%',
      height: '100%',
      alignItems: "center",
      marginTop: 40,
   },
  
   scrollContainer:{
    width: '100%',
    height: '100%',
   },
  
   input: {
      height: 40,
      width: '80%',
      borderColor: Color.primary, 
      borderWidth: 1,
      borderRadius: 5,
      marginTop: 15,
      paddingHorizontal: 10,
      color: Color.white,
   
   },
   
    
    // inputPicker: {
    //    height: 40,
    //    width: '100%',
    //    borderColor: Color.primary,
    //    borderWidth: 1,
    //    borderRadius: 5,
    //    marginTop: 15,
    //    paddingHorizontal: 10,
    //    color: Color.white,
    // },
    
    optionText: {
       color: Color.white,
    },
    
    addButton: {
       backgroundColor: Color.primary,
       padding: 13,  
       marginTop: 30,
       width: '80%',
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
       padding: 10, 
    },
    
});

export default LawfirmSignUp;
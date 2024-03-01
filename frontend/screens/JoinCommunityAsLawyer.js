// AddTaskScreen.js
import axios from 'axios';
import React, { useState } from 'react';
import { View,
         Text, 
         TextInput, 
         StyleSheet, 
         TouchableOpacity, 
         ScrollView, 
         Alert, 
         TouchableWithoutFeedback, 
         Keyboard, 
         KeyboardAvoidingView,
         Image,
         Platform,

         } from 'react-native';
// import DatePicker from 'react-native-modern-datepicker';
import { RadioButton } from 'react-native-paper';
import { URL } from './Constants';
import AsyncStorage from '@react-native-async-storage/async-storage';
import * as ImagePicker from 'expo-image-picker';
import Color from '../Config/Color';
import { FontAwesome } from '@expo/vector-icons';


// Convert Date To Backend Format

const JoinCommunityAsLawyer = ({ navigation }) => {
    const [fullName, setFullName] = useState('');
    const [gender, setGender] = useState('None');
    const [address, setAddress] = useState('');
    const [city, setCity] = useState('');
    const [country, setCountry] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');
    const [linkedIn, setLinkedIn] = useState('');
    const [website, setWebsite] = useState('');
    const [education, setEducation] = useState('');
    const [barLicenseNumber, setBarLicenseNumber] = useState('');
    const [practiceArea, setPraticeArea] = useState('');
    const [language, setLanguage] = useState('');
    const [price, setPrice] = useState('');
    const [image, setImage] = useState(null);


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
        setImage(result.assets[0].uri);
      }
    };

    const handleJoinCommunity = async () => {

        try {
            // Getting User ID from AsynStorage
            const id = await AsyncStorage.getItem('signUpUserId');
            console.log('user', id);

            if (
                !fullName ||
                !gender ||
                !address || 
                !city || 
                !country ||
                !phone ||
                !email||
                !linkedIn ||
                !website ||
                !education ||
                !barLicenseNumber ||
                !practiceArea ||
                !language||
                !price ||
                !image
                
                ) {
                Alert.alert(
                    'Missing field', 'You have some missing fields to fill'
                ), [{ text: 'Okay' }];
                return;
            }

            const response = await axios.post(`${URL}/create-lawyer`, {
                fullname: fullName,
                gender: gender,
                address: address,
                city: city,
                country: country,
                phone: phone,
                email: email,
                linkedIn: linkedIn,
                website: website,
                education: education,
                barLicenseNumber: barLicenseNumber,
                practiceArea: practiceArea,
                language: language,
                price: price,
                image: image,
                user_id: id
            }, {
                headers: { 'Content-Type': 'application/json' }
            });

            console.log('Success:', response.data);

            // Alert Message
            Alert.alert(
                'Created', 'You have Successfully',
                [{ text: 'Okay' }]
            );

            navigation.navigate('Dashboard')

        } catch (error) {
            console.log('Error:', error);
        }
    };

    return (
        // <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <KeyboardAvoidingView
                style={{ flex: 1 }}
                behavior={Platform.OS === "ios" ? "padding" : "height"}
            >
                <ScrollView
                    style={styles.container}
                    showsVerticalScrollIndicator={false}
                >
                    <View style={{ paddingBottom: 130 }}>
                        <TextInput
                            style={styles.input}
                            placeholder="Full Name"
                            value={fullName}
                            onChangeText={(text) => setFullName(text)}
                        />

            <Text style={styles.DateStyle}>Gender</Text>

            <RadioButton.Group onValueChange={(value) => setGender(value)} value={gender}>
            <View style={styles.radioGroup}>
           <View style={styles.radioItem}>
            <RadioButton value="None" />
            <Text style={styles.radioLabel}>Male</Text>
            </View>

            <View style={styles.radioItem}>
            <RadioButton value="High" />
            <Text style={styles.radioLabel}>Female</Text>
           </View>
        </View>
      </RadioButton.Group>

  
                        <TextInput
                            style={styles.input}
                            placeholder="Address"
                            value={address}
                            onChangeText={(text) => setAddress(text)}
                        />
                           <TextInput
                            style={styles.input}
                            placeholder="City"
                            value={city}
                            onChangeText={(text) => setCity(text)}
                        />

    
                           <TextInput
                            style={styles.input}
                            placeholder="country"
                            value={country}
                            onChangeText={(text) => setCountry(text)}
                        />

                      <TextInput
                            style={styles.input}
                            placeholder="Phone"
                            value={phone}
                            onChangeText={(text) => setPhone(text)}
                        />

                      <TextInput
                            style={styles.input}
                            placeholder="Email"
                            value={email}
                            onChangeText={(text) => setEmail(text)}
                        />
                      <TextInput
                            style={styles.input}
                            placeholder="LinkedIn Profile"
                            value={linkedIn}
                            onChangeText={(text) => setLinkedIn(text)}
                        />
                      <TextInput
                            style={styles.input}
                            placeholder="Website"
                            value={website}
                            onChangeText={(text) => setWebsite(text)}
                        />
                      <TextInput
                            style={styles.input}
                            placeholder="Education"
                            value={education}
                            onChangeText={(text) => setEducation(text)}
                        />
                      <TextInput
                            style={styles.input}
                            placeholder="Bar License Number"
                            value={barLicenseNumber}
                            onChangeText={(text) => setBarLicenseNumber(text)}
                        />
                      <TextInput
                            style={styles.input}
                            placeholder="Practice Area"
                            value={practiceArea}
                            onChangeText={(text) => setPraticeArea(text)}
                        />
                      <TextInput
                            style={styles.input}
                            placeholder="Language Speaks"
                            value={language}
                            onChangeText={(text) => setLanguage(text)}
                        />
                      <TextInput
                            style={styles.input}
                            placeholder="Cost Price"
                            value={price}
                            onChangeText={(text) => setPrice(text)}
                        />

<View style={styles.cemera}>
<Text style={styles.DateStyle}>Select Professional Image below</Text>
        <FontAwesome name="image" size={100} color="#eee" onPress={pickImage} />
      </View>
      {image && <Image source={{ uri: image }} style={{ width: 200, height: 200 }} />}
     
                        <TouchableOpacity style={styles.addButton}
                            onPress={() => handleJoinCommunity()}
                        >
                            <Text style={styles.buttonText}>Join</Text>
                        </TouchableOpacity>

                    </View>
                </ScrollView>
            </KeyboardAvoidingView>
        // </TouchableWithoutFeedback>


    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
        backgroundColor: '#fff',
        paddingLeft: 35,
        paddingRight: 35,
        textAlign: 'center',
        paddingTop: 50,
        paddingBottom: 250,
    },
    header: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 16,
    },
    input: {
        height: 40,
        borderColor: '#eee',
        borderWidth: 1,
        marginBottom: 20,
        padding: 10,
        paddingHorizontal: 10,
        backgroundColor: "#eee",
        borderRadius: 5,
        gap: 25,
    
    },
    DateStyle: {
        backgroundColor: "#eee",
        borderRadius: 5,
        // marginBottom: 20,
        padding: 10,
    },
    radioGroup: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 12,
        marginTop: 20,
    },
    radioItem: {
        flexDirection: 'row',
        alignItems: 'center',
        marginRight: 50,
    },
    radioLabel: {
        marginLeft: 8,
        fontSize: 16,
        color: '#333',
    },

    addButton: {
        backgroundColor: Color.primary,
        padding: 13,  // All sides are 10
        paddingHorizontal: 20,  // Left and right are 20
        borderRadius: 15,
        marginTop: 20,
        width: '100%',
        alignSelf: 'center'
    },
    buttonText: {
        color: 'white',
        textAlign: 'center',
    },

    button: {
        borderRadius: 10, // Set the border radius
        borderWidth: 2, // Set the border width
        borderColor: '#3498db', // Set the border color to blue
        padding: 10, // Add some padding for better visual appearance
    },
});

export default JoinCommunityAsLawyer;

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
// import { RadioButton } from 'react-native-paper';
import { URL } from './Constants';
import AsyncStorage from '@react-native-async-storage/async-storage';
import * as ImagePicker from 'expo-image-picker';
import Color from '../Config/Color';
import { FontAwesome } from '@expo/vector-icons';


function JoinCommunityAsLawfirm({navigation}) {
    const [lawfirmName, setLawfirmName] = useState('');
    const [businessAddress, setBusinessAddress] = useState('');
    const [city, setCity] = useState('');
    const [country, setCountry] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');
    const [website, setWebsite] = useState('');
    const [practiceArea, setPracticeArea] = useState('');
    // const [yearsOfPractice, setYearsOFPractice] = useState('');
    const [barAssociationsMembership, setBarAssociationsMembership] = useState('');
    const [language, setLanguage] = useState('');
    const [description, setDescription] = useState('');
    const [logoImage, setLogoImage] = useState(null);


;


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
        setLogoImage(result.assets[0].uri);
      }
    };




    // const [description, setDescription] = useState('');
    // const [priority, setPriority] = useState('None');


    const handleJoinCommunity = async () => {

        try {
            // Getting User ID from AsynStorage
            const id = await AsyncStorage.getItem('signUpUserId');
            console.log('user', id);

            if (
                !lawfirmName ||
                !businessAddress ||
                !city || 
                !country ||
                !phone ||
                !website ||
                !practiceArea ||
                !barAssociationsMembership||
                !language||
                !description||
                !logoImage   
                ) {
                Alert.alert(
                    'Missing field', 'You have some missing fields to fill'
                ), [{ text: 'Okay' }];
                return;
            }

            const response = await axios.post(`${URL}/create-lawfirm`, {
                lawfirmName: lawfirmName,
                businessAddress: businessAddress,
                city: city,
                country: country,
                phone: phone,
                email: email,
                website: website,
                practiceArea: practiceArea,   
                barAssociationsMembership: barAssociationsMembership,
                language: language,
                description: description,
                logoImage: logoImage,
                user_id: id
            }, {
                headers: { 'Content-Type': 'application/json' }
            });

            console.log('Success:', response.data);

            // Alert Message
            Alert.alert(
                'Created', 'You have Successfully Join Law Firm Community',
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
                            placeholder="Law Firm Name"
                            value={lawfirmName}
                            onChangeText={(text) => setLawfirmName(text)}
                        />

                    <TextInput
                            style={styles.input}
                            placeholder="Business Address"
                            value={businessAddress}
                            onChangeText={(text) => setBusinessAddress(text)}
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
                            placeholder="Website"
                            value={website}
                            onChangeText={(text) => setWebsite(text)}
                        />

                    <TextInput
                            style={styles.input}
                            placeholder="Practice Area"
                            value={practiceArea}
                            onChangeText={(text) => setPracticeArea(text)}
                        />


                    <TextInput
                            style={styles.input}
                            placeholder="Bar Associations Membership"
                            value={barAssociationsMembership}
                            onChangeText={(text) => setBarAssociationsMembership(text)}
                        />

                    <TextInput
                            style={styles.input}
                            placeholder="Language Speaks"
                            value={language}
                            onChangeText={(text) => setLanguage(text)}
                        />
                          <TextInput
                            style={{ ...styles.input, height: 80, }}
                            placeholder="Description"
                            multiline
                            numberOfLines={4}

                            value={description}
                            onChangeText={(text) => setDescription(text)}

                        />

<View style={styles.cemera}>
<Text style={styles.DateStyle}>Select company logo below</Text>
        <FontAwesome name="image" size={100} color="#eee" onPress={pickImage} />
      </View>
      {logoImage && <Image source={{ uri: logoImage }} style={{ width: 200, height: 200 }} />}
     
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
        paddingBottom: 200,
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


export default JoinCommunityAsLawfirm;
import axios from 'axios';
import React, { useState } from 'react';
import { 
        View, 
        Text, 
        TextInput, 
        StyleSheet, 
        TouchableOpacity, 
        ScrollView, Alert, 
        TouchableWithoutFeedback, 
        Keyboard, 
        KeyboardAvoidingView,
        Platform } from 'react-native';
import DatePicker from 'react-native-modern-datepicker';
import { RadioButton } from 'react-native-paper';
import { URL } from './Constants';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Color from '../Config/Color';

// Convert Date To Backend Format
const converDateToBackendFormat = (dataString) => {
    const [year, month, day] = dataString.split('/');
    return `${year}-${month}-${day}`;
}

const AppointmentBooking = ({navigation}) => {
    const [fullName, setFullName] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [email, setEmail] = useState('');
    const [service, setService] = useState('None');
    const [appointmentDate, setAppointmentDate] = useState('');
    const [description, setDescription] = useState('');
    const [preferredAttorney, setPreferredAttorney] = useState('');
    const [preferredLawfirm, setPreferredLawfirm] = useState('');
    const [communicationPreferences, setCommunicationPreferences] = useState('None');
    const [appointmentTime, setAppointmentTime] = useState('');


    // const [priority, setPriority] = useState('None');
 
    const handleAppointment = async () => {

        try {
            // Getting User ID from AsynStorage
            const userId = await AsyncStorage.getItem('UserId');
            console.log('user', userId);

            if (
                !fullName || 
                !phoneNumber || 
                !email || 
                !service || 
                !appointmentDate || 
                !description || 
                !preferredAttorney || 
                !preferredLawfirm || 
                !communicationPreferences|| 
                !appointmentTime 
               ) {
                Alert.alert(
                    'Missing field', 'You have some missing fields to fill'
                ), [{ text: 'Okay' }];
                return;
            }

            const response = await axios.post(`${URL}/create-appointment`, {
                fullName: fullName,
                phoneNumber: phoneNumber,
                email: email,
                service: service,
                appointmentDate: converDateToBackendFormat(appointmentDate),
                description: description,
                preferredAttorney: preferredAttorney,
                preferredLawfirm: preferredLawfirm,
                communicationPreferences: communicationPreferences,
                appointmentTime: appointmentTime,
                user_id: userId
            }, {
                headers: { 'Content-Type': 'application/json' }
            });

            console.log('Success:', response.data);

            // Alert Message
            Alert.alert(
                'Created', 'Appointment Created Successfully',
                [{ text: 'Okay' }]
            );

            navigation.navigate('Booked')

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

                    <TextInput
                            style={styles.input}
                            placeholder="Phone Number"
                            value={phoneNumber}
                            onChangeText={(text) => setPhoneNumber(text)}
                        />

                    <TextInput
                            style={styles.input}
                            placeholder="Email"
                            value={email}
                            onChangeText={(text) => setEmail(text)}
                        />

                    <Text style={styles.DateStyle}>Select Service</Text>
                         <RadioButton.Group onValueChange={(value) => setService(value)} value={service}>
                            <View style={styles.radioGroup}>
                                <View style={styles.radioItem}>
                                    <RadioButton value="Legal Assistances" />
                                    <Text style={styles.radioLabel}>Legal Assistances</Text>
                                </View>

                                <View style={styles.radioItem}>
                                    <RadioButton value="Business Consultantcy" />
                                    <Text style={styles.radioLabel}>Business Consultantcy</Text>
                                </View>
                            </View>
                        </RadioButton.Group>

                    <Text style={styles.DateStyle}>Choose Appointment Date</Text>
                        <DatePicker
                            mode="calendar"
                            onSelectedChange={date => setAppointmentDate(date)}
                        />

                        <TextInput
                            style={{ ...styles.input, height: 80, }}
                            placeholder="Description"
                            multiline
                            numberOfLines={4}
                            value={description}
                            onChangeText={(text) => setDescription(text)}

                        />
  
                    <TextInput
                            style={styles.input}
                            placeholder="Preferred Attorney"
                            value={preferredAttorney}
                            onChangeText={(text) => setPreferredAttorney(text)}
                        />

                    <TextInput
                            style={styles.input}
                            placeholder="Law Firms"
                            value={preferredLawfirm}
                            onChangeText={(text) => setPreferredLawfirm(text)}
                        />
                        <Text style={styles.DateStyle}>communition Preferrences</Text>
                         <RadioButton.Group onValueChange={(value) => setCommunicationPreferences(value)} value={communicationPreferences}>
                            <View style={styles.radioGroup}>
                                <View style={styles.radioItem}>
                                    <RadioButton value="SMS" />
                                    <Text style={styles.radioLabel}>SMS</Text>
                                </View>

                                <View style={styles.radioItem}>
                                    <RadioButton value="Email" />
                                    <Text style={styles.radioLabel}>Email</Text>
                                </View>

                                <View style={styles.radioItem}>
                                    <RadioButton value="WhatsApp" />
                                    <Text style={styles.radioLabel}>WhatsApp</Text>
                                </View>

                                <View style={styles.radioItem}>
                                    <RadioButton value="Others" />
                                    <Text style={styles.radioLabel}>Others</Text>
                                </View>
                            </View>
                        </RadioButton.Group>
                        <Text style={styles.DateStyle}>Appointment Time</Text>
                        <TextInput
                            style={styles.input}
                            placeholder="07:00pm"
                            value={appointmentTime}
                            onChangeText={(text) => setAppointmentTime(text)}
                        />
                       
                    
                        <TouchableOpacity style={styles.addButton}
                            onPress={() => handleAppointment()}
                        >
                            <Text style={styles.buttonText}>Book Now</Text>
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
        flexDirection: 'column',
        alignItems: 'center',
        marginBottom: 12,
        marginTop: 20,
    },
    radioItem: {
        flexDirection: 'row',
        // alignItems: 'center',
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

export default AppointmentBooking
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

const AppointmentBooking = ({navigation, route}) => {
    const {lawyerId, lawfirmId} = route.params;
    const [fullName, setFullName] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [email, setEmail] = useState('');
    const [service, setService] = useState('None');
    const [appointmentDate, setAppointmentDate] = useState('');
    const [description, setDescription] = useState('');
    const [communicationPreferences, setCommunicationPreferences] = useState('None');
    const [appointmentTime, setAppointmentTime] = useState('');

 
    const handleSubmit = () => {
        const appointmentData = {
          fullName,
          phoneNumber,
          email,
          service,
          appointmentDate: converDateToBackendFormat(appointmentDate),
          description,
          communicationPreferences,
          appointmentTime,
          user_id: 1,
          lawyer_id: lawyerId || null, // Set lawyer_id to provided value or null if not provided
          lawfirm_id: lawfirmId || null // Set lawfirm_id to provided value or null if not provided
        };

        console.log(appointmentData);
    
        axios.post(`${URL}/bookappointment`, appointmentData)
          .then(response => {
            console.log('Appointment created successfully:', response.data);
            Alert.alert('Success', 'Appointment created successfully');
            navigation.navigate('Booked');
          })

          .catch(error => {
            console.error('Error creating appointment:', error);
            Alert.alert('Error', 'Failed to create appointment');
          });
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
                                    <RadioButton value="Legal Assistances" 
                                    uncheckedColor={Color.grey} 
                                    color={Color.primary} 
                                    />
                                    <Text style={styles.radioLabel}>Legal Assistances</Text>
                                </View>

                                <View style={styles.radioItem}>
                                    <RadioButton value="Business Consultantcy" 
                                       uncheckedColor={Color.grey} 
                                       color={Color.primary} 
                                    />
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
                        <Text style={styles.DateStyle}>communition Preferrences</Text>
                         <RadioButton.Group onValueChange={(value) => setCommunicationPreferences(value)} value={communicationPreferences}>
                            <View style={styles.radioGroup}>
                                <View style={styles.radioItem}>
                                    <RadioButton value="SMS" 
                                     uncheckedColor={Color.grey} 
                                     color={Color.primary} 
                                    />
                                    <Text style={styles.radioLabel}>SMS</Text>
                                </View>

                                <View style={styles.radioItem}>
                                    <RadioButton value="Email" 
                                     uncheckedColor={Color.grey}
                                     color={Color.primary}
                                    />
                                    <Text style={styles.radioLabel}>Email</Text>
                                </View>

                                <View style={styles.radioItem}>
                                    <RadioButton value="WhatsApp"
                                     uncheckedColor={Color.grey} 
                                     color={Color.primary} 
                                    />
                                    <Text style={styles.radioLabel}>WhatsApp</Text>
                                </View>

                                <View style={styles.radioItem}>
                                    <RadioButton value="Others"
                                     uncheckedColor={Color.grey} 
                                     color={Color.primary} 
                                    />
                                    <Text style={styles.radioLabel}>Others</Text>
                                </View>
                            </View>
                        </RadioButton.Group>
                        <Text style={styles.time}>Appointment Time</Text>
                        <TextInput
                            style={styles.input}
                            placeholder="07:00pm"
                            value={appointmentTime}
                            onChangeText={(text) => setAppointmentTime(text)}
                        />
                       
                    
                        <TouchableOpacity style={styles.addButton}
                            onPress={() => handleSubmit()}
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
        // alignItems: 'center',
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
    time: {
        backgroundColor: "#eee",
        borderRadius: 5,
        padding: 10,
        marginBottom: 20,
    }
});

export default AppointmentBooking;
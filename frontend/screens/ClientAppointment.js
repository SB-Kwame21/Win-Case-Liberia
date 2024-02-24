import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView, ActivityIndicator, Alert } from 'react-native';
import { useFocusEffect } from '@react-navigation/native';
import { SimpleLineIcons } from '@expo/vector-icons';
import AsyncStorage from '@react-native-async-storage/async-storage';

import axios from 'axios';
import { URL } from './Constants';
import Color from '../Config/Color';

const ClientAppointment = ({ navigation }) => {
    const [bookappointments, setBookappointments] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    console.log(bookappointments);

    useFocusEffect(
        React.useCallback(() => {
            fetchBookappointmentData();
        }, [])
    );

    const fetchBookappointmentData = async () => {
        try {
            const accessToken = await AsyncStorage.getItem('accessToken');
            const response = await axios.get(`${URL}/user-appointment/1`, {
                headers: {
                    Authorization: `Bearer ${accessToken}`
                }
            });
            setBookappointments(response.data.reverse());
            setIsLoading(false);
        } catch (error) {
            console.log(error.response)
            if (error.response && error.response.status === 401) {
                Alert.alert('Error', 'Failed to fetch appointment. Please try again later.');
            };
        }
    };
    // ${appointmentId}
    const handleDeleteAppointment = async () => {
        try {
            const accessToken = await AsyncStorage.getItem('accessToken');
            const response = await axios.delete(`${URL}/delete-bookappointment/${appointmentId}`, {
                headers: {
                    Authorization: `Bearer ${accessToken}`
                }
            });
            // Check if the deletion was successful
            if (response.status === 200) {
                // Refresh the appointment list after successful deletion
                fetchBookappointmentData();
                Alert.alert('Success', 'Appointment deleted successfully.');
            } else {
                // Handle other status codes if needed
                Alert.alert('Error', 'Failed to delete appointment. Please try again later.');
            }
        } catch (error) {
            console.log(error.response)
            Alert.alert('Error', 'Failed to delete appointment. Please try again later.');
        }
    };
    

    return (
        <View style={styles.container}>
            {isLoading ? (
                <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                    <ActivityIndicator size="large" color="grey" />
                </View>
            ) : !bookappointments.length ? (
                <View style={styles.NoTask}>
                    <Text style={styles.boldText}>No Appointment</Text>
                    <Text style={styles.subHeaderText}>Tap the Add Button to Add Appointment</Text>
                </View>
            ) : (
                <ScrollView showsVerticalScrollIndicator={false}>
                    {bookappointments.map((bookappointment, index) => (
                        <View
                            key={index}
                            style={[
                                styles.bookappointmentItem,
                                index === bookappointments.length - 1 && styles.lastChildPadding,
                            ]}
                        >
                            <View style={styles.appointmentContainer}>
                                <View style={styles.row}>
                                <Text style={styles.service}>{bookappointment.service}</Text>
                                <TouchableOpacity onPress={() => handleDeleteAppointment(bookappointment.id)}>
                                <SimpleLineIcons name="trash" size={24} color={Color.primary} />
                            </TouchableOpacity>
                                </View>
                               
                                <Text style={styles.name}>{bookappointment.fullName}</Text>
                                <Text style={styles.number}>{bookappointment.phoneNumber}</Text>
                            </View>
                           
                        </View>
                    ))}
                </ScrollView>
            )}
        </View>
    );
};


const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
        marginTop: 30
    },
    header: {
        marginBottom: 16,
        flexDirection: 'row',
        justifyContent: "space-between",
        alignContent: "center"
    },
    appointmentContainer:{
    margin: 10,
    backgroundColor: "#eee",
    width: '80%',
    height: 100,
    paddingHorizontal: 10,
    
    },
    service: {
      fontWeight: 'bold',
      fontSize: 15,
      color: Color.grey,
    

    },
    row: {
        flexDirection: 'row',
      width: '100%',
      justifyContent: 'space-between',
    //   paddingRight: 20,

    },
    name:{
        // paddingLeft: 20,

    },
    number:{
        // paddingLeft: 20,
    },
    headerText: {
        fontSize: 16,
        fontWeight: 'bold',
        justifyContent: 'space-between',
    },
    subHeaderText: {
        fontSize: 16,
        
    },
    addButton: {
        backgroundColor: '#094FAF',
        padding: 10,  // All sides are 10
        paddingHorizontal: 20,  // Left and right are 20
        borderRadius: 15,
        marginTop: 8,
    },
    buttonText: {
        color: 'white',
    },
    taskSummary: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 20,
        marginTop: 20,
        justifyContent: "space-between"
    },
    boldText: {
        fontSize: 18,
        fontWeight: 'bold',
        marginRight: 8,
    },
    taskCount: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#F23E3E',
        backgroundColor: '#EEEEEE',
        padding: 10,
        borderRadius: 10
    },
    taskItem: {
        padding: 15,
        marginBottom: 16,
        marginTop: 16,
        backgroundColor: '#EEEEEE',
        borderRadius: 10,

        position: 'relative',
        zIndex: 1
    },

    NoTask: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: 100
    },
    lastChildPadding: {
        marginBottom: 40
    },
    taskHeaderText: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 10,
        width: '70%'
    },
    status: {
        fontSize: 16,
        color: '#094FAF'
    },
    description: {
        fontSize: 16,
        marginBottom: 8,
    },
    date: {
        fontSize: 16,
        color: 'gray',
        marginTop: 14
    },
    iconBox: {
        alignSelf: "flex-end",
        marginBottom: 50,
    },

    // Option Style
    optionsContainer: {
        marginTop: 10,
        backgroundColor: '#fff',
        borderRadius: 15,
        width: '70%',
        alignSelf: 'flex-end',
        position: 'absolute',
        top: 110,
        right: 20
    },
    optionButton: {
        padding: 10,
        marginTop: 5,
        borderBottomWidth: 2,
        borderBlockColor: '#eee8'
    },
    optionText: {
        // color: 'white',
    },
});

export default ClientAppointment;
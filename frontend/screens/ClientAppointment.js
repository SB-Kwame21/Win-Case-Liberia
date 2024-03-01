import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView, ActivityIndicator, Alert } from 'react-native';
import { useFocusEffect } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';

import axios from 'axios';
import { URL } from './Constants';
import Color from '../Config/Color';
import { useNavigation } from '@react-navigation/native';

const ClientAppointment = ({}) => {
    const navigation = useNavigation();
    const [bookappointments, setBookappointments] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    const navigateToAppointmentDetails = (appointment) => {
        navigation.navigate('Appointment Details', { appointment });
    };

    useFocusEffect(
        React.useCallback(() => {
            fetchBookappointmentData();
        }, [])
    );

    useEffect(() => {
        const timer = setTimeout(() => {
            if (bookappointments.length === 0) {
                setIsLoading(false);
            }
        }, 3000); // Adjust the timeout duration as needed (in milliseconds)

        return () => clearTimeout(timer);
    }, [bookappointments]);

    const fetchBookappointmentData = async () => {
        try {
            const id = await AsyncStorage.getItem('UserId');
            const response = await axios.get(`${URL}/user-appointment/${id}`);

            setBookappointments(response.data);
            setIsLoading(false);
        } catch (error) {
            console.log(error.response);
            if (error.response && error.response.status === 401) {
                Alert.alert('Error', 'Failed to fetch appointment. Please try again later.');
            }
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
                    <Text style={styles.subHeaderText}>Click Book Now and book an appointment with a Lawyer or Lawfirm</Text>
                    <Text style={{color: Color.primary, fontWeight: 'bold'}}  onPress={() => navigation.navigate('Lawyers/Lawfirms')}>Book Now!!</Text>
                </View>
            ) : (
                <ScrollView showsVerticalScrollIndicator={false}>
                    {bookappointments.map((bookappointment, index) => (
                        <TouchableOpacity key={index} onPress={() => navigateToAppointmentDetails(bookappointment)}>
                            <View
                                style={[
                                    styles.bookappointmentItem,
                                    index === bookappointments.length - 1 && styles.lastChildPadding,
                                ]}
                            >
                                <View style={styles.appointmentContainer}>
                                    <Text style={styles.service}>{bookappointment.service}</Text>
                                    <Text style={styles.commPres}>{bookappointment.communicationPreferences}</Text>
                                    <Text style={styles.number}>{bookappointment.appointmentDate}</Text>
                                </View>
                            </View>
                        </TouchableOpacity>
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
        marginTop: 30,
    },
    header: {
        marginBottom: 16,
        flexDirection: 'row',
        justifyContent: "space-between",
        alignContent: "center"
    },
    appointmentContainer:{
    padding: 10,
    paddingHorizontal: 10,
    backgroundColor: "#eee",
    marginBottom: 10,
    width: '100%',
    paddingHorizontal: 20,
    height: 80,
    justifyContent: 'center'
    
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
    commPres:{
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
        fontSize: 14,
        textAlign: 'center',
        padding: 10,
        
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
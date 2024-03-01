import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Color from '../Config/Color';

const ClientAppointmentDetails = ({ route }) => {
  const { appointment } = route.params;


  if (!appointment) {
    // Handle case where appointment is not available
    return <Text>No appointment details available.</Text>;
}


  return (


    <View style={styles.container}>
    <View style={styles.detailsContainer} >

  <Text style={styles.label}>Full Name:</Text>
  <Text style={styles.text}>{appointment.fullName}</Text>

  <Text style={styles.label}>Phone Number:</Text>
  <Text style={styles.text}>{appointment.phoneNumber}</Text>

  <Text style={styles.label}>Email:</Text>
  <Text style={styles.text}>{appointment.email}</Text>

  <Text style={styles.label}>Service:</Text>
  <Text style={styles.text}>{appointment.service}</Text>

  <Text style={styles.label}>Description:</Text>
  <Text style={styles.text}>{appointment.description}</Text>

  <Text style={styles.label}>Appointment Date:</Text>
  <Text style={styles.text}>{appointment.appointmentDate}</Text>

  <Text style={styles.label}>Appointment Time:</Text>
  <Text style={styles.text}>{appointment.appointmentTime}</Text>


</View>
</View>
  );
};


  const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 40,
      backgroundColor: Color.white,
      
      
    },
    detailsContainer:{
    width: '100%', 
    height: '100%',
   
    },
    label: {
      // fontWeight: 'bold',
      marginBottom: 5,
      backgroundColor: '#eee',
      padding: 8,
    },
    text: {
      marginBottom: 20,
    },
  });

export default ClientAppointmentDetails;



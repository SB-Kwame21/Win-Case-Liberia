import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, StyleSheet, ActivityIndicator, Alert } from 'react-native';
import axios from 'axios';
import { URL } from './Constants';
import Color from '../Config/Color';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';

const LawyerAppointmentsScreen = ({ route }) => {
  const navigation = useNavigation();

  const [appointments, setAppointments] = useState([]);
  const [lawyerId, setLawyerId] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetchLawyerData();
  }, []);

  useEffect(() => {
    // Call fetchAppointments whenever lawyerId changes
    if (lawyerId !== null) {
      fetchAppointments();
    }
  }, [lawyerId]);

  const fetchLawyerData = async () => {
    try {
      const id = await AsyncStorage.getItem('UserId');
      const response = await axios.get(`${URL}/user-lawyer/${id}`);
      setLawyerId(response.data.Lawyer.id);
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
      console.log(error.response);
      if (error.response && error.response.status === 401) {
        Alert.alert('Error', 'Failed to get lawyer data. Please try again later.');
      }
    }
  };

  const fetchAppointments = async () => {
    try {
      const response = await axios.get(`${URL}/lawyers/${lawyerId}/appointments`);
      setAppointments(response.data);
    } catch (error) {
      console.error('Error fetching appointments:', error);
    }
  };

  const renderAppointmentItem = ({ item }) => (
    <View style={styles.appointmentItem}>
      <Text style={styles.name} onPress={() => navigation.navigate('Appointment Details', { appointment: item })}>{item.fullName}</Text>
      <Text style={styles.service} onPress={() => navigation.navigate('Appointment Details', { appointment: item })}>{item.service}</Text>
      <Text style={styles.date} onPress={() => navigation.navigate('Appointment Details', { appointment: item })}>{item.appointmentDate}</Text>
    </View>
  );

  if (isLoading) {
    return (
      <View style={styles.container}>
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={appointments}
        renderItem={renderAppointmentItem}
        keyExtractor={(item) => item.id.toString()}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Color.white,
    padding: 20,
  },
  appointmentItem: {
    padding: 10,
    paddingHorizontal: 10,
    backgroundColor: "#eee",
    marginBottom: 10,
    width: '100%',
    paddingHorizontal: 20,
    height: 80,
    justifyContent: 'center',
  },
  name:{
    fontWeight: 'bold', 
    fontSize: 15,
    color: Color.grey,
  },
  service: {
    fontSize: 14,
    color: Color.black,
  },
  date: {
    fontSize: 14,
    color: Color.black,
  }
});

export default LawyerAppointmentsScreen;

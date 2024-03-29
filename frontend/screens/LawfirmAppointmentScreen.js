import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, StyleSheet, ActivityIndicator, Alert } from 'react-native';
import axios from 'axios';
import { URL } from './Constants';
import Color from '../Config/Color';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';

const LawfirmAppointmentsScreen = () => {
  const navigation = useNavigation();

  const [appointments, setAppointments] = useState([]);
  const [lawfirmId, setLawfirmId] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetchLawfirmData();
  }, []);

  useEffect(() => {
    // Call fetchAppointments whenever lawfirmId changes
    if (lawfirmId !== null) {
      fetchAppointments();
    }
  }, [lawfirmId]);

  const fetchLawfirmData = async () => {
    try {
      const id = await AsyncStorage.getItem('UserId');
      const response = await axios.get(`${URL}/user-lawfirm/${id}`);
      setLawfirmId(response.data.Lawfirm.id);
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
      console.log(error.response);
      if (error.response && error.response.status === 401) {
        Alert.alert('Error', 'Failed to get lawfirm data. Please try again later.');
      }
    }
  };

  const fetchAppointments = async () => {
    try {
      const response = await axios.get(`${URL}/lawfirms/${lawfirmId}/appointments`);
      setAppointments(response.data);
    } catch (error) {
      console.error('Error fetching appointments:', error);
    }
  };

  const renderAppointmentItem = ({ item }) => {
    console.log(item); // Check item structure
    if (!item) {
      return <ActivityIndicator size="small" color="#0000ff" />;
    }

    return (
      <View style={styles.appointmentItem}>
        <Text style={styles.name} onPress={() => navigation.navigate('Appointment Details', { appointment: item })}>{item.fullName}</Text>
        <Text style={styles.service} onPress={() => navigation.navigate('Appointment Details', { appointment: item })}>{item.service}</Text>
        <Text style={styles.date} onPress={() => navigation.navigate('Appointment Details', { appointment: item })}>{item.appointmentDate}</Text>
      </View>
    );
  };

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
    // alignItems: 'center',
    // justifyContent: 'center',
    // backgroundColor: Color.white,
    padding: 20,
  },
  appointmentItem: {
        padding: 10,
    // borderBottomWidth: 1,
    // borderBottomColor: '#ccc',
    // borderTopWidth: 1,
    // borderTopColor: '#ccc',
    paddingHorizontal: 10,
    backgroundColor: "#eee",
    marginBottom: 10,
    width: '100%',
    paddingHorizontal: 20,
    height: 80,
    justifyContent: 'center'
  },
  name: {
        fontWeight: 'bold', 
    fontSize: 15,
    color: Color.grey,
  },

});

export default LawfirmAppointmentsScreen;


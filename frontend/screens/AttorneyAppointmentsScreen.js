import React, { useState, useEffect } from 'react';
import { View, Text, FlatList } from 'react-native';
import axios from 'axios'; // Import Axios
import { URL } from './Constants';

const AttorneyAppointmentsScreen = ({ attorneyId }) => {
  const [appointments, setAppointments] = useState([]);

  useEffect(() => {
    fetchAttorneyAppointments();
  }, []);

  const fetchAttorneyAppointments = async () => {
    try {
      const response = await axios.get(`${URL}/attorney-appointments/${attorneyId}`); // Use Axios
      setAppointments(response.data.appointments);
    } catch (error) {
      console.error('Error fetching appointments:', error);
    }
  };

  return (
    <View>
      <Text>Attorney Appointments</Text>
      <FlatList
        data={appointments}
        renderItem={({ item }) => (
          <View>
            <Text>{item.fullName}</Text>
            {/* Display other appointment details */}
          </View>
        )}
        keyExtractor={(item) => item.id.toString()}
      />
    </View>
  );
};

export default AttorneyAppointmentsScreen;

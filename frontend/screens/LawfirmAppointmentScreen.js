import React, { useState, useEffect } from 'react';
import { View, Text, FlatList } from 'react-native';
import axios from 'axios';
import { URL } from './Constants';

const LawfirmAppointmentsScreen = ({ lawfirmId }) => {
  const [appointments, setAppointments] = useState([]);

  useEffect(() => {
    fetchLawfirmAppointments();
  }, []);

  const fetchLawfirmAppointments = async () => {
    try {
      const response = await axios.get(`${URL}/lawfirm-appointments/${lawfirmId}`);
      setAppointments(response.data.appointments);
    } catch (error) {
      console.error('Error fetching appointments:', error);
    }
  };

  return (
    <View>
      <Text>Lawfirm Appointments</Text>
      <FlatList
        data={appointments}
        renderItem={({ item }) => (
          <View>
            {/* <Text>Client Name: {item.fullName}</Text> */}
            {/* <Text>Attorney: {item.preferredAttorneyName}</Text> */}
            <Text>Lawfirm: {item.preferredLawfirmName}</Text>
            {/* Display other appointment details */}
          </View>
        )}
        keyExtractor={(item) => item.id.toString()}
      />
    </View>
  );
};

export default LawfirmAppointmentsScreen;

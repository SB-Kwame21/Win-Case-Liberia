import React from 'react';
import {View, Text, ImageBackground, Image, SafeAreaView, StyleSheet, 
    TouchableOpacity, ScrollView, Dimensions, StatusBar} from 'react-native';
import {MaterialCommunityIcons} from '@expo/vector-icons';



import Color from '../Config/Color';

function Booked({navigation}) {
  return (
    <ImageBackground
    style={styles.background}
    source={require("../assets/background.jpeg")}
    resizeMode="cover"
    >
        <View style= {styles.backgroundOpacity}>
         <View style={styles.mainContin}>
            <View style={styles.iconBox} >
            <MaterialCommunityIcons name="checkbox-multiple-marked" size={26} color={Color.primary}/>
            </View>
            <Text style={styles.heading}>Appointment Booked</Text>
            <Text style={styles.headingText}>Your appointment has been booked with Win Case Lib!!</Text>
            </View>
            <TouchableOpacity style={styles.allAppointmentLink} onPress={() => navigation.navigate('My Appointments')} >
            <Text style={styles.allAppointmentLinkText}  onPress={() => navigation.navigate('My Appointments')}>View all Appointments</Text>
           </TouchableOpacity>
           <TouchableOpacity style={styles.homeLink} onPress={() => navigation.navigate('Home')} >
            <Text style={styles.homeLinkText}  onPress={() => navigation.navigate('Home')}>Back to Home</Text>
           </TouchableOpacity>
        </View>
     <StatusBar style={styles.statusBar}/>
    </ImageBackground>
)
};


const styles = StyleSheet.create({
    background: {
        flex: 1,
        width: '100%',
        height: '100%',
       
    },

    backgroundOpacity: {
        width: '100%',
         height: '100%',
         backgroundColor: Color.secondary,
         alignItems: 'center',
        //  justifyContent: 'center',
        
     },

     mainContin:{
        width: '100%',
        height: 200,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 200,
        marginBottom: 200,
        paddingHorizontal: 50,
     },

     iconBox: {
        width: 70,
        height: 70,
        backgroundColor: Color.white,
        borderRadius: 50,
        alignItems: 'center',
        justifyContent: 'center',
     },

     heading: {
        fontWeight: 'bold',
        color: Color.white,
        fontSize: 18,
        marginTop: 40,
     },

     headingText: {
        color: Color.white,
        fontSize: 12,
        textAlign: 'center',
     },

     allAppointmentLink: {
        width: '90%',
        height: 50,
        backgroundColor: Color.primary,
        marginBottom: 10,
        borderRadius: 5,
        justifyContent: 'center', 
    },
    homeLink: {
        width: '90%',
        height: 50,
        backgroundColor: Color.white,
        marginBottom: 10,
        borderRadius: 5,
        justifyContent: 'center', 
    },

    homeLinkText: {
        fontWeight: 'bold',
        color: Color.primary,
        textAlign: 'center',
    },
    allAppointmentLinkText:{
        fontWeight: 'bold',
        color: Color.white,
        textAlign: 'center',
    }


});

export default Booked;
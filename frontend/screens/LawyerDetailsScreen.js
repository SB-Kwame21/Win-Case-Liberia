import React, { useState, useEffect } from 'react';
import {View,
        Text, 
        ImageBackground, 
        SafeAreaView, 
        StyleSheet, 
        TouchableOpacity, 
        ScrollView, 
        Dimensions, 
        StatusBar,  
        FlatList, Image } from 'react-native';

import {AntDesign,} from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

import Color from '../Config/Color';

 function LawyerDetailsScreen({ route }) {
  const navigation = useNavigation();
  const { lawyer } = route.params;

  return (
    <ImageBackground
    style={styles.background}
    source={require("../assets/back.jpg")}
    resizeMode="cover"
    >
        <View style= {styles.backgroundOpacity}>
      <View>

    <View style={styles.memberImagebBox}>
            <Image source={{ uri: lawyer.image }} style={styles.memberImage} />
            <View style={styles.navContainer}>
         <AntDesign name="left" size={24} color={Color.white} onPress={() => navigation.navigate('Lawyers/Lawfirms')}/>
         <Text style={styles.pointBack}>go back</Text>
         </View>
      <View style={styles.container}>
        <View style={styles.memberInfoHeadingBox}>
        <View memberInfoHeading>
      <Text style={styles.fullname}>{lawyer.fullname}</Text>
      <Text style={styles.lawType}>{lawyer.practiceArea}</Text>
      </View>
      </View>
     
      <ScrollView  Vertical={true}  showsVerticalScrollIndicator={true}>
      <View style={styles.infoDetails}>
        <Text style={styles.infoHead}>Gender</Text>
      <Text style={styles.infoStyle}>{lawyer.gender}</Text>
      <Text style={styles.infoHead}>Address</Text>
      <Text style={styles.infoStyle}>{lawyer.address}</Text>
      <Text style={styles.infoHead}>City</Text>
      <Text style={styles.infoStyle}>{lawyer.city}</Text>
      <Text style={styles.infoHead}>State</Text>
      <Text style={styles.infoStyle}>{lawyer.state}</Text>
      <Text style={styles.infoHead}>Zip Cpde</Text>
      <Text style={styles.infoStyle}>{lawyer.zipCode}</Text>
      <Text style={styles.infoHead}>Country</Text>
      <Text style={styles.infoStyle}>{lawyer.country}</Text>
      <Text style={styles.infoHead}>Phone</Text>
      <Text style={styles.infoStyle}>{lawyer.phone}</Text>
      <Text style={styles.infoHead}>Email</Text>
      <Text style={styles.infoStyle}>{lawyer.email}</Text>
      <Text style={styles.infoHead}>LinkIn</Text>
      <Text style={styles.infoStyle}>{lawyer.linkedIn}</Text>
      <Text style={styles.infoHead}>Website</Text>
      <Text style={styles.infoStyle}>{lawyer.website}</Text>
      <Text style={styles.infoHead}>Education</Text>
      <Text style={styles.infoStyle}>{lawyer.education}</Text>
      <Text style={styles.infoHead}>Language</Text>
      <Text style={styles.infoStyle}>{lawyer.language}</Text>
      </View>
      <TouchableOpacity style={styles.opacityBody} onPress={() => navigation.navigate('Appointment Booking')} >
            <Text style={styles.appointmenText}  onPress={() => navigation.navigate('Appointment Booking')}>Book an appointment</Text>
           </TouchableOpacity>
      </ScrollView>
     
      </View>
      </View>
    </View>
    </View>
     <StatusBar backgroundColor={Color.transparent} barStyle="light-content"/>
    </ImageBackground>
  )
}

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

},
navContainer: {
  // backgroundColor: '#fff',
  width: '100%',
  height: 50,
  alignItems: 'center',
  flexDirection: 'row',
  margin: 3,
  position: 'absolute',
  },
  pointBack:{
    color: Color.white,
  },
memberImagebBox: {
  // flex: 1,
  width: '97%',
  height: 360,
  // marginLeft: 4,
  // backgroundColor: 'pink',
  position: 'relative',
  alignSelf: 'center',
},
memberImage: {
  width: '100%',
  height: 350 ,

},
container: {
  backgroundColor: Color.white,
  width: '96%',
  height: 480 ,
  marginTop: '66%',
  // marginLeft: 4,
  borderTopStartRadius: 10,
  borderTopEndRadius: 10, 
  borderBottomLeftRadius: 10,
  borderBottomRightRadius: 10, 
  position: 'absolute',
  alignSelf: 'center',
},
memberInfoHeadingBox:{
flexDirection: 'row',
width: '100%',
height: 100,
justifyContent: 'space-between',
borderTopStartRadius: 10,
borderTopEndRadius: 10, 
padding: 30,

},
memberInfoHeading:{
marginTop: 10,
width: '40%',
height: '100%',
},
memberInfoHeadingIcons:{
flexDirection: 'row',
justifyContent: 'space-evenly',
width: '60%',
height: '100%',
// marginTop: 10,
},

infoDetails: {
  marginLeft: 30,
  marginRight: 30,
},
fullname: {
  fontWeight: 'bold',
  fontSize: 13,
},
lawType: {
  color: Color.grey,
  fontSize: 13,
},
infoHead:{
  marginTop: 25,
  marginBottom: 8,
  fontWeight: 'bold',
  fontSize: 16,
},
appointmenText: {
  color: Color.white,
  alignSelf: 'center',
  fontSize: 15,
  fontWeight: 'bold',
  
},
opacityBody: {
  width: '90%',
  height: 50,
  backgroundColor: Color.primary,
  marginBottom: 20,
  borderRadius: 5,
  justifyContent: 'center', 
  marginLeft: 18,
  marginTop: 25,
},
infoStyle:{
  fontSize: 14,
}
});

export default LawyerDetailsScreen;
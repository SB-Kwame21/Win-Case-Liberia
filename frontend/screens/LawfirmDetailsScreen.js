import React, { useState, useEffect } from 'react';

import {
    View,
    Text, 
    ImageBackground, 
    StyleSheet, 
    TouchableOpacity, 
    ScrollView, 
    StatusBar,  
    FlatList,
    Linking, 
    Image } from 'react-native';

import { AntDesign,} from '@expo/vector-icons';

import { useNavigation } from '@react-navigation/native';
import Color from '../Config/Color';


function LawfirmDetailsScreen({route}) {
    const navigation = useNavigation();
    const { lawfirm } = route.params;

    const handleIlgWebsitePress = () => {
        const websiteUrl = 'https://www.ilgliberia.com/';
        Linking.openURL(websiteUrl);
      };
  
    return (
      <ImageBackground
      style={styles.background}
      source={require("../assets/back.jpg")}
      resizeMode="cover"
      >
          <View style= {styles.backgroundOpacity}>
        <View>
  
      <View style={styles.memberImagebBox}>
              <Image source={{ uri: lawfirm.logoImage }} style={styles.memberImage} />
              <View style={styles.navContainer}>
           <AntDesign name="left" size={24} color={Color.white} onPress={() => navigation.navigate('Lawfirms')}/>
           <Text style={styles.pointBack}>go back</Text>
           </View>
        <View style={styles.container}>
          <View style={styles.memberInfoHeadingBox}>
          <View memberInfoHeading>
        <Text style={styles.fullname}>{lawfirm.lawfirmName}</Text>
        <Text style={styles.lawType}>{lawfirm.practiceArea}</Text>
        </View>
        </View>
       
        <ScrollView  Vertical={true}  showsVerticalScrollIndicator={true}>
        <View style={styles.infoDetails}>
          <Text style={styles.infoHead}>Business Address</Text>
        <Text style={styles.infoStyle}>{lawfirm.businessAddress}</Text>
        <Text style={styles.infoHead}>city</Text>
        <Text style={styles.infoStyle}>{lawfirm.city}</Text>
        <Text style={styles.infoHead}>Country</Text>
        <Text style={styles.infoStyle}>{lawfirm.country}</Text>
        <Text style={styles.infoHead}>Phone</Text>
        <Text style={styles.infoStyle}>{lawfirm.phone}</Text>
        <Text style={styles.infoHead}>Email</Text>
        <Text style={styles.infoStyle}>{lawfirm.email}</Text>
        <Text style={styles.infoHead}>Website</Text>
        <TouchableOpacity onPress={handleIlgWebsitePress}>
        <Text style={styles.infoStyle}>{lawfirm.website}</Text>
        </TouchableOpacity>
        <Text style={styles.infoStyle}>{lawfirm.yearsOfPractice}</Text>
        <Text style={styles.infoHead}>Bar Association Membership</Text>
        <Text style={styles.infoStyle}>{lawfirm.barAssociationsMembership}</Text>
        <Text style={styles.infoHead}>Language</Text>
        <Text style={styles.infoStyle}>{lawfirm.language}</Text>
        <Text style={styles.infoHead}>Description</Text>
        <Text style={styles.infoStyle}>{lawfirm.description}</Text>
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
    width: '97%',
    height: 300,
    position: 'relative',
    alignSelf: 'center',
  },
  memberImage: {
    width: '100%',
    height: 300 ,
  
  },
  container: {
    backgroundColor: Color.white,
    width: '96%',
    height: 480 ,
    marginTop: '66%',
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
  
export default  LawfirmDetailsScreen;
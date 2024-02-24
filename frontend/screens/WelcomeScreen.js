import { StyleSheet, Text, View, TouchableOpacity, ImageBackground, StatusBar } from 'react-native'
import React from 'react'
import Color from '../Config/Color';
import { FontAwesome6 } from '@expo/vector-icons';

function WelcomeScreen({navigation}) {
  return (
    <ImageBackground
    style={styles.background}
    source={require('../assets/back.jpg')}
    resizeMode="cover"
  >
    <View style={styles.backgroundOpacity}>
    <View style={styles.Container}>
      <Text style={styles.heading}>Welcome To Win Case Liberia</Text>
    
      <View style={styles.roleContainer}>
      <FontAwesome6 name="hand-point-down" size={35} color={Color.white}/>
      <View style={styles.roleBox}>
       
        <TouchableOpacity style={styles.lawyerBtn} onPress={() => navigation.navigate('LawyerMainDrawer')}>
            <Text style={{color:Color.white}} >Lawyers</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.clientBtn} onPress={() => navigation.navigate('MainDrawer')}>
            <Text>Clients</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.lawfirmBtn}  onPress={() => navigation.navigate('LawfirmMainDrawer')}>
            <Text style={{color:Color.white}}>Lawfirms</Text>
        </TouchableOpacity>
      </View>
      {/* <FontAwesome6 name="hand-point-up" size={40} color={Color.white} marginTop={30}/> */}
      </View>
    </View>
    </View>
    <StatusBar translucent={true} backgroundColor='transparent' barStyle="light-content" />
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
    Container:{
        flex: 1,
        // backgroundColor: Color.dark,
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: 25,
    },
    heading: {
        fontWeight: 'bold',
        color: Color.white,
        fontSize: 35,
        textAlign: 'center',
        // paddingTop: 20,

    },
    subText: {
        color: Color.white,
        textAlign: 'center',
        fontSize: 14,
    },
    roleContainer: {
        width: '100%',
        height: 200,
        alignItems: 'center',
        paddingTop: 100,
       
    },
    roleBox: {
        width: '100%',
        flexDirection: 'column',
        height: 160,
        alignItems: 'center',
        justifyContent: 'space-evenly',
        // paddingTop: 40,
        marginTop: 40,

    },
    lawyerBtn:{
    backgroundColor: Color.primary,
    padding: 10,
    borderRadius: 4,
    width: 160,
    height: 40,
    },
    clientBtn:{
        backgroundColor: Color.white,
        padding: 10,
        borderRadius: 4,
        width: 160,
        height: 40,
    },

    lawfirmBtn:{
        backgroundColor: Color.primary,
        padding: 10,
        borderRadius: 4,
        width: 160,
        height: 40,
    },
    subHeading: {
        color: Color.white,
        marginTop: 20,
    }


});

export default  WelcomeScreen;
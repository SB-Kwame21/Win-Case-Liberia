import React from 'react';
import {
    View, 
    Text, 
    ImageBackground, 
    Image, 
    StyleSheet, 
    TouchableOpacity, 
    ScrollView, 
    Dimensions, 
    StatusBar} from 'react-native';

import { 
    Ionicons, 
    MaterialIcons,  
    MaterialCommunityIcons,
    AntDesign, 
  } from '@expo/vector-icons';

import { SwiperFlatList } from 'react-native-swiper-flatlist';
import Color from '../Config/Color';

function ClientDashboardScreen({navigation}) {
    return (
        <ImageBackground
       style={styles.background}
       source={require("../assets/back.jpg")}
       resizeMode="cover"
       >
           <View style= {styles.backgroundOpacity}>
            <View style={styles.navContainer}>
                <View style={styles.logoContin}>
            <Text style={styles.textLogo}>WC</Text>
            <Text style={styles.lib}>Lib</Text>
            </View>
         <View style={styles.appointmentBtn}> 
         <MaterialCommunityIcons name="checkbox-multiple-marked" size={24} marginTop={3} color={Color.primary} onPress={() => navigation.navigate('My Appointments')}/>
         </View>
            </View>
            <View style={styles.container}>
            {/* showPagination */}
            <SwiperFlatList autoplay autoplayDelay={2} autoplayLoop index={2} showPagination paginationStyle={{ position: 'absolute', left: 10, bottom: 4 }}>
      <View style={[styles.child, ]}>
        {/* <Text style={styles.text}>1</Text> */}
        <View style={styles.infoContainer}>
              <Text style={styles.infoText}>Welcome to</Text>
        
              <Text style={styles.infotextBold}>Win Case Liberia</Text>

              <Text  style={styles.infoText}>WCL is poised to transform the 
              legal services industry by providing a convenient, efficient, 
              and accessible platform for clients to connect with experienced lawyers and law Firms. </Text>
            
            </View> 
      </View>
      <View style={[styles.child, ]}>
        {/* <Text style={styles.text}>2</Text> */}
        <View style={styles.infoContainer}>
              <Text style={styles.infoText}>We've </Text>
        
              <Text style={styles.infotextBold}>Qualify Lawyers</Text>

              <Text  style={styles.infoText}>WCL aims to connect potential Clients with  
              Qualify Lawyers to help solve any legal issues.</Text>
            
            </View> 
      </View>
      <View style={[styles.child, ]}>
        {/* <Text style={styles.text}>3</Text> */}
        <View style={styles.infoContainer}>
              <Text style={styles.infoText}>We've</Text>
              <Text style={styles.infotextBold}>Reliable Lawfirms</Text>
              <Text  style={styles.infoText}>At WCL we give maximum attention to clients
               having options to chose the best law Firm of their choice.</Text>
            </View> 
      </View>
      {/* <View style={[styles.child, { backgroundColor: 'teal' }]}>
        <Text style={styles.text}>4</Text>
      </View> */}
    </SwiperFlatList>
  </View>
            
            <View style={styles.mainMenuContainer}>   
            <View style={styles.menuContainer}>
            <ScrollView  horizontal={true}  showsHorizontalScrollIndicator={false}>
            <View style={styles.iconBox}>
            <View style={styles.iconBoxChild} >
            <Ionicons name="menu" size={30} color={Color.primary} onPress={() => navigation.openDrawer()} />    
            <Text style={styles.iconDescription}>View all</Text>
            </View>
            </View>
            <View style={styles.iconBox}>
            <View style={styles.iconBoxChild}>
            <MaterialIcons name="cleaning-services" size={30} color={Color.primary} onPress={() => navigation.navigate('Our Services')} />
            <Text style={styles.iconDescription}>Services</Text>
            </View>
            </View>
            
            <View style={styles.iconBox}>
            <View style={styles.iconBoxChild}>
            <AntDesign name="team" size={30} color={Color.primary} onPress={() => navigation.navigate('Lawyers/Lawfirms')} />
            <Text style={styles.iconDescription}>Find Lawyer</Text>
            </View>
            </View>     

            <View style={styles.iconBox}>
            <View style={styles.iconBoxChild} >
            <MaterialIcons name="account-circle" size={30} color={Color.primary} onPress={() => navigation.navigate('Profile')} />
            {/* <Foundation name="torso-business" size={30} color={Color.primary} onPress={() => navigation.navigate('About Us')} /> */}
            <Text style={styles.iconDescription} >Profile</Text>
            </View>
            </View>

  
            </ScrollView>
            </View>
           <TouchableOpacity style={styles.opacityBody} onPress={() => navigation.navigate('Lawyers/Lawfirms')} >
            <Text style={styles.appointmenText}  onPress={() => navigation.navigate('Lawyers/Lawfirms')}>Book an appointments</Text>
           </TouchableOpacity>
           </View>
           </View>
           <StatusBar backgroundColor={Color.primary} barStyle="light-content" />
       </ImageBackground>
  )
};
const { width } = Dimensions.get('window');

const styles = StyleSheet.create({
    container: {
        width : '100%',
        height : 230,
        marginLeft: 10,
        marginTop: 150,
        },
    child: { width, },
    // text: { fontSize: width * 0.1, textAlign: 'center' },
    infoContainer:{
        width: '80%',
        height : 160,
        
        marginLeft: 20,
      },
      infoText:{
        color: Color.white,
        fontSize: 15,
        // fontSize: width  * 0.1,
        
        },
    
        infotextBold: {
          fontSize: 30,
          fontWeight: 'bold',
          color: Color.white,
          marginTop: 10,
          marginBottom: 10,
    
        },
    
   
    background: {
        flex: 1,
        width: '100%',
        height: '100%',
       
    },
    navContainer: {
    // backgroundColor: '#fff',
    width: '100%',
    height: 80,
    justifyContent: 'space-between',
    // alignItems: 'center',
    flexDirection: 'row',
    marginTop: 50,
    },
    logoContin: {
        width: 100,
        height: 40,
        flexDirection: 'row',
        },

    textLogo: {
     color: Color.white,
     fontSize: 18,
     fontWeight: 'bold',
     paddingLeft: 20, 
    },

    lib:{
        color: Color.primary,
        fontSize: 18,
        fontWeight: 'bold',  
    },

    appointmentBtn: {
 width: 35,
 height: 30, 
    },

    notificationIcon: {
    marginRight: 25,
    },

    backgroundOpacity: {
       width: '100%',
        height: '100%',
        backgroundColor: Color.secondary,
       
    },

sliderView: {
width: '75%',
height: 300,
backgroundColor: Color.white,
marginTop: 130, 
    },

    mainMenuContainer: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center',
        paddingHorizontal: 10,
    },


    opacityBody: {
        width: '100%',
        height: 50,
        backgroundColor: Color.primary,
        marginBottom: 10,
        borderRadius: 5,
        justifyContent: 'center', 
       

    },

    menuContainer: {
        justifyContent: 'space-evenly',
        flexDirection: 'row',
        width: '100%',
        height: 85,
     
    },

    iconBox: {
        width: 80,
        height: 70,
        backgroundColor: Color.white,
        borderRadius: 5,
        margin: 5,
       
     
    },
    iconBoxChild: {
        width: '100%',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
      
    },
    iconDescription: {
        color:  Color.primary,
        fontSize: 10,
        fontWeight: 'bold',
        marginTop: 5,

    },

    appointmenText: {
        color: Color.white,
        alignSelf: 'center',
        fontSize: 15,
        fontWeight: 'bold',
        
    },

});

export default ClientDashboardScreen
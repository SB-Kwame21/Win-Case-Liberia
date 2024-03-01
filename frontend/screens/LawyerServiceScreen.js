import React from 'react';
import {View, Text, ImageBackground, Image, SafeAreaView, StyleSheet, 
    TouchableOpacity, ScrollView, Dimensions, StatusBar} from 'react-native';
    // import { AntDesign, FontAwesome,  MaterialIcons, Foundation,    } from '@expo/vector-icons';

    import { Entypo, Ionicons, MaterialIcons,  AntDesign, Foundation, 
      SimpleLineIcons, FontAwesome5, Octicons   } from '@expo/vector-icons';

import Color from '../Config/Color';

function LawyerServiceScreen({navigation}) {
  return (
    <ImageBackground
    style={styles.background}
    source={require("../assets/back.jpg")} >
        <View style= {styles.backgroundOpacity}>
         <View style={styles.navContainer}>
         <AntDesign name="left" size={24} color={Color.white} onPress={() => navigation.navigate('Dashboard')}/>
         <Text style={styles.pointHome} onPress={() => navigation.navigate('Dashboard')}>Our Services</Text>
         </View>

        <View style={styles.companyServicesContianer}>
        <View style={styles.serviceOfferTitleBox}>
            <Text style={styles.serviceOfferTitle}>What we offer</Text>
        </View>
        <ScrollView  Vertical={true}  showsVerticalScrollIndicator={true}>
            <View style={styles.serviceInfoContainer1}>
            <Text style={styles.serviceInPara1}>Win Case Liberia offers a range of legal services, including consultations, document reviews,
             and representation for various legal matters. Clients can browse profiles of qualified
             lawyers, view their expertise and fees, and book appointments at their convenience. Additionally,
             Win Case Liberia provides a secure platform for document sharing, ensuring confidentiality and efficiency 
             in communication between clients and lawyers. </Text>
            </View>

            <View style={styles.headingContainer}>
            <FontAwesome5 name="people-arrows" size={24} color={Color.primary} marginLeft={10}/>
            <Text style={styles.serviceInfoHeading1}>Connecting Clients with Layers and Lawfirms</Text>
            </View>
            <Text style={styles.serviceInPara1}>
            Win Case Liberia aims to bridge the gap to ensure that clients can connect with Stand alonge lawyers and Lawfirm.
            </Text>

            <View style={styles.headingContainer}>
            <FontAwesome5 name="accessible-icon" size={24} color={Color.primary} marginLeft={10}/>
            <Text style={styles.serviceInfoHeading1}>Availablility and Accessibility </Text>
            </View>
            <Text style={styles.serviceInPara1}>
            Justice shouldn't wait. In the fast-paced, digital world, legal needs arise unexpectedly.
            With Win Case Liberia, access to legal guidance is no longer confined to office hours or limited by geographical barriers. 
            This innovative online platform seamlessly connects clients with lawyers and law firms, empowering them to seek legal advice and representation conveniently and confidently, anytime, anywhere.
            Imagine facing a legal challenge at midnight or needing quick counsel while traveling. Win Case Liberia bridges the gap by offering 24/7 accessibility. 
            Whether you require a consultation, contract review, or courtroom representation, qualified legal professionals are just a few clicks away. The platform simplifies the search process, 
            allowing you to browse profiles, compare expertise, and choose the ideal legal partner based on your specific needs.
            </Text>

            <View style={styles.headingContainer}>
            <FontAwesome5 name="accessible-icon" size={24} color={Color.primary} marginLeft={10}/>
            <Text style={styles.serviceInfoHeading1}>Lawyers and Lawfirms</Text>
            </View>
            <Text style={styles.serviceInPara1}> Win Case Liberia is a legal detigital online Community for all legal professionals be it Stand alone Lawyers and Lawfirms </Text>
            </ScrollView>
      
      </View>
        </View>
     <StatusBar style={styles.statusBar}>
     </StatusBar>
    </ImageBackground>
   );
 }

 const styles = StyleSheet.create({
     background: {
        flex: 1,
        width: '100%',
        height: '100%',
        
     },
     navContainer: {
     width: '100%',
     height: 50,
     alignItems: 'center',
     flexDirection: 'row',
     marginTop: 30,
     },

     pointHome: {
     fontSize: 18,
     color : Color.white,
     marginLeft: 10,
     },
 
 
     backgroundOpacity: {
        width: '100%',
         height: '100%',
         backgroundColor: Color.secondary,
        
     },

     companyServicesContianer: {
        width: '95%',
        height: '85%',
        backgroundColor: '#fff',
        alignSelf: 'center',
        marginTop: 20,
        // borderRadius: 10,
        borderTopStartRadius: 10,
        borderTopEndRadius: 10, 
       },

       serviceOfferTitleBox: {
        borderTopStartRadius: 10,
        borderTopEndRadius: 10, 
        backgroundColor: Color.grey,
        width: '100%',
        height: '8%',
       },

       serviceOfferTitle: {
        margin: 15,
        fontWeight: 'bold',
        color: Color.white,
       },
        
            menuContainer: {
                justifyContent: 'space-evenly',
                flexDirection: 'row',
                width: '100%',
                height: 30,
             //    paddingLeft: 25,
        
            },
        
            iconBox: {
       marginLeft: 30,
            },
            iconBoxChild: {
                width: '100%',
                height: '100%',
                justifyContent: 'center',
                alignItems: 'center',
              
            },
            iconDescription: {
                color:  '#BE8400',
                fontSize: 10,
                fontWeight: 'bold',
                marginTop: 5,
        
            },
        
            appointmenText: {
                color: '#fff',
                alignSelf: 'center',
                fontSize: 15,
                fontWeight: 'bold',
                
            },
   
            companyServicesContianer: {
               width: '95%',
               height: '85%',
               backgroundColor: '#fff',
               alignSelf: 'center',
               marginTop: 20,
               // borderRadius: 10,
               borderTopStartRadius: 10,
               borderTopEndRadius: 10, 
              },
   
              serviceOfferTitleBox: {
               borderTopStartRadius: 10,
               borderTopEndRadius: 10, 
               backgroundColor: '#f4f4f4',
               width: '100%',
               height: '8%',
              },
   
              serviceOfferTitle: {
               margin: 15,
               fontWeight: 'bold',
              },
   
              serviceInfoContainer1 :{
               width: '100%',
              paddingHorizontal: 10,
               height: 280,
              },
   
              serviceInPara1: {
               color: '#000',
               fontSize: 14,
               margin: 15,
               textAlign: 'justify',
              },
   
              serviceInfoContainer2:{
               width: '100%',
               height: 280,
               marginTop: 15,
              },
              headingContainer: {
              width: '100%',
              height: 38,
              flexDirection: 'row',
              paddingHorizontal: 20,
           //    margin: 10,
              },
   
              serviceInfoHeading1: {
               marginLeft: 10,
               fontWeight: 'bold',
               
              },
   
              serviceInfoContainer3:{
               width: '100%',
               height: 380,
               marginTop: 15,
              },
   
              headingContainer1:{
               width: '100%',
               height: 38,
               flexDirection: 'row',
              //  paddingHorizontal: 20,
              },
   
              serviceInfoHeading2:{
               marginLeft: 10,
               fontWeight: 'bold',
              },

              directionBox: {
                flexDirection: 'row',
                justifyContent: 'center',
                marginBottom: 40,
                paddingTop: 20,
              },
 });




export default LawyerServiceScreen;
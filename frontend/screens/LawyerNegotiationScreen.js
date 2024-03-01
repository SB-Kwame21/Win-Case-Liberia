import { StyleSheet, Text, View, ScrollView, TouchableOpacity, StatusBar } from 'react-native'
import React from 'react'
import Color from '../Config/Color';
import { SafeAreaView } from 'react-native-safe-area-context';

const LawyerNegotiationScreen = ({navigation}) => {
  return (
    <SafeAreaView style={styles.SafeAreaView}>
    <ScrollView  Vertical={true}  showsVerticalScrollIndicator={false} style={styles.container}>
      <Text style={styles.headingText}>Terms and Conditions:</Text>

      <Text style={styles.infoText}>We aim to showcase the myriad benefits and advantages 
      of becoming part of our esteemed legal online platform. At WCL, we prioritize
       efficiency, convenience, and accessibility, offering a comprehensive suite of
        tools and features designed to streamline legal processes. By joining WCL, solo 
        lawyers and law firms gain access to a user-friendly platform that simplifies case 
        management, client communication, document sharing, and more. Our platform empowers legal
         professionals to enhance their workflow, save valuable time and resources, and ultimately 
         deliver better results for their clients.</Text>
    
         <Text style={styles.infoText}>We extend a generous six-month trial period to solo lawyers
          and law firms upon creating their accounts on WCL. This trial period allows them to fully
           explore and experience the capabilities of our platform without any financial commitment. 
           During this time, they can take advantage of all the features and functionalities available, 
           gaining a comprehensive understanding of how WCL can integrate seamlessly into their practice. 
           By offering this extended trial period, we demonstrate our confidence in the value proposition 
           of WCL and provide ample opportunity for legal professionals to assess its impact on their operations.</Text>

           <Text style={styles.infoText}>Moreover, joining WCL goes beyond accessing tools and features;
            it opens doors to a vibrant and collaborative legal community. Within our platform, solo
             lawyers and law firms can connect, network, and collaborate with peers, fostering valuable relationships
              and partnerships within the legal industry. By emphasizing the collaborative opportunities facilitated by WCL,
               we showcase how joining our platform not only enhances individual practice but also enriches professional
                development and growth through shared knowledge and experiences within the legal community.</Text>

                <TouchableOpacity style={styles.joinBtn} onPress={() => navigation.navigate('Join Community')}>
                    <Text style={styles.BtnText} >Join Community</Text>
                </TouchableOpacity>
                
           </ScrollView>
           <StatusBar backgroundColor={Color.primary} barStyle="light-content" />
           </SafeAreaView>
  )
}



const styles = StyleSheet.create({
    container: {
        width: "100%",
        height: "100%",
        backgroundColor: Color.white,
        paddingTop: 30,
        paddingHorizontal: 20,
        // paddingBottom: 40,
        
        
    },
    headingText: {
        paddingTop: 10,
        fontWeight: 'bold',
        paddingBottom: 10,
    },
    infoText: {
        marginBottom: 10,
        textAlign: 'justify',
        fontSize: 12,
    },
    joinBtn:{
        backgroundColor: Color.primary,
        padding: 10,
        marginBottom: 50,
        alignItems: 'center',
        borderRadius: 4,
    },
    BtnText: {
        color: Color.white,
        fontWeight: 'bold',
    },
    SafeAreaView: {
        flex: 1,
        
        
        
    }
});

export default LawyerNegotiationScreen
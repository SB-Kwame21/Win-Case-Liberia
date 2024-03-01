import React, { useState, useEffect } from 'react';
import {
      View, 
      Text, 
      ImageBackground, 
      StyleSheet, 
      TouchableOpacity, 
      ScrollView, 
      Dimensions, 
      StatusBar,  
      FlatList, 
      Image, 
      TextInput } from 'react-native';

import { AntDesign,} from '@expo/vector-icons';

import { URL } from './Constants';
import axios from 'axios';

import Color from '../Config/Color';

import { useNavigation } from '@react-navigation/native';

function LawyerScreen() {
  const navigation = useNavigation();
  const [Lawyers, setLawyers] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredLawyers, setFilteredLawyers] = useState([]);

  useEffect(() => {
    axios.get(`${URL}/all-lawyers`)
      .then((response) => {
        setLawyers(response.data);
        setFilteredLawyers(response.data); // Initialize filteredLawfirms with fetched data
      })
      .catch((error) => {
        console.error('Error fetching Lawyers:', error);
      });
  }, []);

  const filterLawyers = (query) => {
    setSearchQuery(query);
    const filtered = Lawyers.filter(lawyer =>
      lawyer.fullname && lawyer.fullname.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredLawyers(filtered);
  };
  return (
    <ImageBackground
    style={styles.background}
    source={require("../assets/back.jpg")}
    resizeMode="cover"
    >
        <View style= {styles.backgroundOpacity}>
         <View style={styles.navContainer}>
         <AntDesign name="left" size={24} color={Color.white} onPress={() => navigation.navigate('Home')}/>
         <Text style={styles.pointHome}>Lawyers</Text>
         </View>
         <View style={styles.searchContainer}>
          <TextInput
            style={styles.searchInput}
            placeholder="Search Lawyers"
            value={searchQuery}
            onChangeText={filterLawyers}
          />
        </View>

      
        <View style={{width: '100%', height: 100, flexDirection: 'row',
         justifyContent: 'space-around', alignItems: 'center', }}>
          <TouchableOpacity style={styles.lawyerBtn} onPress={() => navigation.navigate('Lawyers/Lawfirms')}><Text style={styles.btnText1}>Lawyers</Text></TouchableOpacity>
          <TouchableOpacity style={styles.lawfirmBtn} onPress={() => navigation.navigate('Lawfirms')}><Text Text style={styles.btnText2}>Lawfirms</Text></TouchableOpacity>
        </View>
        <View style={styles.companyOurteamContianer}>
    
        <View style={styles.contianer}>
        <FlatList
        data={filteredLawyers}
        // data={Lawyers}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.memberContainer}>
            <View style={styles.memberImagebBox}>
            <Image source={{ uri: item.image }} style={styles.memberImage} />
            </View>
            <View style={styles.memberInfoBox}>
            <Text style={styles.memberName}>{item.fullname}</Text>
            <Text style={styles.memberLawType} onPress={() => navigation.navigate('Lawyer Details', { lawyer : item })}>{item.practiceArea}</Text>
            <Text style={styles.memberPrice} onPress={() => navigation.navigate('Lawyer Details', { lawyer : item })}>{item.price}</Text>
            </View>
            <View style={styles.iconBox}>
            <AntDesign name="right" size={20} color={Color.primary} onPress={() => navigation.navigate('Lawyer Details', { lawyer : item })}/>
            </View>
          </View>
        )}
      />
        </View>
      
      </View>
        </View>
     <StatusBar backgroundColor={Color.primary} barStyle="light-content">
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
       //  backgroundColor: Color.secondary,
       backgroundColor: Color.dark,
      //  paddingBottom: 100,
       
    },

    companyOurteamContianer: {
       width: '94%',
       height: '75%',
       alignSelf: 'center',
       borderTopStartRadius: 10,
       borderTopEndRadius: 10, 
       borderBottomStartRadius: 10,
       borderBottomEndRadius: 10, 
       paddingBottom: 100,
      
      },

      ourteamOfferTitleBox: {
       borderTopStartRadius: 10,
       borderTopEndRadius: 10, 
       backgroundColor: Color.grey,
       width: '100%',
       height: '8%',
      },

      ourteamOfferTitle: {
       margin: 15,
       fontWeight: 'bold',
       color: Color.white,
      },

      contianer: {
       flex: 1,
      width: '100%',
      height: '98%',

     },
     heading: {
       marginTop: 45,
       fontWeight: '900',
       fontSize: 25,
     },
     memberContainer: {
       marginTop: 20,
       flexDirection: 'row',
       // marginRight: 15,
       // justifyContent: 'space-evenly',
     },
     memberImagebBox: {
    width: 120,
    height: 85,
     },

     memberImage: {
       width: 90,
       height: 80,
       borderRadius: 5,
       marginLeft: 15,
     },
     memberInfoBox:{
     width: 170,
     height: 85,
   
     },
     iconBox:{
    width: 90,
    height: 85,
    alignItems: 'center',
    paddingRight: 35,  
    paddingTop: 20, 

     },
     memberName: {
       marginTop: 10,
       fontSize: 12,
       fontWeight: 'bold',
       color: Color.white,
     },
     memberLawType: {
       color: Color.white,
       fontSize: 12,
     },
     memberPrice: {
       color: Color.primary,
       fontSize: 12,
     },
  
     lawyerBtn:{
      color: Color.white,
      backgroundColor: Color.primary,
      borderRadius: 20,
      width: 100,
      height: 40,
      alignItems: 'center',
      justifyContent: 'center',
     },
     lawfirmBtn: {
       color: Color.white,
       backgroundColor: Color.white,
       borderRadius: 20,
       width: 100,
      height: 40,
      alignItems: 'center',
      justifyContent: 'center',
     },
     btnText1:{
      color: Color.white,
       textAlign: 'center',
       fontWeight: 'bold',
     },
     btnText2:{
       textAlign: 'center',
       fontWeight: 'bold',
       color: Color.dark,
     },

     searchContainer: {
      paddingHorizontal: 20,
      paddingVertical: 10,
    },
    searchInput: {
      backgroundColor: Color.white,
      borderRadius: 20,
      paddingHorizontal: 20,
      paddingVertical: 10,
    },



});

export default  LawyerScreen;
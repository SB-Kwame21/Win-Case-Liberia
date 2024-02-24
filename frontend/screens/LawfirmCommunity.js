import React, { 
              useState, 
              useEffect } from 'react';

import {View, 
       Text, 
       ImageBackground, 
       SafeAreaView, 
       StyleSheet, 
      TouchableOpacity, 
      ScrollView, 
      Dimensions, 
      StatusBar,  
      FlatList, 
      Image, 
      TextInput } from 'react-native';
  
import { 
       Entypo, 
       Ionicons, 
       MaterialIcons,  
       AntDesign, 
       Foundation, 
      SimpleLineIcons   } from '@expo/vector-icons';
  
import { URL } from './Constants';
import axios from 'axios';
  
import Color from '../Config/Color';
  
import { useNavigation } from '@react-navigation/native';
  
function  LawfirmCommunity() {
    const navigation = useNavigation();
    const [Lawfirms, setLawfirms] = useState([]);
    const [searchQuery, setSearchQuery] = useState('');
    const [filteredLawfirms, setFilteredLawfirms] = useState([]);
  
    useEffect(() => {
      axios.get(`${URL}/all-lawfirms`)
        .then((response) => {
          setLawfirms(response.data);
        })
        .catch((error) => {
          console.error('Error fetching Law firms:', error);
        });
    }, []);
  
  
    const filterLawfirms = (query) => {
      setSearchQuery(query);
      const filtered = Lawfirms.filter(lawfirm =>
        lawfirm.lawfirmName.toLowerCase().includes(query.toLowerCase())
      );
      setFilteredLawfirms(filtered);
    };
  
    return (
      <ImageBackground
      style={styles.background}
      source={require("../assets/back.jpg")}
      resizeMode="cover"
      >
          <View style= {styles.backgroundOpacity}>
           <View style={styles.navContainer}>
           <AntDesign name="left" size={24} color={Color.white} onPress={() => navigation.navigate('Dashboard')}/>
           <Text style={styles.pointHome}>Lawfirms Community</Text>
           </View>
           <View style={styles.searchContainer}>
            <TextInput
              style={styles.searchInput}
              placeholder="Search Lawfirms"
              value={searchQuery}
              onChangeText={filterLawfirms}
            />
          </View>
          <View style={styles.companyOurteamContianer}>
          <View style={styles.contianer}>
          <FlatList
            data={filteredLawfirms}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <View style={styles.memberContainer}>
              <View style={styles.memberImagebBox}>
              <Image source={{ uri: item.logoImage }} style={styles.memberImage} />
              </View>
              <View style={styles.memberInfoBox}>
              <Text style={styles.memberName}>{item.lawfirmName}</Text>
              <Text style={styles.memberLawType}>{item.practiceArea}</Text>
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
      // backgroundColor: '#fff',
      width: '100%',
      height: 50,
      alignItems: 'center',
      flexDirection: 'row',
      margin: 3,
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
         
      },
  
      companyOurteamContianer: {
         width: '94%',
         height: '75%',
         alignSelf: 'center',
         borderTopStartRadius: 10,
         borderTopEndRadius: 10, 
         borderBottomStartRadius: 10,
         borderBottomEndRadius: 10, 
        
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
        backgroundColor: Color.white,
        borderRadius: 20,
        width: 100,
        height: 40,
        alignItems: 'center',
        justifyContent: 'center',
       },
       lawfirmBtn: {
         color: Color.white,
         backgroundColor: Color.primary,
         borderRadius: 20,
         width: 100,
        height: 40,
        alignItems: 'center',
        justifyContent: 'center',
       },
       btnText1:{
          color: Color.dark,
         textAlign: 'center',
         fontWeight: 'bold',
       },
       btnText2:{
         textAlign: 'center',
         fontWeight: 'bold',
         color: Color.white,
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
  
  export default  LawfirmCommunity;
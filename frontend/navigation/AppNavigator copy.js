import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';



import { Entypo, AntDesign, MaterialIcons, Foundation, Zocial, MaterialCommunityIcons, FontAwesome5  } from '@expo/vector-icons';

import ClientDashboardScreen from '../screens/ClientDashboardScreen';
import ClientProfileScreen from '../screens/ClientProfileScreen';
import ClientSignInScreen from '../screens/ClientSignInScreen';
import ClientSignUpScreen from '../screens/ClientSignUpScreen';
import LawyerScreen from '../screens/LawyerScreen';
import ClientServicesScreen from '../screens/ClientServicesScreen';
import UpdatePasswordScreen from '../screens/UpdatePasswordScreen';
import EditProfileScreen from '../screens/EditProfileScreen';
import Color from '../Config/Color';
import Booked from '../screens/Booked';
import LawfirmScreen from '../screens/LawfirmScreen';
import LawyerDetailsScreen from '../screens/LawyerDetailsScreen';
import LawfirmDetailsScreen from '../screens/LawfirmDetailsScreen';
import WelcomeScreen from '../screens/WelcomeScreen';
import LawyerSignIn from '../screens/LawyerSignIn';
import LawyerSignUp from '../screens/LawyerSignUp';
import LawyerDashboard from '../screens/LawyerDashboard';
import LawyerProfileScreen from '../screens/LawyerProfileScreen';
import LawyerNegotiationScreen from '../screens/LawyerNegotiationScreen';
import JoinCommunityAsLawyer from '../screens/JoinCommunityAsLawyer';
import LawyerServiceScreen from '../screens/LawyerServiceScreen';
import EditLawyerProfile from '../screens/EditLawyerProfile';
import UpdateLawyerPassword from '../screens/UpdateLawyerPassword';
import LawfirmSignIn from '../screens/LawfirmSignIn';
import LawfirmSignUp from '../screens/LawfirmSignUp';
import LawfirmDashboard from '../screens/LawfirmDashboard';
import LawfirmProfileScreen from '../screens/LawyerProfileScreen';
import LawfirmServiceScreen from '../screens/LawfirmServiceScreen';
import LawfirmAppointmentScreen from '../screens/LawfirmAppointmentScreen';
import LawfirmNegotiationScreen from '../screens/LawfirmNegotiationScreen';
import EditLawfirmProfile from '../screens/EditLawfirmProfile';
import UpdateLawfirmPassword from '../screens/UpdateLawfirmPassword';
import LawfirmCommunity from '../screens/LawfirmCommunity';
import AppointmentBooking from '../screens/AppointmentBooking';
import ClientAppointment from '../screens/ClientAppointment';
import LawyerAppointmentsScreen from '../screens/LawyerAppointmentsScreen';
import LawyerCommunity from '../screens/LawyerCommunity';
import JoinCommunityAsLawfirm from '../screens/JoinCommunityAsLawfirm';
import LawyerAppointmentDetailScreen from '../screens/LawyerAppointmentDetailScreen';
import ClientAppointmentDetails from '../screens/ClientAppointmentDetails';
import LawfirmAppointmentDetailsScreen from '../screens/LawfirmAppointmentDetailsScreen';






const Drawer = createDrawerNavigator();
const AuthStack = createDrawerNavigator();

const AppNavigator = () => {
    return (
        <NavigationContainer>
            <AuthStack.Navigator
            screenOptions={{
                headerShown: false, 
                  // drawerActiveBackgroundColor: Color.white,
                  drawerActiveTintColor: Color.white,
                  drawerInactiveTintColor: Color.white,
                  drawerStyle: {
                      backgroundColor: Color.secondary,
                  }
              }}
            options={{
                drawerItemStyle: { display: 'none' } 
               }}
            initialRouteName="Welcome" headerMode="none">
              
              <AuthStack.Screen
                    name="Welcome"
                    component={WelcomeScreen}
                    options={{
                        headerShown: false,  
                    }}
                />
                    <AuthStack.Screen
                    name="MainDrawer"
                    component={MainDrawer}
                    options={{
                        headerShown: false,
                        drawerItemStyle: { display: 'none' } 

                    }}
                />

                <AuthStack.Screen
                    name="LawyerMainDrawer"
                    component={LawyerMainDrawer}
                    options={{
                        headerShown: false,
                        drawerItemStyle: { display: 'none' } 

                    }}
                />

            <AuthStack.Screen
                    name="LawfirmMainDrawer"
                    component={LawfirmMainDrawer}
                    options={{
                        headerShown: false,
                        drawerItemStyle: { display: 'none' } 

                    }}
                />
            </AuthStack.Navigator>
        </NavigationContainer>
    );
};

const MainDrawer = () => {
    return (
         <Drawer.Navigator 
    screenOptions={{
      headerShown: false, 
        drawerActiveTintColor: Color.white,
        drawerInactiveTintColor: Color.white,
        drawerStyle: {
            backgroundColor: Color.secondary,
        }
    }}initialRouteName='SignIn'
    >
        
             <Drawer.Screen name="SignIn" component={ClientSignInScreen}
            options={{
                drawerItemStyle: { display: 'none' } 
               }}
            />
               <Drawer.Screen name="SignUp" component={ClientSignUpScreen}
            options={{
                drawerItemStyle: { display: 'none' } 
               }}
            />
        
            <Drawer.Screen name="Profile" component={ClientProfileScreen}
              options={{
                drawerIcon: ({ color, size }) => (
                    <MaterialIcons name="account-circle" size={20} color={Color.primary} />
                ),
              }}
            />
            <Drawer.Screen name="Home" component={ClientDashboardScreen}
                options={{
                    drawerIcon: ({ color, size }) => (
                      <Entypo name="home" size={20} color={Color.primary} />
                    ),
                  }}
            />

     <Drawer.Screen name="Booked" component={Booked}
            options={{
                drawerIcon:({color, size}) => (
                    <Entypo name="shop" size={20} color={Color.primary} />
                ),
             drawerItemStyle: { display: 'none' } 
            }}
            /> 

            <Drawer.Screen name="Lawyers/Lawfirms" component={LawyerScreen} 
              options={{
                drawerIcon:({color, size}) => (
                    <AntDesign name="team" size={20} color={Color.primary}  />
                )
            }}
            /> 
                <Drawer.Screen name="Lawfirms" component={LawfirmScreen} 
              options={{
                drawerIcon:({color, size}) => (
                    <AntDesign name="team" size={20} color={Color.primary}  /> 
                ),
                drawerItemStyle: { display: 'none' }
            }}
            /> 
           
            <Drawer.Screen name="Our Services" component={ClientServicesScreen}
             options={{
                drawerIcon:({color, size}) => (
                    <MaterialIcons name="cleaning-services" size={20} color={Color.primary} />
                )
            }}
            /> 

        <Drawer.Screen name="Appointment Booking" component={AppointmentBooking}
                options={{ 
                    drawerItemStyle: { display: 'none' },
                    headerShown: true, 
                }}
            /> 
         
         <Drawer.Screen name="My Appointments" component={ClientAppointment}
                  options={{
                    drawerIcon:({color, size}) => (
                        <MaterialCommunityIcons name="checkbox-multiple-marked" size={20} color={Color.primary}/>
                    ), 
                    headerShown: true, 
                }}
            />

    <Drawer.Screen name="Appointment Details" component={ClientAppointmentDetails} 
             options={{
                drawerItemStyle: { display: 'none' },
                  headerShown: true, 
               }}
            /> 
        
        <Drawer.Screen name="Lawyer Details" component={LawyerDetailsScreen} 
             options={{
                drawerItemStyle: { display: 'none' } 
               }}
            /> 
             <Drawer.Screen name="Lawfirm Details" component={LawfirmDetailsScreen} 
             options={{
                drawerItemStyle: { display: 'none' } 
               }}
            /> 
            <Drawer.Screen name="Update Password" component={UpdatePasswordScreen} 
             options={{
                drawerItemStyle: { display: 'none' } 
               }}
            /> 
            <Drawer.Screen name="Edit Profile" component={EditProfileScreen} 
            options={{
             drawerItemStyle: { display: 'none' } 
            }}
            /> 
             
        </Drawer.Navigator>
    );
};


const LawyerMainDrawer = () => {
    return (
         <Drawer.Navigator 
    screenOptions={{
      headerShown: false, 
        // drawerActiveBackgroundColor: Color.white,
        drawerActiveTintColor: Color.white,
        drawerInactiveTintColor: Color.white,
        drawerStyle: {
            backgroundColor: Color.secondary,
        }
    }}initialRouteName='LawyerSignIn'
    >
            <Drawer.Screen name="LawyerSignIn" component={LawyerSignIn}
            options={{
                drawerItemStyle: { display: 'none' } 
               }}
            />
                <Drawer.Screen name="LawyerSignUp" component={LawyerSignUp}
            options={{
                drawerItemStyle: { display: 'none' } 
               }}
            />
                  <Drawer.Screen name="Profile" component={LawyerProfileScreen}
                options={{
                    drawerIcon: ({ color, size }) => (
                        <MaterialIcons name="account-circle" size={20} color={Color.primary} />
                    ),
                  }}
            />
                <Drawer.Screen name="Dashboard" component={LawyerDashboard}
                options={{
                    drawerIcon: ({ color, size }) => (
                      <Entypo name="home" size={20} color={Color.primary} />
                    ),
                  }}
            />
                 <Drawer.Screen name="Our Services" component={LawyerServiceScreen}
                options={{
                    drawerIcon: ({ color, size }) => (
                        <MaterialIcons name="cleaning-services" size={20} color={Color.primary} />
                    ),
                  }}
            />

        <Drawer.Screen name="Appointments" component={LawyerAppointmentsScreen}
                options={{
                    drawerIcon: ({ color, size }) => (
                        <MaterialCommunityIcons name="checkbox-multiple-marked" size={20} color={Color.primary}/>
                    ),
                    headerShown: true,
                  }}
            />
           
        <Drawer.Screen name="Appointment Details" component={LawyerAppointmentDetailScreen}
         options={{
            drawerItemStyle: { display: 'none' } ,
            headerShown: true,
           }}
        />
        <Drawer.Screen name="Negotiation" component={LawyerNegotiationScreen}
                options={{
                    drawerIcon: ({ color, size }) => (
                        <FontAwesome5 name="unity" size={20} color={Color.primary}/>
                    ),
                    // drawerItemStyle: { display: 'none' } 
                    // headerShown: true,
                  }}
            />
        <Drawer.Screen name="Join Community" component={JoinCommunityAsLawyer}
               options={{
                drawerItemStyle: { display: 'none' },
                // headerShown: true, 
               }}
            />

<Drawer.Screen name="Community" component={LawyerCommunity}
               options={{
                drawerItemStyle: { display: 'none' },
                // headerShown: true, 
               }}
            />
                   <Drawer.Screen name="Edit Lawyer Profile" component={EditLawyerProfile}
            options={{
                drawerItemStyle: { display: 'none' } 
               }}
            />
                    <Drawer.Screen name="UpdateLawyerPassword" component={UpdateLawyerPassword}
            options={{
                drawerItemStyle: { display: 'none' } 
               }}
            />

    </Drawer.Navigator>
    )};


    const LawfirmMainDrawer = () => {
        return (
             <Drawer.Navigator 
        screenOptions={{
          headerShown: false, 
            // drawerActiveBackgroundColor: Color.white,
            drawerActiveTintColor: Color.white,
            drawerInactiveTintColor: Color.white,
            drawerStyle: {
                backgroundColor: Color.secondary,
            }
        }}initialRouteName='LawfirmSignIn'
        >
             <Drawer.Screen name="LawfirmSignIn" component={LawfirmSignIn}
            options={{
                drawerItemStyle: { display: 'none' } 
               }}
            />

            <Drawer.Screen name="LawfirmSignUp" component={LawfirmSignUp}
            options={{
                drawerItemStyle: { display: 'none' } 
               }}
            />

       <Drawer.Screen name="Profile" component={LawfirmProfileScreen}
                options={{
                    drawerIcon: ({ color, size }) => (
                        <MaterialIcons name="account-circle" size={20} color={Color.primary} />
                    ),
                  }}
            />

        <Drawer.Screen name="Dashboard" component={LawfirmDashboard}
                options={{
                    drawerIcon: ({ color, size }) => (
                      <Entypo name="home" size={20} color={Color.primary} />
                    ),
                  }}
            />
        <Drawer.Screen name="Our Services" component={LawfirmServiceScreen}
                options={{
                    drawerIcon: ({ color, size }) => (
                        <MaterialIcons name="cleaning-services" size={20} color={Color.primary} />
                    ),
                  }}
            />

            
        <Drawer.Screen name="Appointments" component={LawfirmAppointmentScreen}
                options={{
                    drawerIcon: ({ color, size }) => (
                        <MaterialCommunityIcons name="checkbox-multiple-marked" size={20} color={Color.primary}/>
                    ),
                    headerShown: true,
                  }}
            />

<Drawer.Screen name="Appointment Details" component={LawfirmAppointmentDetailsScreen}
                options={{
                    drawerItemStyle: { display: 'none' }, 
                    headerShown: true,
                  }}
            />

        <Drawer.Screen name="Negotiation" component={LawfirmNegotiationScreen}
                options={{
                    drawerIcon: ({ color, size }) => (
                        <FontAwesome5 name="unity" size={20} color={Color.primary}/>
                    ),
                    drawerItemStyle: { display: 'none' } 
                    // headerShown: true,
                  }}
            />




<Drawer.Screen name="Community" component={LawfirmCommunity}
            options={{
                drawerItemStyle: { display: 'none' } ,
                // headerShown: true,
               }}
            />

<Drawer.Screen name="Join Community" component={JoinCommunityAsLawfirm}
            options={{
                drawerItemStyle: { display: 'none' } ,
                // headerShown: true,
               }}
            />

   


<Drawer.Screen name="Edit Lawfirm Profile" component={EditLawfirmProfile}
            options={{
                drawerItemStyle: { display: 'none' } 
               }}
            />

    <Drawer.Screen name="UpdateLawfirmPassword" component={UpdateLawfirmPassword}
            options={{
                drawerItemStyle: { display: 'none' } 
               }}
            />
    
        </Drawer.Navigator>
        )};




export default AppNavigator;

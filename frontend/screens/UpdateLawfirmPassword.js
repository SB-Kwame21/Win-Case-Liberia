import React, { useState, useEffect } from 'react';
import { 
    StyleSheet, 
    Text, 
    View, 
    KeyboardAvoidingView,
    TouchableWithoutFeedback, 
    Keyboard,
    SafeAreaView,
    TextInput,
    TouchableOpacity} from 'react-native'
import Color from '../Config/Color';

function UpdateLawfirmPassword({navigation}) {
  const [userName, setUserName] = useState('');
  const [password, setpassword] = useState('');

  const handlePasswordUpdate = () => {
      // Handle update passoword here
      console.log('Task created:', { userName, password });
  };
  return (
    <KeyboardAvoidingView behavior='padding'
        keyboardVerticalOffset={Platform.OS === 'ios' ? 50 : 70}
        style={styles.container}
    >
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <SafeAreaView
                SafeAreaView showsVerticalScrollIndicator={false}
                style={{ paddingTop: 130, paddingHorizontal: 35, }}
            >
                <Text style={styles.signInText}>Update Your Password</Text>

                <View style={styles.form}>
                    <TextInput
                        style={styles.input}
                        placeholder="username"
                        placeholderTextColor={Color.white}
                        value={userName}
                        onChangeText={(text) => setUserName(text)}
                    />

                    <TextInput
                        style={styles.input}
                        placeholder="Password"
                        placeholderTextColor={Color.white}
                        value={password}
                        onChangeText={(text) => setpassword(text)}
                    />

                    <TouchableOpacity style={styles.addButton}
                        onPress={handlePasswordUpdate}
                    >
                        <Text style={styles.buttonText}>Update Password</Text>
                    </TouchableOpacity>
                </View>
            </SafeAreaView>
        </TouchableWithoutFeedback>
    </KeyboardAvoidingView>

)
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: Color.dark, 

},
signInText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: Color.primary, 
    marginBottom: 20,
    alignSelf: "center"

},
form: {
    justifyContent: "space-between",
    alignContent: "center"
},
input: {
    height: 40,
    width: '100%',
    borderColor: Color.primary, // Input border color
    borderWidth: 1,
    borderRadius: 5,
    marginTop: 15,
    paddingHorizontal: 10,
    color: Color.white,
},

option: {
    flexDirection: 'row',
    justifyContent: "space-between"
},

optionText: {
    color: '#fff',
},

addButton: {
    backgroundColor: Color.primary,
    padding: 13,  // All sides are 10
    marginTop: 30,
    width: '100%',
    alignSelf: 'center',
    marginBottom: 20,
    
},
buttonText: {
    color: Color.white,
    fontWeight: 'bold',
    textAlign: 'center',
},


})


export default UpdateLawfirmPassword;
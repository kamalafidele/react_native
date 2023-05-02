import React, { useState } from 'react';
import { Image, StyleSheet, View } from 'react-native';
import AppInputText from '../AppInputText';
import AppButton from '../AppButton';

function LoginScreen(props) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    function handleLogin() {
        console.log(`Email: ${email}  Password: ${password}`);
    }

    return (
        <View>
            <Image style={styles.logo} source={require("../../assets/logo_2.jpg")}/>
            <View style={styles.formContainer}>
                <AppInputText 
                placeholder='Email' 
                iconName={'email'} 
                autoCorrect={false} 
                autoCapitalize='none'
                keyboardType='email-address'
                value={email}
                onChangeText={text => setEmail(text)}/>

                <AppInputText 
                placeholder='Password' 
                iconName={'lock'} 
                autoCorrect={false} 
                autoCapitalize='none'
                secureTextEntry={true}
                value={password}
                onChangeText={text => setPassword(text)}/>

                <AppButton title={'Login'} onPress={() => handleLogin()}/>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {

    },
    logo: {
        width: 80,
        height: 80,
        alignSelf: 'center',
        marginVertical: 40,
        borderRadius: 20
    },
    formContainer: {
        padding: 10
    }
})
export default LoginScreen;
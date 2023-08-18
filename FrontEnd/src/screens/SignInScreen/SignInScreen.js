import React, {useState} from 'react'
import {View, Text, Image, StyleSheet, useWindowDimensions, ScrollView} from 'react-native'
import Logo from '../../../assets/images/logo/android-chrome-512x512.png'
import CustomInput from '../../components/CustomInput/CustomInput';
import CustomButton from '../../components/CustomButton';
import SocialSignInButton from '../../components/SocialSignInButton';
import { useNavigation } from '@react-navigation/native';

const SignInScreen =() => {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const {height} = useWindowDimensions();
    const navigation = useNavigation();

    const onSignedInPressed = () => {
        // Validate the user
        navigation.navigate('Home');
    };

    const onForgotPasswordPressed = () => {
        navigation.navigate('ForgotPassword');
    };
    const onSignUpPressed = () => {
        console.warn('Sign Up Pressed');
        navigation.navigate('SignUp');
    };

    return(
        <ScrollView showsVerticalScrollIndicator={false}>
            <View style={styles.root}>
                <Image 
                source={Logo} 
                style ={[styles.logo, {height: height * 0.3}]} 
                resizeMode='contain' 
                />

                <CustomInput 
                placeHolder='Username' 
                value={username} 
                setValue={setUsername}
                />
                <CustomInput  
                placeHolder='Password' 
                vallue={password} 
                setValue= {setPassword}
                secureTextEntry
                />

                <CustomButton 
                text={'Sign In'}
                onPress={onSignedInPressed}
                type='PRIMARY'
                />

                <CustomButton 
                text={'Forgot Password?'}
                onPress={onForgotPasswordPressed}
                type='TERTIARY'
                />

                <SocialSignInButton />

                <CustomButton 
                text={"Don't have an account? Sign Up"}
                onPress={onSignUpPressed}
                type='TERTIARY'
                />
            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    root: {
        alignItems: 'center',
        padding: 15,
    },
    logo: {
        width: '50%',
        maxWidth: 300,
        maxHeight: 200,
    },
})
export default SignInScreen
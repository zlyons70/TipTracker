import React from 'react'
import {View, Text, Image, StyleSheet, useWindowDimensions} from 'react-native'
import Logo from '../../../assets/images/logo/android-chrome-512x512.png'
import CustomInput from '../../components/CustomInput';

const SignInScreen =() => {
    const {height} = useWindowDimensions();
    return(
        <View style={styles.root}>
            <Image 
            source={Logo} 
            style ={[styles.logo, {height: height * 0.3}]} 
            resizeMode='contain' 
            />

            <CustomInput placeHolder='Username'/>
            <CustomInput  placeHolder='Password'/>
        </View>
    );
};

const styles = StyleSheet.create({
    root: {
        alignItems: 'center',
        padding: 15,
    },
    logo: {
        width: '40%',
        maxWidth: 300,
        maxHeight: 200,
    },
})
export default SignInScreen
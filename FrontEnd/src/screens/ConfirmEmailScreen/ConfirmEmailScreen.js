import React, {useState} from 'react'
import {View, Text, StyleSheet, useWindowDimensions, ScrollView} from 'react-native'
import CustomInput from '../../components/CustomInput';
import CustomButton from '../../components/CustomButton';
import SocialSignInButton from '../../components/SocialSignInButton/SocialSignInButton';
import { useNavigation } from '@react-navigation/native';

const ConfirmEmailScreen =() => {

    const [code, setCode] = useState('');

    const navigation = useNavigation();


    const onConfirmPressed = () => {
        navigation.navigate('Home');
    };

    const onBackToSignInPressed = () => {
        navigation.navigate('SignIn');
    };

    const onResendCodePressed = () => {
        console.warn('onResendCodePressed');
    };


    return(
        <ScrollView showsVerticalScrollIndicator={false}>
            <View style={styles.root}>
                <Text style = {styles.title}>Confirm Your Email</Text>

                <CustomInput 
                placeHolder='Enter the code emailed to you' 
                value={code} 
                setValue={setCode}
                />

                <CustomButton 
                text={'Confirm'}
                onPress={onConfirmPressed}
                type='PRIMARY'
                />

                <CustomButton 
                text={"Resend Code to Email"}
                onPress={onResendCodePressed}
                type='SECONDARY'
                />
                <CustomButton 
                text={"Back to Sign In"}
                onPress={onBackToSignInPressed}
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
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        color: "#051C60",
        margin: 10,
    },
    link: {
        color: "#FDB075",

    }
});
export default ConfirmEmailScreen;
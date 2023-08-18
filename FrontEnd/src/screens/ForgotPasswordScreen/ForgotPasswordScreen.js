import React, {useState} from 'react'
import {View, Text, StyleSheet, useWindowDimensions, ScrollView} from 'react-native'
import CustomInput from '../../components/CustomInput';
import CustomButton from '../../components/CustomButton';
import SocialSignInButton from '../../components/SocialSignInButton/SocialSignInButton';

const ForgotPasswordScreen =() => {

    const [username, setUsername] = useState('');


    const onSendCodePressed = () => {
        console.warn('onSendCodePressed');
    };

    const onBackToSignInPressed = () => {
        console.warn('onBackToSignInPressed');
    };

    const onResendCodePressed = () => {
        console.warn('onResendCodePressed');
    };


    return(
        <ScrollView showsVerticalScrollIndicator={false}>
            <View style={styles.root}>
                <Text style = {styles.title}>Reset your password</Text>

                <CustomInput 
                placeHolder='Username' 
                value={username} 
                setValue={setUsername}
                />

                <CustomButton 
                text={'Send'}
                onPress={onSendCodePressed}
                type='PRIMARY'
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
export default ForgotPasswordScreen;
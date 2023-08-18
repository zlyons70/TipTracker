import React, {useState} from 'react'
import {View, Text, StyleSheet, useWindowDimensions, ScrollView} from 'react-native'
import CustomInput from '../../components/CustomInput';
import CustomButton from '../../components/CustomButton';
import { useNavigation } from '@react-navigation/native';

const NewPasswordScreen =() => {

    const [code, setCode] = useState('');
    const [newPassword, setNewPassword] = useState('');

    const navigation = useNavigation();


    const onSubmitPressed = () => {
        navigation.navigate('Home');
    };

    const onBackToSignInPressed = () => {
        navigation.navigate('SignIn');
    };


    return(
        <ScrollView showsVerticalScrollIndicator={false}>
            <View style={styles.root}>
                <Text style = {styles.title}>Reset your password</Text>

                <CustomInput 
                placeHolder='New Password' 
                value={code} 
                setValue={setCode}
                />
                <CustomInput 
                placeHolder='Enter your new password' 
                value={newPassword} 
                setValue={setNewPassword}
                />
                <CustomButton 
                text={'Submit'}
                onPress={onSubmitPressed}
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
export default NewPasswordScreen;
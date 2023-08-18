import React, {useState} from 'react'
import {View, Text, StyleSheet, useWindowDimensions, ScrollView} from 'react-native'
import CustomInput from '../../components/CustomInput';
import CustomButton from '../../components/CustomButton';
import SocialSignInButton from '../../components/SocialSignInButton/SocialSignInButton';
import { useNavigation } from '@react-navigation/native';

const SignUpScreen =() => {

    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [passwordConfirmation, setPasswordConfirmation] = useState('');

    const {height} = useWindowDimensions();
    
    const navigation = useNavigation();

    const onSignInPressed = () => {
        navigation.navigate('SignIn');
    };

    const onRegisterPressed = () => {
        navigation.navigate('ConfirmEmail');
    };

    const onTermsOfUsePressed = () => {
        console.warn('onTermsOfUsePressed');
    };

    const onPrivacyPolicyPressed = () => {
        console.warn('onPrivacyPolicyPressed');
    };

    return(
        <ScrollView showsVerticalScrollIndicator={false}>
            <View style={styles.root}>
                <Text style = {styles.title}>Create an Account</Text>

                <CustomInput 
                placeHolder='Username' 
                value={username} 
                setValue={setUsername}
                />
                <CustomInput 
                placeHolder='Email'
                value={email} 
                setValue={setEmail}
                />
                <CustomInput  
                placeHolder='Password' 
                vallue={password} 
                setValue= {setPassword}
                secureTextEntry
                />
                <CustomInput  
                placeHolder='Repeat Password'
                vallue={passwordConfirmation} 
                setValue= {setPasswordConfirmation}
                secureTextEntry
                />
                <CustomButton 
                text={'Create Account'}
                onPress={onRegisterPressed}
                />
                <Text>By registering, you confirm that you accept our
                    <Text style = {styles.link} onPress={onTermsOfUsePressed}> Terms of Use </Text> 
                    and
                    <Text style = {styles.link} onPress={onPrivacyPolicyPressed}> Privacy Policy</Text> 
                </Text>

                <SocialSignInButton />

                <CustomButton 
                text={"Already have an account? Sign In"}
                onPress={onSignInPressed}
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
export default SignUpScreen;
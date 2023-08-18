import React from "react";
import {View, Text} from "react-native";
import CustomButton from "../CustomButton/CustomButton";


const onSignInGoogle = () => {
    console.warn('Sign In Google Pressed');
};

const onSignInApple = () => {
    console.warn('Sign In Apple Pressed');
};

const SocialSignInButton = () => {
    return (
        <>
            <CustomButton 
            text={'Google Sign In'}
            onPress={onSignInGoogle}
            bgColor={'#FAE9EA'}
            fgColor={'red'}
            />

            <CustomButton 
            text={'Apple Sign In'}
            onPress={onSignInApple}
            bgColor={'#e3e3e3'}
            fgColor={'black'}
                />
        </>
    );
};

export default SocialSignInButton;
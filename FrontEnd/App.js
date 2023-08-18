/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {
  ImageBackground,
  SafeAreaView,
  StyleSheet,
  Text,
} from 'react-native';

import SignInScreen from './src/screens/SignInScreen/';
import SignUpScreen from './src/screens/SignUpScreen/SignUpScreen';
import ConfirmEmailScreen from './src/screens/ConfirmEmailScreen';
import ForgotPasswordScreen from './src/screens/ForgotPasswordScreen';
import NewPasswordScreen from './src/screens/NewPasswordScreen';


const App = () => {
  return (
    <SafeAreaView style={styles.root}>
      <NewPasswordScreen />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backroundColor: '#F9FBFC'
  }
});

export default App;

// AddVehicle.js
//
// Implement UI for adding a vehicle

import React from 'react'
import { StyleSheet, SafeAreaView, View, TouchableOpacity, TextInput } from 'react-native';
import { Divider, Input, Button } from 'react-native-elements';

import { NavigationContainer, DefaultTheme, DarkTheme, useTheme } from '@react-navigation/native';
import { AppearanceProvider, useColorScheme } from 'react-native-appearance';

import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { AddVehicleAction } from '../actions'
import { connect } from 'react-redux'
import { Formik } from 'formik';

const MyForm = () =>
  <Formik
   initialValues={{
     username: '',
     password: ''
    }}
    onSubmit={(values, actions) => {}}
    validate={values => {}} >
    {props => (
     <>
       <Input
         placeholder={"User name"}
         label="User name"
         value={props.values.username}
         inputStyle={styles.inputtext}
         onBlur={props.handleBlur('username')}
         onChangeText={props.handleChange('username')}
         autoCapitalize='none'
         autoCorrect={false}
         autoCompleteType='username'
       />
       <Input
         placeholder={"Password"}
         label="Password"
         value={props.values.password}
         inputStyle={styles.inputtext}
         onBlur={props.handleBlur('password')}
         onChangeText={props.handleChange('password')}
         autoCapitalize='none'
         autoCorrect={false}
         autoCompleteType='password'
         secureTextEntry={true}
       />
      <Button
         title='Submit'
         type='outline'
         onPress={() => props.handleSubmit()} />
     </>
   )}
  </Formik>

const AddVehicle = ({ dispatch }) => {
  const scheme = useColorScheme();
  const { colors } = useTheme();

  return (
    <SafeAreaView
     style={styles.container} >
      <KeyboardAwareScrollView contentContainerStyle={styles.container}>
         <Divider />
         <MyForm />
      </KeyboardAwareScrollView>
    </SafeAreaView>
  )
}

export default connect()(AddVehicle)

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  inputtext: {
    color: 'white',
    flex: 1
   }
  });


// if (!input.value.trim()) { return }
//        dispatch(AddVehicleAction(input.value))
// input.value = ''

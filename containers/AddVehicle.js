// AddVehicle.js
//
// Implement UI for adding a vehicle

import React from 'react'
import { StyleSheet, SafeAreaView, View, TouchableOpacity, TextInput } from 'react-native';
import { Divider, Input, Button } from 'react-native-elements';
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
         style={styles.inputtext}
         value={props.values.username}
         onBlur={props.handleBlur('username')}
         onChangeText={props.handleChange('username')}
         autoCapitalize='none'
         autoCorrect={false}
         autoCompleteType='username'
       />
       <Input
         placeholder={"Password"}
         label="Password"
         style={styles.inputtext}
         value={props.values.password}
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
  let input

  return (
    <SafeAreaView style={styles.container}>
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
    flex: 1,
    backgroundColor: '#fafafa'
  },
  inputtext: {
    color: 'black'
  }
  });


// if (!input.value.trim()) { return }
//        dispatch(AddVehicleAction(input.value))
// input.value = ''

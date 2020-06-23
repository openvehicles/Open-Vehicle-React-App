// AddVehicle.js
//
// Implement UI for adding a vehicle

import React from 'react'
import { StyleSheet, View, TouchableOpacity, TextInput } from 'react-native';
import { AddVehicleAction } from '../actions'
import { connect } from 'react-redux'

const AddVehicle = ({ dispatch }) => {
  let input

  return (
    <View>
    <TextInput placeholder = "Vehicle ID"
              placeholderTextColor = "#9a73ef"
              autoCapitalize = "none"
              style={styles.inputtext} />
    </View>
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

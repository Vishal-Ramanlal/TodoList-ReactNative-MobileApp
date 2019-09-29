import React, {Component} from 'react';
import {StyleSheet, View, Text} from 'react-native';
import MaterialHelperTextBox from './buttons/MaterialHelperTextBox';
import MaterialHelperTextBox1 from './buttons/MaterialHelperTextBox1';
import {Center} from '@builderx/utils';
import MaterialButtonPrimary from './buttons/MaterialButtonPrimary';

export default class Login extends Component {
  render() {
    return (
      <View style={styles.container}>
        <MaterialHelperTextBox
          inputStyle={'Email@email.com'}
          label={' '}
          helper={' '}
          style={styles.materialHelperTextBox}
        />
        <MaterialHelperTextBox1
          label={' '}
          helper={' '}
          inputStyle={'Password'}
          style={styles.materialHelperTextBox1}
        />
        <Center horizontal>
          <Text style={styles.text}>Login</Text>
        </Center>
        <MaterialButtonPrimary
          caption={'Login'}
          style={styles.materialButtonPrimary}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  materialHelperTextBox: {
    top: 230.21,
    left: 50,
    width: 286.6,
    height: 90,
    position: 'absolute',
  },
  materialHelperTextBox1: {
    top: 331.08,
    left: 50,
    width: 286.6,
    height: 90,
    position: 'absolute',
  },
  text: {
    top: 132.46,
    width: 250.36,
    height: 50,
    color: '#121212',
    position: 'absolute',
    fontSize: 45,
    fontFamily: 'arial-regular',
    textAlign: 'center',
  },
  materialButtonPrimary: {
    top: 464.19,
    left: 50,
    width: 286.6,
    height: 57.84,
    position: 'absolute',
  },
});

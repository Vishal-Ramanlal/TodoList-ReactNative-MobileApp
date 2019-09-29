import React, {Component} from 'react';
import {StyleSheet, View, Text} from 'react-native';
import {Center} from '@builderx/utils';
import MaterialButtonPrimary from './buttons/MaterialButtonPrimary';
import {connect} from 'react-redux';
import {emailChanged, passwordChanged, loginUser} from '../actions';
import {Card, CardSection, Input, Button, Spinner} from './common';
import {Actions} from 'react-native-router-flux';

class LoginForm extends Component {
  onEmailChange(text) {
    this.props.emailChanged(text);
  }

  onPasswordChange(text) {
    this.props.passwordChanged(text);
  }

  onButtonPress() {
    const {email, password} = this.props;

    this.props.loginUser({email, password});
  }

  renderButton() {
    if (this.props.loading) {
      return <Spinner size="large" />;
    }
    return (
      <MaterialButtonPrimary
        caption={'Login'}
        style={styles.materialButtonPrimary}
        action={this.onButtonPress.bind(this)}
      />
    );
  }
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.rect} />
        <Center horizontal>
          <Text style={styles.text}>Login</Text>
        </Center>
        <Center horizontal>{this.renderButton()}</Center>
        <Center horizontal>
          <Input
            style={styles.materialUnderlineTextbox}
            label="Email"
            placeholder="email@gmail.com"
            onChangeText={this.onEmailChange.bind(this)}
            value={this.props.email}
          />
        </Center>
        <Center horizontal>
          <Input
            style={styles.materialUnderlineTextbox2}
            secureTextEntry
            label="Password"
            placeholder="password"
            onChangeText={this.onPasswordChange.bind(this)}
            value={this.props.password}
          />
        </Center>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  rect: {
    top: 371.68,
    left: 0,
    width: 375,
    height: 440.32,
    backgroundColor: 'rgba(230, 230, 230,1)',
    position: 'absolute',
  },
  text: {
    top: 86.71,
    width: 228.52,
    height: 55.2,
    color: '#121212',
    position: 'absolute',
    fontSize: 45,
    fontFamily: 'arial-regular',
    textAlign: 'center',
  },
  materialButtonPrimary: {
    top: 348.16,
    width: 286.6,
    height: 57.84,
    position: 'absolute',
  },
  materialUnderlineTextbox: {
    top: 163.66,
    width: 317.36,
    height: 43,
    position: 'absolute',
  },
  materialUnderlineTextbox2: {
    top: 243.73,
    width: 317.36,
    height: 43,
    position: 'absolute',
  },
});
const mapStateToProps = ({auth}) => {
  const {email, password, error, loading} = auth;

  return {email, password, error, loading};
};

export default connect(
  mapStateToProps,
  {
    emailChanged,
    passwordChanged,
    loginUser,
  },
)(LoginForm);

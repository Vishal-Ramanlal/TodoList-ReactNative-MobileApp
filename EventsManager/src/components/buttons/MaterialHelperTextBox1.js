import React, {Component} from 'react';
import {StyleSheet, View, Text, TextInput} from 'react-native';

export default class MaterialHelperTextBox1 extends Component {
  render() {
    return (
      <View style={[styles.root, this.props.style]}>
        <Text style={styles.label}>{this.props.label || 'StackedLabel'}</Text>
        <TextInput
          placeholder={this.props.inputStyle || 'Input'}
          style={styles.inputStyle}
        />
        <Text style={styles.helper}>{this.props.helper || 'Helper text'}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: '#c3dddc',
  },
  label: {
    color: '#000',
    opacity: 0.6,
    paddingTop: 16,
    fontSize: 12,
    fontFamily: 'roboto-regular',
    textAlign: 'left',
  },
  inputStyle: {
    width: '100%',
    flex: 1,
    color: '#000',
    alignSelf: 'stretch',
    paddingTop: 8,
    paddingBottom: 8,
    borderColor: '#D9D5DC',
    borderBottomWidth: 1,
    fontSize: 16,
    fontFamily: 'roboto-regular',
    lineHeight: 16,
  },
  helper: {
    color: '#000',
    opacity: 0.6,
    paddingTop: 8,
    fontSize: 12,
    fontFamily: 'roboto-regular',
    textAlign: 'left',
  },
});

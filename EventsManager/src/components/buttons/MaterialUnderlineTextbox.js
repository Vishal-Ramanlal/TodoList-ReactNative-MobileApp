import React, {Component} from 'react';
import {StyleSheet, View, TextInput} from 'react-native';

export default class MaterialUnderlineTextbox extends Component {
  render() {
    return (
      <View style={[styles.root, this.props.style]}>
        <TextInput
          placeholder={'Placeholder'}
          editable={false}
          style={styles.inputStyle}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: '#aad7dd',
    flexDirection: 'row',
    alignItems: 'center',
    borderColor: '#D9D5DC',
    borderBottomWidth: 1,
  },
  inputStyle: {
    flex: 1,
    color: '#000',
    alignSelf: 'stretch',
    paddingTop: 16,
    paddingRight: 5,
    paddingBottom: 8,
    fontSize: 16,
    fontFamily: 'roboto-regular',
    lineHeight: 16,
  },
});

import React, {Component} from 'react';
import {StyleSheet, View, TextInput} from 'react-native';
import Icon from '@builderx/icons';

export default class MaterialIconTextbox extends Component {
  constructor(props) {
    super(props);

  }
  textUpdater(val) {
    this.props.func(val);
  }
  render() {
    return (
      <View style={[styles.root, this.props.style]}>
        <TextInput
          placeholder={this.props.label}
          style={styles.inputStyle}
          onChangeText={todoitem => this.textUpdater(todoitem)}
          value={this.props.todoitem}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: 'transparent',
    flexDirection: 'row',
    alignItems: 'center',
  },
  textStyle: {
    color: '#616161',
    fontFamily: 'roboto-regular',
    fontSize: 24,
    paddingLeft: 8,
  },
  inputStyle: {
    flex: 1,
    color: '#000',
    alignSelf: 'stretch',
    marginLeft: 16,
    paddingTop: 14,
    paddingRight: 5,
    paddingBottom: 8,
    borderColor: '#000000',
    borderBottomWidth: 1,
    fontSize: 16,
    fontFamily: 'roboto-regular',
    lineHeight: 16,
  },
});

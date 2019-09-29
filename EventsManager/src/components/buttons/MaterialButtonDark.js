import React, {Component} from 'react';
import {StyleSheet, TouchableOpacity, Text} from 'react-native';
import {Actions} from 'react-native-router-flux';

export default class MaterialButtonDark extends Component {
  constructor(props){
    super(props);
  }
  handlePress = () => {
    // Need to check to prevent null exception.
    this.props.onPress?.(); // Same as this.props.onPress && this.props.onPress();
  }
  render() {
    return (
      <TouchableOpacity
        style={[styles.root, this.props.style]}
        onPress={this.handlePress}>
        <Text style={styles.caption}>{this.props.caption || 'BUTTON'}</Text>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: '#212121',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingRight: 16,
    paddingLeft: 16,
    elevation: 2,
    minWidth: 88,
    borderRadius: 2,
    shadowOffset: {
      height: 1,
      width: 0,
    },
    shadowColor: '#000',
    shadowOpacity: 0.35,
    shadowRadius: 5,
  },
  caption: {
    color: '#fff',
    fontSize: 14,
    fontFamily: 'roboto-regular',
    fontWeight: '200',
  },
});

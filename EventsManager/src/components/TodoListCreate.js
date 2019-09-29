import React, {Component} from 'react';
import {Dimensions, StyleSheet, View} from 'react-native';
import {DatePicker, Text, Content} from 'native-base';
import {Center} from '@builderx/utils';
import MaterialIconTextbox from './buttons/MaterialIconTextbox';
import MaterialButtonDark from './buttons/MaterialButtonDark';
import {Actions} from 'react-native-router-flux';

export default class TodoListCreate extends Component {
  passInstruction = () => {
    // Do what you want.
    this.onButtonPress.bind(this);
  };

  onButtonPress() {
    const {todoitem, isdone} = this.props;
    const {chosenDate} = this.state;
    this.props.todoCreate({todoitem, isdone, chosenDate});
  }
  func = val => {
    this.props.todoItem = val;
    this.isdone = false;
  };
  constructor(props) {
    super(props);
    this.state = {chosenDate: new Date()};
    this.setDate = this.setDate.bind(this);
  }
  setDate(newDate) {
    this.setState({chosenDate: newDate});
  }
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.rect} />
        <MaterialIconTextbox
          label={'Event Name'}
          style={styles.materialIconTextbox}
          func={this.func}
        />
        <Content style={styles.materialIconTextbox2}>
          <DatePicker
            locale={'en'}
            timeZoneOffsetInMinutes={undefined}
            modalTransparent={false}
            animationType={'fade'}
            androidMode={'default'}
            placeHolderText="Select date"
            textStyle={{color: 'green'}}
            placeHolderTextStyle={{color: '#d3d3d3'}}
            onDateChange={this.setDate}
            disabled={false}
          />
        </Content>
        <Text style={styles.text}>
          {' '}
          Date:{this.state.chosenDate.toString().substr(4, 12)}
        </Text>
        <Center horizontal>
          <MaterialButtonDark
            caption={'Create'}
            onPress={this.passInstruction}
            style={styles.materialButtonDark}
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
    top: 0,
    left: '0%',
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
    backgroundColor: 'rgba(229,196,196,1)',
    position: 'absolute',
  },
  materialIconTextbox: {
    top: 137.66,
    left: '0%',
    width: 375,
    height: 43,
    position: 'absolute',
  },
  materialIconTextbox2: {
    top: 206.66,
    paddingLeft: 16,
    width: 375,
    height: 43,
    position: 'absolute',
    backgroundColor: 'rgb(0,0,0)',
  },
  text: {
    top: 270,
    left: 0,
    width: 375,
    height: 43,
    position: 'absolute',
    backgroundColor: 'rgb(213,179,179)',
  },
  materialButtonDark: {
    top: 318.6,
    width: 277.82,
    height: 51.6,
    position: 'absolute',
  },
});

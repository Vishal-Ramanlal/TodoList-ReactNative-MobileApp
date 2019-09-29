import React, {Component} from 'react';
import {Dimensions, StyleSheet, View, Image, Text} from 'react-native';
import {Center} from '@builderx/utils';
import MaterialButtonDark from './buttons/MaterialButtonDark';
import MaterialButtonDark1 from './buttons/MaterialButtonDark1';
import {Actions} from 'react-native-router-flux';

export default class Home extends Component {
  passInstruction = () => {
    // Do what you want.
    Actions.register();
  }
  render() {
    return (
      <View style={styles.container}>
        <Center horizontal>
          <View style={styles.rect} />
        </Center>
        <Center horizontal>
          <Image
            source={require('../assets/images/TxRJ8Ij__400x400.png')}
            resizeMode={'contain'}
            style={styles.image}
          />
        </Center>
        <Center horizontal>
          <MaterialButtonDark
            caption={'Register'}
            style={styles.materialButtonDark}
            onPress={this.passInstruction}
            //action={this.passInstruction()}
          />
        </Center>
        <Center horizontal>
          <MaterialButtonDark1
            caption={'Login'}
            style={styles.materialButtonDark1}
          />
        </Center>
        <Center horizontal>
          <Text style={styles.text}>Or</Text>
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
    top: 220,
    width: Dimensions.get('window').width,
    height: 406,
    backgroundColor: 'rgba(230, 230, 230,1)',
    position: 'absolute',
  },
  image: {
    top: 10,
    width: 200,
    height: 200,
    position: 'absolute',
  },
  materialButtonDark: {
    top: 420,
    width: 315.25,
    height: 59.92,
    position: 'absolute',
  },
  materialButtonDark1: {
    top: 300,
    width: 315,
    height: 60,
    position: 'absolute',
  },
  text: {
    top: 380,
    color: '#121212',
    position: 'absolute',
  },
});

import React, {Component} from 'react';
import {StyleSheet, View, Text, Image, TouchableOpacity} from 'react-native';
import {Actions} from 'react-native-router-flux';
import {connect} from 'react-redux';
import {todoDelete, todoSave, todoUpdate} from '../../actions';

export class MaterialCardWithImageAndTitle extends Component {
  onRowPress() {
    Actions.todoEdit({todo: this.props.todo});
  }
  onRowPress1() {
    let {todoitem, todoDescription, isdone} = this.props.todo;
    isdone = !isdone;
    this.props.todoSave({
      todoitem,
      todoDescription,
      isdone,
      uid: this.props.todo.uid,
    });
  }
  render() {
    const {todoitem, todoDescription} = this.props.todo;
    const {timeDate} = this.props.todo;
    const {isdone} = this.props.todo;
    const style1 = styles.root;
    const style2 = styles.root2;
    let style;
    if (!isdone) {
      style = style1;
    } else {
      style = style2;
    }
    return (
      <View style={style}>
        <View style={styles.cardBody}>
          <View style={styles.bodyContent}>
            <Text style={styles.titleStyle}>{todoitem}</Text>
            <Text style={styles.subtitleStyle}>{todoDescription}</Text>
          </View>
          <Image
            source={require('../../assets/images/TxRJ8Ij__400x400.png')}
            style={styles.cardItemImagePlace}
          />
        </View>
        <View style={styles.actionBody}>
          <TouchableOpacity style={styles.actionButton1}>
            <Text
              style={styles.actionText1}
              onPress={this.onRowPress.bind(this)}>
              Edit
            </Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.actionButton2}>
            <Text
              style={styles.actionText2}
              onPress={this.onRowPress1.bind(this)}>
              Completed
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: '#FFF',
    flexWrap: 'nowrap',
    elevation: 3,
    borderRadius: 2,
    borderColor: '#CCC',
    borderWidth: 1,
    shadowOffset: {
      height: 2,
      width: -2,
    },
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 1.5,
    overflow: 'hidden',
  },
  root2: {
    flex: 1,
    backgroundColor: '#62ff72',
    flexWrap: 'nowrap',
    elevation: 3,
    borderRadius: 2,
    borderColor: '#CCC',
    borderWidth: 1,
    shadowOffset: {
      height: 2,
      width: -2,
    },
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 1.5,
    overflow: 'hidden',
  },
  cardBody: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  bodyContent: {
    flex: 1,
    padding: 16,
    paddingTop: 24,
  },
  titleStyle: {
    color: '#000',
    paddingBottom: 12,
    fontSize: 24,
    fontFamily: 'roboto-regular',
  },
  subtitleStyle: {
    color: '#000',
    opacity: 0.5,
    fontSize: 14,
    fontFamily: 'roboto-regular',
    lineHeight: 16,
  },
  cardItemImagePlace: {
    width: 80,
    height: 80,
    backgroundColor: '#ccc',
    margin: 16,
  },
  actionBody: {
    flexDirection: 'row',
    padding: 8,
  },
  actionButton1: {
    height: 36,
    padding: 8,
  },
  actionText1: {
    color: '#000',
    opacity: 0.9,
    fontSize: 14,
  },
  actionButton2: {
    height: 36,
    padding: 8,
  },
  actionText2: {
    color: '#000',
    opacity: 0.9,
    fontSize: 14,
  },
});

const mapStateToProps = state => {
  const {todoitem, todoDescription, isdone} = state.todoForm;

  return {todoitem, todoDescription, isdone};
};

export default connect(
  mapStateToProps,
  {
    todoUpdate,
    todoSave,
    todoDelete,
  },
)(MaterialCardWithImageAndTitle);

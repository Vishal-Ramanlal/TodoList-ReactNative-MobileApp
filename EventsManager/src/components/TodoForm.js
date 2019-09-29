import React, {Component} from 'react';
import {View, Text, DatePickerIOS} from 'react-native';
import {connect} from 'react-redux';
import {todoUpdate} from '../actions';
import {CardSection, Input} from './common';

class TodoForm extends Component {
  render() {
    return (
      <View>
        <CardSection>
          <Input
            label="Todo"
            placeholder="Todo Item"
            value={this.props.todoitem}
            onChangeText={value =>
              this.props.todoUpdate({prop: 'todoitem', value})
            }
          />
        </CardSection>
        <CardSection>
          <Input
            label="TodoDes"
            placeholder="Todo Item Description"
            value={this.props.todoDescription}
            onChangeText={value =>
              this.props.todoUpdate({prop: 'todoDescription', value})
            }
          />
        </CardSection>
      </View>
    );
  }
}

const mapStateToProps = state => {
  const {todoitem, todoDescription, isdone} = state.todoForm;

  return {todoitem, todoDescription, isdone};
};

export default connect(
  mapStateToProps,
  {todoUpdate},
)(TodoForm);

import React, {Component} from 'react';
import {connect} from 'react-redux';
import {todoUpdate, todoCreate} from '../actions';
import {Card, CardSection, Button} from './common';
import TodoForm from './TodoForm';

class TodoCreate extends Component {
  onButtonPress() {
    const {todoitem, todoDescription, isdone} = this.props;

    this.props.todoCreate({todoitem, todoDescription, isdone});
  }

  render() {
    return (
      <Card>
        <TodoForm {...this.props} />
        <CardSection>
          <Button onPress={this.onButtonPress.bind(this)}>Create</Button>
        </CardSection>
      </Card>
    );
  }
}

const mapStateToProps = state => {
  const {todoitem, todoDescription, isdone} = state.todoForm;

  return {todoitem, todoDescription, isdone};
};

export default connect(
  mapStateToProps,
  {
    todoUpdate,
    todoCreate,
  },
)(TodoCreate);

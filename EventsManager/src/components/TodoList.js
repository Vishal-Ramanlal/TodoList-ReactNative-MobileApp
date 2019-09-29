import _ from 'lodash';
import React, {Component} from 'react';
import {connect} from 'react-redux';
import {todoFetch} from '../actions';
import {FlatList} from 'react-native';
import MaterialCardWithImageAndTitle from './cards/MaterialCardWithImageAndTitle';

class TodoList extends Component {
  componentWillMount() {
    this.props.todoFetch();

    this.createDataSource(this.props);
  }

  componentWillReceiveProps(nextProps) {
    this.createDataSource(nextProps);
  }

  createDataSource({todos}) {
    this.setState({
      data: Object.values(todos),
    });
  }
  render() {
    return (
      <FlatList
        data={this.state.data}
        renderItem={({item}) => (
          // return a component using that data
          <MaterialCardWithImageAndTitle todo={item} />
        )}
      />
    );
  }
}

const mapStateToProps = state => {
  const todos = _.map(state.todoList, (val, uid) => {
    return {...val, uid};
  });

  return {todos};
};

export default connect(
  mapStateToProps,
  {todoFetch},
)(TodoList);

import React from 'react';
import {Scene, Router, Actions} from 'react-native-router-flux';
import LoginForm from './components/LoginForm';
import TodoList from './components/TodoList';
import TodoCreate from './components/TodoCreate';
import TodoEdit from './components/TodoEdit';
import Register from './components/Register';
import firebase from 'firebase';
import Home from './components/Home';
const RouterComponent = () => {
  return (
    <Router sceneStyle={{paddingTop: 0}}>
      <Scene key="root">
        <Scene key="home" component={Home} initial />
        <Scene key="login" component={LoginForm} />
        <Scene key="register" component={Register} title={'Register'} />
        <Scene
          key="main"
          renderBackButton={null}
          title="Todo List"
          onLeft={null}
          renderLeftButton={null}
          onRight={() =>
            firebase
              .auth()
              .signOut()
              .then(Actions.popTo('home'))
          }
          rightTitle="Logout">
          <Scene
            onRight={() => Actions.todoCreate()}
            rightTitle="Add"
            key="todoList"
            component={TodoList}
            title="Todos"
            initial
          />
          <Scene key="todoCreate" component={TodoCreate} title="Create Todo" renderBackButton={() => {}}  onRight={null}/>
          <Scene key="todoEdit" component={TodoEdit} title="Edit Todo" renderBackButton={() => {}} onRight={null}/>
        </Scene>
      </Scene>
    </Router>
  );
};

export default RouterComponent;

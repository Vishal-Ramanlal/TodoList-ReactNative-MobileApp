import React, {Component} from 'react';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import firebase from 'firebase';
import ReduxThunk from 'redux-thunk';
import reducers from './reducers';
import Router from './Router';

class App extends Component {
  //change with your own firebase config
  componentWillMount() {
    var config = {
      apiKey: 'INSERT_HERE',
      authDomain: 'INSERT_HERE',
      databaseURL: 'INSERT_HERE',
      projectId: 'INSERT_HERE',
      storageBucket: 'INSERT_HERE',
      messagingSenderId: 'INSERT_HERE',
    };
    firebase.initializeApp(config);
  }

  render() {
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));
    return (
      <Provider store={store}>
        <Router />
      </Provider>
    );
  }
}

export default App;

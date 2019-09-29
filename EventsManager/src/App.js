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
      apiKey: 'AIzaSyAypxSlpFRydAaCv6Dvq-GWKrpwjfFWD9A',
      authDomain: 'reactnativedatabase-e638a.firebaseapp.com',
      databaseURL: 'https://reactnativedatabase-e638a.firebaseio.com',
      projectId: 'reactnativedatabase-e638a',
      storageBucket: 'reactnativedatabase-e638a.appspot.com',
      messagingSenderId: '623100458820',
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

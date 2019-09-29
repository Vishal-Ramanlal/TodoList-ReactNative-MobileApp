import firebase from 'firebase';
import {Actions} from 'react-native-router-flux';
import {
  EMAIL_CHANGED,
  PASSWORD_CHANGED,
  LOGIN_USER_SUCCESS,
  LOGIN_USER_FAIL,
  LOGIN_USER, LOGOUT_USER_SUCCESS, LOGOUT_USER_FAIL,
} from './types';

export const emailChanged = text => {
  return {
    type: EMAIL_CHANGED,
    payload: text,
  };
};

export const passwordChanged = text => {
  return {
    type: PASSWORD_CHANGED,
    payload: text,
  };
};
export const logoutUser = () => {
  return dispatch => {
    firebase.auth().signOut().then(r => logoutSuccess(dispatch,r));
  };
};
export const registerUser = ({email, password}) => {
  return dispatch => {
    dispatch({type: LOGIN_USER});
    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then(user => loginUserSuccess(dispatch, user))
      .catch(err => loginUserFail(dispatch));
  };
};
export const loginUser = ({email, password}) => {
  return dispatch => {
    dispatch({type: LOGIN_USER});

    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(user => loginUserSuccess(dispatch, user))
      .catch(error => {
        firebase
          .auth()
          .createUserWithEmailAndPassword(email, password)
          .then(user => loginUserSuccess(dispatch, user))
          .catch(() => loginUserFail(dispatch));
      });
  };
};

const logoutSuccess = (dispatch, user) => {
  dispatch({type: LOGOUT_USER_SUCCESS, payload: user});
  Actions.login();
};
const logoutFail = dispatch => {
  dispatch({type: LOGOUT_USER_FAIL});
};
const loginUserFail = dispatch => {
  dispatch({type: LOGIN_USER_FAIL});
};

const loginUserSuccess = (dispatch, user) => {
  dispatch({
    type: LOGIN_USER_SUCCESS,
    payload: user,
  });

  Actions.main();
};

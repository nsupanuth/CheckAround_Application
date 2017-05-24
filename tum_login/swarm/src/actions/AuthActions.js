import firebase from 'firebase';
import { Actions } from 'react-native-router-flux';
import {
	EMAIL_CHANGED,
	PASSWORD_CHANGED,
	ON_LOGIN,
	ON_LOGIN_SUCCESS,
	ON_LOGIN_FAILED,
} from './type';

export const onEmailChange = (text) => {
	return {
		type: EMAIL_CHANGED,
		payload: text,
	}
};

export const onPasswordChange = (text) => {
	return {
		type: PASSWORD_CHANGED,
		payload: text,
	}
}

export const onLogin = ({ email, password } ) => {
	return (dispatch) => {
		dispatch({ type: ON_LOGIN });
		firebase.auth().signInWithEmailAndPassword(email, password)
			.then((data) => {
				dispatch({ type: ON_LOGIN_SUCCESS });	
			})
			.catch((error) => {
				
				firebase.auth().createUserWithEmailAndPassword(email ,password)
					.then((data) => {
						console.log(data);
						dispatch({ type: ON_LOGIN_SUCCESS });
						Actions.main({ type: 'reset' })
					})
					.catch((error) => {
						console.log(error);
						dispatch({ type: ON_LOGIN_FAILED });
					})
			})
	}
}
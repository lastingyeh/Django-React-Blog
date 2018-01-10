import axios from 'axios';
import { AUTH_USER, SINGUP_USER, AUTH_ERROR, UNAUTH_USER } from '../types';

const ROOT_URL = 'http://localhost:8000/accounts/api/';

// User-Register Action
export function signup(formValue, callback) {
	const URL = `${ROOT_URL}register/`;

	return dispatch => {
		axios
			.post(URL, formValue)
			.then(response => {
				const { username } = response.data;
				console.log(username);

				dispatch({ type: SINGUP_USER });

				localStorage.setItem('token', response.data.token);
				localStorage.setItem('username', username);

				callback();
			})
			.catch(error => {
				dispatch({
					type: AUTH_ERROR,
					payload: 'ERROR occurred. Username may exists in database.'
				});
			});
	};
}

// User-Login Action
export function signin(formValue, callback) {
	const URL = `${ROOT_URL}home/login/token/`;

	return dispatch => {
		axios
			.post(URL, formValue)
			.then(response => {
				const { username } = response.data.user;

				dispatch({ type: AUTH_USER });

				localStorage.setItem('token', response.data.token);
				localStorage.setItem('username', username);

				callback();
			})
			.catch(error => {
				dispatch({
					type: AUTH_ERROR,
					payload: 'Bad Login Credentials.'
				});
			});
	};
}

// User-Logout Action
export function signout(callback) {
	localStorage.removeItem('token');
	localStorage.removeItem('username');

	return dispatch => {
		dispatch({ type: UNAUTH_USER });
		callback();
	};
}

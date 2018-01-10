import axios from 'axios';

import { AUTH_USER } from '../types';

export function loginUsingFb(body, callback) {
	const URL = 'http://localhost:8000/rest-auth/facebook/';

	return dispatch => {
		axios.post(URL.body).then(response => {
			dispatch({ type: AUTH_USER });

			const { token } = response.data;
			const { username } = response.data.user;

			localStorage.setItem('token', token);
			localStorage.setItem('username', username);

			callback();
		});
	};
}

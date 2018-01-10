import { AUTH_USER, AUTH_ERROR, UNAUTH_USER, SINGUP_USER, SINGUP_ERROR } from '../actions/types';

const initState = {
	authenticated: false,
	loginError: null,
	signupError: null
};

const reducer = (state = initState, action) => {
	switch (action.type) {
		case AUTH_USER:
			return { ...state, authenticated: true };
		case UNAUTH_USER:
			return { ...state, authenticated: false };
		case AUTH_ERROR:
			return { ...state, authenticated: false, loginError: action.payload, signupError: null };
		case SINGUP_USER:
			return { ...state, authenticated: false };
		case SINGUP_ERROR:
			return { ...state, authenticated: true, loginError: null, signupError: action.payload };
	}
	return state;
};

export default reducer;

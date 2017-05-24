import {
	EMAIL_CHANGED,
	PASSWORD_CHANGED,
	ON_LOGIN,
	ON_LOGIN_SUCCESS,
	ON_LOGIN_FAILED,
} from '../actions/type';

const INITIAL_STATE = {
	email: '',
	password: '',
	loading: false,
	error: '',
}

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
		case EMAIL_CHANGED:
			return { ...state, email: action.payload }
		case PASSWORD_CHANGED:
			return { ...state, password: action.payload }
		case ON_LOGIN:
			return { ...state, email: '', password: '', loading: true, error: '' };
		case ON_LOGIN_SUCCESS:
			return { ...state, loading: false }
		case ON_LOGIN_FAILED:
			return { ...state, loading: false, error: 'Authentication failed' }
    default:
      return state;
  }
};
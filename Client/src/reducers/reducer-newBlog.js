import { CREATED_POST } from '../actions/types';

const initState = {
	created: false,
	data: []
};

const reducer = (state = initState, action) => {
	switch (action.type) {
		case CREATED_POST:
			return { ...state, created: true, data: action.payload };
		default:
			return state;
	}
};

export default reducer;

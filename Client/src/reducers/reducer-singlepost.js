import {
	FETCHING_POST,
	FETCHED_POST,
	DELETING_POST,
	DELETED_POST
} from '../actions/types';

const initState = {
	isFetching: false,
	isFetched: false,
	deleting: false,
	deleted: false,
	data: null
};

const reducer = (state = initState, action) => {
	switch (action.type) {
		case FETCHING_POST:
			return { ...state, isFetching: true, isFetched: false };
		case FETCHED_POST:
			return {
				...state,
				isFetching: false,
				isFetched: true,
				data: action.payload
			};
		case DELETING_POST:
			return { ...state, deleting: true, deleted: false };
		case DELETED_POST:
			return { ...state, deleting: false, deleted: true };
		default:
			return state;
	}
};

export default reducer;

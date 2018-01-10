import { FETCHING_BLOGS, FETCHED_BLOGS, ERROR } from '../actions/types';

const initState = {
	isFetching: false,
	isFetched: false,
	error: null,
	posts: []
};

const reducer = (state = initState, action) => {
	switch (action.type) {
		case FETCHING_BLOGS:
			return { ...state, isFetching: true, isFetched: false };
		case FETCHED_BLOGS:
			return {
				...state,
				isFetching: false,
				isFetched: true,
				posts: action.payload.data
			};
		case ERROR:
			return {
				...state,
				isFetching: false,
				isFetched: false,
				error: action.payload
			};
		default:
			return state;
	}
};

export default reducer;

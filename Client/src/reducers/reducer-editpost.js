import { EDITING_POST, EDITED_POST } from '../actions/types';

const initState = {
	isEditing: false,
	isEdited: false
};

const reducer = (state = initState, action) => {
	switch (action.type) {
		case EDITING_POST:
			return { ...state, isEditing: true, isEdited: false };
		case EDITED_POST:
			return { ...state, isEdited: false, isEdited: true };
		default:
			return state;
	}
};

export default reducer;

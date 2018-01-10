import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';

import authReducer from './reducer-auth';
import blogReducer from './reducer-blog';
import newBlogReducer from './reducer-newBlog';
import singlePostReducer from './reducer-singlepost';
import editPostReducer from './reducer-editpost';

const rootReducer = combineReducers({
	form: formReducer,
	auth: authReducer,
	blogs: blogReducer,
	newpost: newBlogReducer,
	post: singlePostReducer,
	editpost: editPostReducer
});

export default rootReducer;

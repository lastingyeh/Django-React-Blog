import axios from 'axios';

import { tokenHeader } from '../utils/headers';
import {
	FETCHING_BLOGS,
	FETCHED_BLOGS,
	ERROR,
	CREATED_POST,
	FETCHING_POST,
	FETCHED_POST,
	DELETING_POST,
	DELETED_POST,
	EDITING_POST,
	EDITED_POST
} from './types';

const root_url = 'http://localhost:8000/';

export function getBlogs() {
	const sub_url = 'blog/api/';
	const url = `${root_url}${sub_url}`;

	const request = axios.get(url, tokenHeader());

	return dispatch => {
		dispatch({ type: FETCHING_BLOGS });

		request
			.then(response => {
				console.log('FETCHED')
				dispatch({ type: FETCHED_BLOGS, payload: response });
			})
			.catch(err => {
				console.log(err)
				dispatch({ type: ERROR, payload: err });
			});
	};
}

export function createPost(formValue, callback) {
	const sub_url = 'blog/api/create/';
	const url = `${root_url}${sub_url}`;

	const request = axios.post(url, formValue, tokenHeader()).then(() => callback());

	return {
		type: CREATED_POST,
		payload: request
	};
}

export function viewPost(id) {
	const sub_url = `blog/api/detail/${id}`;
	const url = `${root_url}${sub_url}`;
	const request = axios.get(url, tokenHeader());

	return dispatch => {
		dispatch({ type: FETCHING_POST });

		request.then(response => {
			dispatch({ type: FETCHED_POST, payload: response.data });
		});
	};
}

export function deletePost(id, callback) {
	const sub_url = `blog/api/delete/${id}`;
	const url = `${root_url}${sub_url}`;
	const request = axios.delete(url, tokenHeader());

	return dispatch => {
		dispatch({ type: DELETING_POST });

		request.then(() => {
			dispatch({ type: DELETED_POST });
			callback();
		});
	};
}

export function editPost(formValue, id, callback) {
	console.log(formValue);

	const sub_url = `blog/api/update/${id}/`;
	const url = `${root_url}${sub_url}`;
	const request = axios.put(url, formValue, tokenHeader());

	return dispatch => {
		dispatch({ type: EDITING_POST });

		request.then(() => {
			dispatch({ type: EDITED_POST });
			callback();
		});
	};
}

import React, { Component } from 'react';
import { connect } from 'react-redux';

import EditPostForm from '../containers/edit_form';
import Loading from '../components/loading';

// actions
import { viewPost } from '../actions';

class EditPost extends Component {
	componentWillMount() {
		const { id } = this.props.match.params;
		this.props.viewPost(id);
	}

	render() {
		const { isFetching, isFetched } = this.props.post;

		return (
			<div className="container">
				{isFetching ? <Loading /> : isFetched ? <EditPostForm data={this.props.post} /> : <Loading />}
			</div>
		);
	}
}

const mapStateToProps = state => {
	const { post } = state;
	return { post };
};

export default connect(mapStateToProps, { viewPost })(EditPost);

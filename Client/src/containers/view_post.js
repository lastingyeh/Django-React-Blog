import React, { Component } from 'react';
import { connect } from 'react-redux';

import PostDetail from '../containers/postdetail';
import Loading from '../components/loading';

// action
import { viewPost } from '../actions';

class ViewPost extends Component {
	componentWillMount() {
		const { id } = this.props.match.params;
		this.props.viewPost(id);
	}

	render() {
		const { isFetching, isFetched } = this.props.post;

		return (
			<div className="container">
				{isFetching ? <Loading /> : isFetched ? <PostDetail data={this.props} /> : <Loading />}
			</div>
		);
	}
}

const mapStateToProps = state => {
	const { post } = state;
	return { post };
};

export default connect(mapStateToProps, { viewPost })(ViewPost);

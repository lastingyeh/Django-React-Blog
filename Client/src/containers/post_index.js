import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { getBlogs } from '../actions';

// containers
import Posts from '../components/posts';

// components
import Loading from '../components/loading';
import Err from '../components/error';

class Blogs extends Component {
	componentDidMount() {
		console.log('cdm')
		this.props.getBlogs();
	}

	render() {
		const isFetching = this.props.blogs.isFetching;
		const isFetched = this.props.blogs.isFetched;
		console.log('blogs', this.props.blogs);
		return (
			<div className="container">
				{isFetching ? <Loading /> : isFetched ? <Posts posts={this.props.blogs.posts} /> : <Err />}
			</div>
		);
	}
}

const mapStateToProps = state => {
	const { blogs } = state;
	return { blogs };
};

const mapDispatchToProps = dispatch => bindActionCreators({ getBlogs }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Blogs);

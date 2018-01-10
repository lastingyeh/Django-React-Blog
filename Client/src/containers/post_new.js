import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

// actions
import { createPost } from '../actions';

class PostNew extends Component {
	onSubmit = formValue => {
		this.props.createPost(formValue, () => {
			this.props.history.push('/');
		});
	};

	render() {
		const { handleSubmit } = this.props;

		return (
			<div className="columns">
				<div className="column col-4" ></div>
				<div className="column col-4">
					<form onSubmit={handleSubmit(this.onSubmit)}>
						<div className="form-group">
							<label className="form-label">Title</label>
							<Field
								component="input"
								name="title"
								type="text"
								className="form-input"
								placeholder="Enter the title of the post"
							/>
						</div>
						<div className="form-group">
							<label className="form-label">Message</label>
							<Field
								component="textarea"
								name="content"
								className="form-input"
								id="input-example-3"
								placeholder="Textarea"
								rows="3"
							/>
						</div>
						<div className="form-group">
							<button className="btn btn-primary" type="submit" id="vini">
								Post
							</button>
							<Link to="/" className="btn btn-default">
								Cancel
							</Link>
						</div>
					</form>
				</div>
			</div>
		);
	}
}

const mapStateToProps = state => {
	const { newpost } = state;
	return { newpost };
};

export default connect(mapStateToProps, { createPost })(
	reduxForm({
		form: 'PostForm',
		fields: ['title', 'content']
	})(PostNew)
);

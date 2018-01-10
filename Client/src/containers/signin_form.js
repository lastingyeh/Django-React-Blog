import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import { Field, reduxForm } from 'redux-form';
import { renderInput } from '../utils/redux-form-fields';

// actions
import { signin } from '../actions/Authentication';
import SocialAuth from './socialauth';

class Signin extends Component {
	formSubmit = formValue => {
		this.props.signin(formValue, () => {
			this.props.history.push('/');
		});
	};

	render() {
		const { handleSubmit } = this.props;
		const { loginError } = this.props.auth;
		console.log(this.props.auth);

		return (
			<div className="columns columns-signin">
				<div className="column">
					<form onSubmit={handleSubmit(this.formSubmit)}>
						<Field component={renderInput} type="text" name="username" label="Username" />
						<Field component={renderInput} type="password" name="password" label="Password" />
						<div className="form-group">
							{loginError ? (
								<div className="form-group">
									<span className="label label-error">{loginError}</span>
								</div>
							) : (
								''
							)}
							<button type="submit" className="btn btn-primary">
								Sign In
							</button>
						</div>
					</form>
				</div>
				<div className="divider-vert" data-content="OR" />
				<div className="column col-5">
					<form>
						<div className="form-group">
							<button className="btn btn-link btn-clock">Continue with Social Accounts</button>
						</div>
						<div className="form-group">
							<SocialAuth />
						</div>
					</form>
				</div>
			</div>
		);
	}
}

Signin = withRouter(Signin);

Signin = reduxForm({
	form: 'SigninForm',
	fields: ['username', 'password']
})(Signin);

const mapStateToProps = state => {
	const { auth } = state;
	return { auth };
};

export default connect(mapStateToProps, { signin })(Signin);

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

export default function(ComposedComponent) {
	class Authentication extends Component {
		componentWillMount() {
			const { authenticated } = this.props;

			if (!authenticated) {
				this.props.history.push('/signin');
			}
		}

		componentWillReceiveProps(nextProps) {
			if (!nextProps.authenticated) {
				this.props.history.push('/signin');
			}
		}

		render() {
			return <ComposedComponent {...this.props} />;
		}
	}
	Authentication = withRouter(Authentication);

	const mapStateToProps = state => {
		const { authenticated } = state.auth;
		return { authenticated };
	};

	return connect(mapStateToProps)(Authentication);
}

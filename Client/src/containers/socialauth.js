import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

import { loginUsingFb } from '../actions/Authentication/social-auth';

class SocialAuth extends Component {
	componentDidMount() {
		this.loadFbLoginApi();
	}

	loadFbLoginApi = () => {
		window.fbAsyncInit = function() {
			FB.init({
				appId: 'your-app-id',
				cookie: true,
				xfbml: true,
				version: 'v2.11'
			});
		};

		console.log('Loading fb api');

		(function(d, s, id) {
			var js,	fjs = d.getElementsByTagName(s)[0];

			if (d.getElementById(id)) return;

			js = d.createElement(s);
			js.id = id;
			js.src = 'https://connect.facebook.net/en_US/sdk.js';
			fjs.parentNode.insertBefore(js, fjs);
		})(document, 'script', 'facebook-jssdk');
	};

	testAPI = () => {
		console.log('Welcome! Fetching your information...');

		FB.api('/me', function(response) {
			console.log(`Successful login for: ${response.name}`);
		});
	};

	callFbLogin = (accessToken, response) => {
		const body = {
			access_token: accessToken
		};

		console.log(response);

		this.props.loginUsingFb(body, () => {
			this.props.history.push('/');
		});
	};

	statusChangeCallback = response => {
		const { accessToken } = response.authResponse;

		if (response.status === 'connected') {
			this.callFbLogin(accessToken);
			// the user is logged in and has authenticated your app
		} else if (response.status === 'not_authorized') {
			console.log('Please log into this app.');
			// the user is logged in to Facebook,
			// but has not authenticated your app
		} else {
			console.log('Please log into this facebook.');
			// the user isn't logged in to Facebook.
		}

		thsi.callFbLogin(accessToken, response);
	};

	checkLoginState = () => {
		FB.getLoginStatus(
			function(response) {
				this.statusChangeCallback(response);
			}.bind(this)
		);
	};

	handleFBLogin = () => {
		FB.login(this.checkLoginState());
	};

	render() {
		return (
			<a onClick={this.handleFBLogin} className="btn btn-block btn-fb">
				Facebook
			</a>
		);
	}
}

SocialAuth = withRouter(SocialAuth);

export default connect(null, { loginUsingFb })(SocialAuth);

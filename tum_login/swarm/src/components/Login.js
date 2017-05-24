import React, { Component } from 'react';
import { View, Text, TextInput, TouchableOpacity, ActivityIndicator } from 'react-native';
import { connect } from 'react-redux';

import * as actions from '../actions';
import { Button } from './commons';

class Login extends Component {
	onEmailChanged(text) {
		this.props.onEmailChange(text);
	}
	onPasswordChanged(text) {
		this.props.onPasswordChange(text);
	}

	onLogin() {
		const { email, password } = this.props;
		this.props.onLogin({ email, password })

	}

	renderLoading() {
		if(this.props.loading) {
			return <ActivityIndicator />
		}
		return (
			<View style={styles.wrapper}>
					<Text style={styles.title}>
						Login
					</Text>
					<View>
						<TextInput
							autoCapitalize="none"
							onChangeText={this.onEmailChanged.bind(this)}
							value={this.props.email}
							style={styles.textInput}
							placeholder="email"/>
						<TextInput
							onChangeText={this.onPasswordChanged.bind(this)}
							value={this.props.password}
							style={styles.textInput}
							secureTextEntry
							placeholder="password"/>
					</View>
					<View>
						<Button onPress={this.onLogin.bind(this)}>
							Submit
						</Button>
					</View>
				</View>
		)
	}

	render() {
		return (
			<View style={styles.container}>
				{ this.renderLoading() }
			</View>
		)
	}
}

const styles = {
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: '#f8f8f8'
	},
	wrapper: {
		backgroundColor: '#ffffff',
		borderRadius: 3,
		padding: 20,
	},
	title: {
		textAlign: 'center',
		fontSize: 20,
		marginBottom: 5,
	},
	textInput: {
		width: 250,
		height: 40,
		padding: 5,
		backgroundColor: '#dddddd',
		marginBottom: 10,
		fontSize: 16,
	}
}

const mapStateToProps = ({ auth }) => {
	const { email, password, loading, error } = auth;
	return { email, password, loading, error }
}

export default connect( mapStateToProps, actions )(Login);
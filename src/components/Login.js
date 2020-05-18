import React, { Component } from 'react';
import { Input, Button, Card, CardBody, Form, CardHeader, Label, CardFooter } from 'reactstrap';
import { connect } from 'react-redux';
import { doLogin } from '../redux/actions/LoginAction';
import './Style.css';

class Login extends Component {
	constructor(props) {
		super(props);
		this.state = {
			error: false,
			errorMsg: ''
		};
	}

	login() {
		console.log('dfghj');
		this.props.doLogin('Sucess');
		this.props.history.push('./DashBoard');
	}

	onClickLogIn = (e) => {
		e.preventDefault();
		const data = new FormData(document.getElementById('Login'));
		console.log('data', data.get('username'));
		console.log('datap', data.get('password'));
		const username = data.get('username');
		const password = data.get('password');
		username !== 'hruday@gmail.com' && password !== 'hruday123'
			? this.setState({ error: true, errorMsg: 'Invalid Username and Password' })
			: username !== 'hruday@gmail.com'
				? this.setState({ error: true, errorMsg: 'Invalid Username' })
				: password !== 'hruday123' ? this.setState({ error: true, errorMsg: 'Invalid Password' }) : this.login();
	};

	render() {
		console.log('prop', this.props);
		return (
			<div>
				<Card id="ass">
					<Form id="Login" onSubmit={this.onClickLogIn}>
						<CardHeader>
							<h3> SignIn </h3>
						</CardHeader>
						<CardBody>
							<Label>User Name:</Label>
							<Input name="username" required />
							<br />
							<Label>Password:</Label>
							<Input name="password" type="Password" required />
							{this.state.error && <div style={{ color: 'red', margin: 5 }}>{this.state.errorMsg}</div>}
						</CardBody>
						<CardFooter>
							<Button type="submit">LogIn</Button>
						</CardFooter>
					</Form>
				</Card>
			</div>
		);
	}
}

const mapStateToProps = (reduxState) => {
	console.log('state', reduxState);
	return {};
};

const mapDispatchToProps = (dispatch) => {
	return {
		doLogin: (data) => dispatch(doLogin(data))
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);

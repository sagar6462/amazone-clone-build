import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import "./Login.css";
import { auth } from "./firebase";
import firebase from "firebase";

function Login() {
	const history = useHistory();
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	const signIn = (e) => {
		e.preventDefault();
		// firebase login

		auth
			.signInWithEmailAndPassword(email, password)
			.then((auth) => {
				history.push("/");
			})
			.catch((error) => alert(error.message));
	};

	const register = (e) => {
		e.preventDefault();
		//firebase register

		auth

			.createUserWithEmailAndPassword(email, password)
			.then((auth) => {
				// it successfully created a new user with email and password
				console.log(auth);
				if (auth) {
					history.push("/");
				}
			})
			.catch((error) => alert(error.message));
	};
	return (
		<div className='login'>
			<Link to='/'>
				<img
					className='login__logo'
					src='https://media.corporate-ir.net/media_files/IROL/17/176060/Oct18/Amazon%20logo.PNG'
					alt=''
				/>
			</Link>
			<div className='login__container'>
				<h1>Sign-in</h1>
				<form action=''>
					<h5>E-mail</h5>
					<input
						type='text'
						value={email}
						onChange={(e) => setEmail(e.target.value)}
					/>

					<h5>Password</h5>
					<input
						type='password'
						value={password}
						onChange={(e) => setPassword(e.target.value)}
					/>

					<button
						className='login__signInButton'
						onClick={signIn}
						type='submit'
					>
						Sign In
					</button>
					<p>
						By signing-in you agree to Amazon's Conditions of Use & Sale. Please
						see our Privacy Notice, our Cookies Notice and our Interest-Based
						Ads Notice.
					</p>
				</form>

				<button className='login__registerButton' onClick={register}>
					Create your Amazon account
				</button>
			</div>
		</div>
	);
}

export default Login;

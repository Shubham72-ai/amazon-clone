import React, { useState } from "react";
import { useHistory } from "react-router";
import { auth } from "./firebase";
import "./Login.css";
function Login() {
	const history = useHistory();
	const [password, setPassword] = useState("");
	const [email, setEmail] = useState("");
	const login = (e) => {
		e.preventDefault();
		auth
			.signInWithEmailAndPassword(email, password)
			.then((auth) => {
				// log in logic here
				history.push("/");
			})
			.catch((e) => alert(e.message));
	};
	const register = (e) => {
		e.preventDefault();
		auth
			.createUserWithEmailAndPassword(email, password)
			.then((e) => {
				// logic here
				history.push("/");
			})
			.catch((e) => {
				// lgic here
				alert(e.massage);
				console.log(e.massage);
			});
	};
	return (
		<div className="login">
			<div className="login__container">
				<h1>SignIn</h1>
				<form>
					<h5>Email</h5>
					<input
						type="text"
						type="email"
						value={email}
						onChange={(e) => setEmail(e.target.value)}
					/>
					<h5>Password</h5>
					<input
						type="text"
						value={password}
						onChange={(e) => setPassword(e.target.value)}
					/>
					<button type="submit" className="login__signInButton" onClick={login}>
						Sign In
					</button>
				</form>
				<p>
					by singing in you are agreeing to the terms and condition of amazon
				</p>
				<button className="login__signInButtonCreate" onClick={register}>
					crate your amazon account
				</button>
			</div>
		</div>
	);
}

export default Login;

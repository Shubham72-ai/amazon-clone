import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./Header";
import Home from "./Home";
import Checkout from "./Checkout";
import Login from "./Login";
import { useEffect } from "react";
import { auth } from "./firebase";
import { useStateValue } from "./StateProvider";
function App() {
	const [{ user }, dispatch] = useStateValue();
	// we need a piece of code that runs with the given condition
	// we will use useEffect hook to do this

	useEffect(() => {
		const unsubscribe = auth.onAuthStateChanged((authUser) => {
			if (authUser) {
				// then user is logged in
				dispatch({
					type: "SET_USER",
					user: authUser
				});
			} else {
				dispatch({
					type: "SET_USER",
					user: null
				});
			} // logged out
		});
		return () => {
			// we will do the clean up in here
			unsubscribe();
		};
	}, []);
	console.log(user);
	return (
		<Router>
			<div className="App">
				<Switch>
					<Route path="/login">
						<Login />
					</Route>
					<Route path="/checkout">
						<Header />
						<Checkout />
					</Route>
					<Route path="/">
						<Header />
						<Home />
					</Route>
				</Switch>
			</div>
		</Router>
	);
}

export default App;

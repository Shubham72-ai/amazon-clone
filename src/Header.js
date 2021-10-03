import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import { useStateValue } from "./StateProvider";
import { auth } from "./firebase";

function Header() {
	const [{ busket, user }] = useStateValue();
	console.log("->", busket);
	console.log("User-> ", user.email.split("@")[0]);
	const logOut = () => {
		if (user) {
			auth.signOut();
		} else return;
	};
	return (
		<nav className="header">
			{/* logo on the left */}
			<Link to="/">
				<img
					src="https://pngimg.com/uploads/amazon/amazon_PNG11.png"
					className="header__img"
				/>
			</Link>
			{/* searchBox */}
			<div className="header__search">
				<input type="text" className="header__searchInput" />
				<SearchIcon className="header__searchIcon" />
			</div>
			{/* 3 links */}
			<div className="header__nav">
				{/* 1 link */}
				<Link className="header__link" to="/login">
					<div className="header__option">
						<span className="header__lineOne">
							{user ? user.email.split("@")[0] : "hello user"}
						</span>
						<span className="header__lineTwo" onClick={logOut}>
							{user ? "Sign Out" : "Sign In"}
						</span>
					</div>
				</Link>
				{/* 2 link */}
				<Link className="header__link" to="/login">
					<div className="header__option">
						<span className="header__lineOne">Return</span>
						<span className="header__lineTwo">& Orders</span>
					</div>
				</Link>
				{/* 3 link */}
				<Link className="header__link" to="/login">
					<div className="header__option">
						<span className="header__lineOne">Your</span>
						<span className="header__lineTwo">Prime</span>
					</div>
				</Link>
			</div>
			{/* busket with numb */}
			<Link to="/checkout" className="header__link">
				<div className="header__optionBusket">
					{/* shopping busket icon */}
					<ShoppingBasketIcon />
					{/* number in the busket */}
					<span className="header__lineTwo header__busketCount">
						{busket?.length}
					</span>
				</div>
			</Link>
		</nav>
	);
}

export default Header;

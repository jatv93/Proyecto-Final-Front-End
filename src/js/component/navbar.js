import React from "react";
import { Link } from "react-router-dom";
import logo from "../../img/logo-navbar.jpg";

export const Navbar = () => {
	return (
		<nav className="navbar navbar-light bg-white mb-3">
			<Link to="/">
				<img className="navbar-brand mb-0 h1" src={logo} />
			</Link>
			<div className="ml-auto">
				<Link to="/registro">
					<button className="btn btn-warning mr-3">Registro</button>
				</Link>
				<Link to="/login">
					<button className="btn btn-warning mr-3">Login</button>
				</Link>
			</div>
		</nav>
	);
};

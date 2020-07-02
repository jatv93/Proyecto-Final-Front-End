import React from "react";
import { Link } from "react-router-dom";

export const SearchBar = () => {
	return (
		<nav className="navbar navbar-light bg-white mb-3">
			<h1>Generaciones/Cohortes</h1>

			<div className="ml-auto">
				<form className="form-inline my-2 my-lg-0">
					<input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
					<button className="btn btn-outline-success my-2 my-sm-0" type="submit">
						Search
					</button>
				</form>
			</div>
		</nav>
	);
};
